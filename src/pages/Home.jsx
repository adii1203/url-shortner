import Nav from "../components/Nav";
import Dashboard from "../components/Dashboard";
import Container from "../components/Container";
export const Home = () => {
  return (
    <div>
      <Container>
        <Nav />
        <Dashboard />
      </Container>
    </div>
  );
};
