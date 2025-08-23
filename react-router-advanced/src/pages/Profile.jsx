import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">User Profile</h1>

      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <div className="mt-4">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;
