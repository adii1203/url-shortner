import UserProfileHeader from "../components/dashboard/ProfileHeader";
import Dashboard from "../components/dashboard/Dashboard";
import { useSelector } from "react-redux";
import { useGetLinksQuery } from "../features/links/linkApiSlice";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const { data, isLoading } = useGetLinksQuery();
  return (
    <div className="bg-[#1a1a1a] min-h-screen mx-auto ">
      <UserProfileHeader user={user} />
      {isLoading ? <div>loading...</div> : <Dashboard data={data.data.links} />}
    </div>
  );
};

export default Home;
