/* eslint-disable react/prop-types */
import SearchBtn from "./SearchBtn";
import Links from "./Links";
import { useState } from "react";
import CreateLink from "../CreatLink";
import Button from "../ui/Button";
const Dashboard = ({ links }) => {
  const [isCreateLinkModelOpen, setIsCreateLinkModelOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const createLink = () => {
    console.log("create link");
  };

  return (
    <div className=" h-screen">
      <div className="flex  flex-col-reverse items-center justify-center gap-3 md:flex-row">
        <SearchBtn />
        <Button
          onClick={() => setIsCreateLinkModelOpen(true)}
          variant={"primary"}
          className={
            "text-white font-comfortaa font-500 w-full sm:w-1/2 transition-colors duration-300"
          }>
          short link
        </Button>
      </div>
      {links.map((link) => {
        return <Links key={link._id} link={link} />;
      })}
      {isCreateLinkModelOpen && (
        <CreateLink
          loading={loading}
          createLink={createLink}
          setIsCreateLinkModelOpen={setIsCreateLinkModelOpen}
        />
      )}
    </div>
  );
};

export default Dashboard;
