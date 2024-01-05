// Only responcible for displaying the user's name and avatar
// Accuntable for logout and profile button
import { ChevronsUpDown } from "lucide-react";
import Button from "../ui/Button";
import ProfileActionsDropdown from "./ProfileOption";
import Popup from "reactjs-popup";

const UserProfileHeader = ({ user }) => {
  const { name, profileImg } = user;
  return (
    <header className=" w-full sticky top-0 z-50 justify-between bg-[#111] p-8">
      <div className="flex items-center w-full md:w-[40rem] lg:w-[60rem] mx-auto ">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={
            profileImg ||
            "https://armory.visualsoldiers.com/wp-content/uploads/2018/07/gradient-joy.jpg"
          }
          alt="Profile"
        />
        <div className="relative">
          <Popup
            trigger={
              <div>
                <Button
                  varient={"primary"}
                  className={"gap-2 py-2 px-4 justify-center relative"}>
                  <span>{name}</span>
                  <ChevronsUpDown size={"20px"} />
                </Button>
              </div>
            }
            arrow={false}
            position="bottom center">
            <ProfileActionsDropdown />
          </Popup>
        </div>
      </div>
    </header>
  );
};

export default UserProfileHeader;
