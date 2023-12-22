import SearchBtn from "./SearchBtn";
import ShortBtn from "./ShortBtn";
import Links from "./Links";
const Dashboard = () => {
  return (
    <div className=" h-screen">
      <div className="flex  flex-col-reverse items-center justify-center gap-3 md:flex-row">
        <SearchBtn />
        <ShortBtn />
      </div>
      <Links />
    </div>
  );
};

export default Dashboard;
