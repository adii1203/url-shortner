/* eslint-disable react/prop-types */
import SearchBtn from "./SearchBtn";
import Links from "./Links";
import Button from "../ui/Button";
import { useShowLinkOption } from "../../hooks/useShowLinkOption";
import { useCreatEditModel } from "../../hooks/useCreatEditModel";

const Dashboard = ({ links }) => {
  const { showLinkOption, handleShowLinkOption } = useShowLinkOption();
  const {
    CreatEditLinkModelCallback,
    setShowCreateEditModel,
    showCreateEditModel,
  } = useCreatEditModel();
  return (
    <div className="  h-screen">
      <div className="flex  flex-col-reverse items-center justify-center gap-3 md:flex-row">
        <SearchBtn />
        <Button
          onClick={() => setShowCreateEditModel(true)}
          variant={"primary"}
          className={
            "text-white font-comfortaa font-500 w-full sm:w-1/2 transition-colors duration-300"
          }>
          short link
        </Button>
      </div>
      {links.map((link) => {
        return (
          <Links
            showLinkOption={showLinkOption}
            handleShowLinkOption={handleShowLinkOption}
            key={link._id}
            link={link}
          />
        );
      })}
      {showCreateEditModel && <CreatEditLinkModelCallback />}
    </div>
  );
};

export default Dashboard;
