// "use client";

// import { useState, ChangeEvent } from "react";
// import { Button } from "../../ui/button";
// import { Input } from "../../ui/input";

// interface TherapistSettingsProps {
//   onBack?: () => void;
// }

// interface SettingsState {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   timeZone: string;
//   emailNotifications: boolean;
//   inAppNotifications: boolean;
//   twoFactorAuth: boolean;
//   currentTheme: string;
// }

// const TherapistSettings = ({ onBack }: TherapistSettingsProps): JSX.Element => {
//   const [settings, setSettings] = useState<SettingsState>({
//     fullName: "Priya Sharma",
//     email: "priya.sharma@email.com",
//     phoneNumber: "+1 (555) 123-4567",
//     timeZone: "Eastern Standard Time",
//     emailNotifications: true,
//     inAppNotifications: true,
//     twoFactorAuth: false,
//     currentTheme: "Light",
//   });

//   const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

//   const handleInputChange = (
//     field: keyof SettingsState,
//     value: string | boolean,
//   ) => {
//     setSettings((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSaveChanges = (): void => {
//     alert("Settings saved successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
//         <h2 className="text-2xl font-bold text-gray-800">Settings</h2>

//         {/* Profile Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Profile</h3>
//           <div className="space-y-4">
//             <Input
//               value={settings.fullName}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 handleInputChange("fullName", e.target.value)
//               }
//               placeholder="Full Name"
//             />
//             <Input
//               value={settings.email}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 handleInputChange("email", e.target.value)
//               }
//               placeholder="Email"
//             />
//             <Input
//               value={settings.phoneNumber}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 handleInputChange("phoneNumber", e.target.value)
//               }
//               placeholder="Phone Number"
//             />
//             <Input
//               value={settings.timeZone}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 handleInputChange("timeZone", e.target.value)
//               }
//               placeholder="Time Zone"
//             />
//           </div>
//         </div>

//         {/* Notifications */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Notifications</h3>
//           <div className="space-y-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={settings.emailNotifications}
//                 onChange={(e) =>
//                   handleInputChange("emailNotifications", e.target.checked)
//                 }
//               />
//               <span>Email Notifications</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={settings.inAppNotifications}
//                 onChange={(e) =>
//                   handleInputChange("inAppNotifications", e.target.checked)
//                 }
//               />
//               <span>In-App Notifications</span>
//             </label>
//           </div>
//         </div>

//         {/* Privacy */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Privacy</h3>
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={settings.twoFactorAuth}
//               onChange={(e) =>
//                 handleInputChange("twoFactorAuth", e.target.checked)
//               }
//             />
//             <span>Two-Factor Authentication</span>
//           </label>
//         </div>

//         {/* Theme */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Theme</h3>
//           <select
//             value={settings.currentTheme}
//             onChange={(e) => handleInputChange("currentTheme", e.target.value)}
//             className="w-full border border-gray-300 rounded p-2"
//           >
//             <option value="Light">Light</option>
//             <option value="Dark">Dark</option>
//             <option value="System">System Default</option>
//           </select>
//         </div>

//         {/* Password Change */}
//         <div>
//           <Button onClick={() => setShowChangePassword(true)} variant="outline">
//             Change Password
//           </Button>

//           {showChangePassword && (
//             <div className="mt-4 p-4 border rounded bg-gray-100">
//               <Input
//                 placeholder="Old Password"
//                 type="password"
//                 className="mb-2"
//               />
//               <Input
//                 placeholder="New Password"
//                 type="password"
//                 className="mb-2"
//               />
//               <Input
//                 placeholder="Confirm Password"
//                 type="password"
//                 className="mb-4"
//               />
//               <div className="flex space-x-2">
//                 <Button
//                   variant="default"
//                   onClick={() => alert("Password changed!")}
//                 >
//                   Update Password
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   onClick={() => setShowChangePassword(false)}
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Actions */}
//         <div className="flex justify-end space-x-2 pt-4">
//           <Button onClick={onBack} variant="ghost">
//             Back
//           </Button>
//           <Button onClick={handleSaveChanges} variant="default">
//             Save Changes
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TherapistSettings;
"use client"

import { useState } from "react"
import { Home, FileText, Calendar, Settings, ChevronDown, LucideIcon } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Link, useLocation } from "react-router-dom"

const SettingsPage = () => {
  const location = useLocation();
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true)
  const [inAppNotifications, setInAppNotifications] = useState<boolean>(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState<boolean>(false)
  const [currentTheme, setCurrentTheme] = useState<string>("Light")

  interface ToggleProps {
    enabled: boolean;
    onChange: (value: boolean) => void;
  }

  const Toggle: React.FC<ToggleProps> = ({ enabled, onChange }) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )

  interface NavItem {
    icon: LucideIcon;
    label: string;
    to: string;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#e9f8ff] border-r border-gray-200 min-h-screen">
        <div className="p-6 space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🕉</span>
            </div>
            <span className="text-xl font-semibold text-amber-600">SoulYatri</span>
          </div>

          {/* Avatar */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-indigo-100 text-indigo-600">PS</AvatarFallback>
            </Avatar>
            <span className="font-medium text-slate-900">Priya Sharma</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {([
              { icon: Home, label: "Dashboard", to: "/dashboard" },
              { icon: FileText, label: "Session Records", to: "/session-records" },
              { icon: Calendar, label: "Appointments", to: "/appointments" },
              { icon: Settings, label: "Settings", to: "/settings" },
            ] as NavItem[]).map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={index}
                  to={item.to}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? "bg-[#8eaff2] text-indigo-900" : "text-slate-700"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences.</p>
        </div>

        {/* Profile Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile Settings</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="Priya Sharma"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="priya.sharma@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                  <option>UTC-05:00 Eastern Time</option>
                  <option>UTC-08:00 Pacific Time</option>
                  <option>UTC+00:00 GMT</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Preferences</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive email notifications for new client messages.</p>
              </div>
              <Toggle enabled={emailNotifications} onChange={setEmailNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">In-App Notifications</h3>
                <p className="text-sm text-gray-600">Receive in-app notifications for appointment reminders.</p>
              </div>
              <Toggle enabled={inAppNotifications} onChange={setInAppNotifications} />
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Privacy & Security</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-600">Enable two-factor authentication for enhanced security.</p>
              </div>
              <Toggle enabled={twoFactorAuth} onChange={setTwoFactorAuth} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Change Password</h3>
                <p className="text-sm text-gray-600">Change your account password.</p>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Theme */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Theme</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Theme</label>
              <div className="relative">
                <select
                  value={currentTheme}
                  onChange={(e) => setCurrentTheme(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage