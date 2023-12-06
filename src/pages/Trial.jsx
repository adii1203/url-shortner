import Container from "../components/Container";
import Cta from "../components/Cta";
import Header from "../components/Header";
import AllLinks from "../components/AllLinks";
const Trial = () => {
  return (
    <div className="w-full bg-[#0B101B] bg-main-pattern bg-center">
      <Container>
        <Header />
        <Cta />
        <AllLinks />
      </Container>
    </div>
  );
};

export default Trial;
