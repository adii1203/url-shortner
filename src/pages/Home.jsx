import Nav from "../components/dashboard/Nav";
import Container from "../components/Container";
import Dashboard from "../components/dashboard/Dashboard";
const Home = () => {
  return (
    <div className="bg-[#f9fafb] min-h-screen  mx-auto ">
      <Container>
        <Nav />
        <div className="mt-5 ">
          <Dashboard />
        </div>
      </Container>
    </div>
  );
};

export default Home;
