// // pages/signin.tsx or your login component
// // app/lib/auth.ts

// export const getUserInfo = () => {
//   if (typeof window === "undefined") return { token: null, role: null };

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   return { token, role };
// };

// export const isAuthenticated = () => {
//   const { token, role } = getUserInfo();
//   return !!token && !!role;
// };

// export const logout = () => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//   }
// };
