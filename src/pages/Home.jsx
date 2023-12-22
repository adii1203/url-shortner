import Nav from "../components/dashboard/Nav";
import Container from "../components/Container";
import Dashboard from "../components/dashboard/Dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div className="bg-[#f9fafb] min-h-screen  mx-auto ">
      <Container>
        <Nav user={user} />
        <div className="mt-5 ">
          <Dashboard />
        </div>
      </Container>
    </div>
  );
};

export default Home;
