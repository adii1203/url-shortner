import Container from "../components/Container";
import Cta from "../components/Cta";
import Header from "../components/Header";
const Trial = () => {
  return (
    <div className="h-screen w-full bg-[#0B101B] bg-main-pattern bg-center">
      <Container>
        <Header />
        <Cta />
      </Container>
    </div>
  );
};

export default Trial;
