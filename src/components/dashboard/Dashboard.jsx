/* eslint-disable react/prop-types */
import SearchBtn from "./SearchBtn";
import ShortBtn from "./ShortBtn";
import Links from "./Links";
const Dashboard = ({ links }) => {
  return (
    <div className=" h-screen">
      <div className="flex  flex-col-reverse items-center justify-center gap-3 md:flex-row">
        <SearchBtn />
        <ShortBtn />
      </div>
      {links.map((link, index) => {
        return <Links key={index} link={link} />;
      })}
    </div>
  );
};

export default Dashboard;
