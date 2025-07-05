// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeCommunity from './components/WelcomeCommunity';
import SoulCommunityLayout from './components/SoulCommunityLayout';
import CreatePost from './components/CreatePost';
import CommunityFeed from './components/CommunityFeed';
import CommunityFilteredFeed from './components/CommunityFilteredFeed';
import Profile from './components/Profile';
import Search from './components/Search'; // NEW: Import Search component
import UserPublicProfile from './components/UserPublicProfile'; // NEW: Import UserPublicProfile component
import UserSettings from './components/UserSettings'; 
import UserConnections from './components/UserConnections';

function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-[#f5f5f5] flex flex-col">
                <Routes>
                    {/* Welcome Page - This page does NOT use SoulCommunityLayout as it's a full-screen intro */}
                    <Route path="/" element={<WelcomeCommunity />} />
                    <Route path="/community" element={<WelcomeCommunity />} />

                    {/* All other community pages will be wrapped by SoulCommunityLayout */}
                    <Route
                        path="/community/main"
                        element={
                            <SoulCommunityLayout>
                                <CommunityFeed />
                            </SoulCommunityLayout>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <SoulCommunityLayout>
                                <Profile />
                            </SoulCommunityLayout>
                        }
                    />
                    <Route
                        path="/community/create"
                        element={
                            <SoulCommunityLayout>
                                <CreatePost />
                            </SoulCommunityLayout>
                        }
                    />
                    <Route
                        path="/community/discover"
                        element={
                            <SoulCommunityLayout>
                                <CommunityFilteredFeed />
                            </SoulCommunityLayout>
                        }
                    />
                    {/* NEW: Search Route */}
                    <Route
                        path="/community/search"
                        element={
                            <SoulCommunityLayout>
                                <Search />
                            </SoulCommunityLayout>
                        }
                    />
                    {/* NEW: User Public Profile Route - :userId is a URL parameter */}
                    <Route
                        path="/community/profile/:userId"
                        element={
                            <SoulCommunityLayout>
                                <UserPublicProfile />
                            </SoulCommunityLayout>
                        }
                    />
                    <Route
                    path="/community/settings"
                    element={
                        <SoulCommunityLayout>
                            <UserSettings />
                        </SoulCommunityLayout>
                    }
                />
                <Route
                        path="/community/profile/:userId/connections"
                        element={
                            <SoulCommunityLayout>
                                <UserConnections />
                            </SoulCommunityLayout>
                        }
                    />
            </Routes>
            </div>
            
        </Router>
    );
}

export default App;
