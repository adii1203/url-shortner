import { LogOut, User } from "lucide-react";
import Button from "../ui/Button";
import { useLogoutMutation } from "../../features/auth/authApiSlice";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfileActionsDropdown = () => {
  const [logoutRequest] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logoutRequest().unwrap();
    if (res.statusCode === 200) {
      dispatch(logout());
    }
  };

  const handelNavigate = (path) => {
    navigate(path);
  };

  const menuOptions = [
    {
      name: "Profile",
      icon: <User />,
      action: () => handelNavigate("/settings"),
    },
    {
      name: "Logout",
      icon: <LogOut />,
      action: handleLogout,
    },
  ];

  return (
    <div
      className="absolute mt-2 w-56 rounded-md shadow-lg shadow-[#444]/30 px-2 py-2 bg-[#1a1a1a] "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu">
      {menuOptions.map((option) => {
        return (
          <Button
            onClick={option.action}
            key={option.name}
            varient={option.name === "Logout" ? "danger" : "primary"}
            className={
              option.name === "Logout"
                ? "w-full px-3 py-2 gap-2 mt-1"
                : "w-full px-3 py-2 gap-2 bg-[#444]/20 hover:bg-[#111] mt-1"
            }>
            {option.icon}
            {option.name}
          </Button>
        );
      })}
    </div>
  );
};

export default ProfileActionsDropdown;

{
  /* <div className="py-1" role="none">
<a
  href="#"
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
  role="menuitem">
  Edit Profile
</a>
<a
  href="#"
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
  role="menuitem">
  Change Password
</a>
</div>
<div className="py-1" role="none">
<a
  href="#"
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
  role="menuitem">
  Logout
</a>
</div> */
}
