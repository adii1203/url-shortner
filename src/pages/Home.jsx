import Nav from "../components/Nav";
import Container from "../components/Container";
import Dashboard from "../components/Dashboard";
const Home = () => {
  return (
    <div className="bg-[#f9fafb] h-screen  mx-auto ">
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
