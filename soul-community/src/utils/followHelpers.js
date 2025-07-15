

import { doc, setDoc, deleteDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Follow a user.
 * @param {string} currentUid - ID of the logged-in user (who is following)
 * @param {string} targetUid - ID of the user to be followed
 */
export async function followUser(currentUid, targetUid) {
  if (!currentUid || !targetUid || currentUid === targetUid) return;

  const currentUserRef = doc(db, 'users', currentUid);
  const targetUserRef = doc(db, 'users', targetUid);

  const followingRef = doc(db, 'users', currentUid, 'following', targetUid);
  const followersRef = doc(db, 'users', targetUid, 'followers', currentUid);

  try {
    // Create subcollection docs
    await setDoc(followingRef, { followedAt: new Date() });
    await setDoc(followersRef, { followedAt: new Date() });

    // Update counts
    await updateDoc(currentUserRef, { followingCount: increment(1) });
    await updateDoc(targetUserRef, { followersCount: increment(1) });

    console.log("Followed successfully!");
  } catch (err) {
    console.error("Error following user:", err);
  }
}

/**
 * Unfollow a user.
 * @param {string} currentUid - ID of the logged-in user (who is unfollowing)
 * @param {string} targetUid - ID of the user to be unfollowed
 */
export async function unfollowUser(currentUid, targetUid) {
  if (!currentUid || !targetUid || currentUid === targetUid) return;

  const currentUserRef = doc(db, 'users', currentUid);
  const targetUserRef = doc(db, 'users', targetUid);

  const followingRef = doc(db, 'users', currentUid, 'following', targetUid);
  const followersRef = doc(db, 'users', targetUid, 'followers', currentUid);

  try {
    // Remove subcollection docs
    await deleteDoc(followingRef);
    await deleteDoc(followersRef);

    // Update counts
    await updateDoc(currentUserRef, { followingCount: increment(-1) });
    await updateDoc(targetUserRef, { followersCount: increment(-1) });

    console.log("Unfollowed successfully!");
  } catch (err) {
    console.error("Error unfollowing user:", err);
  }
}
