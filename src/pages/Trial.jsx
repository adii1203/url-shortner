import Container from "../components/Container";
import Cta from "../components/Cta";
import Header from "../components/Header";
import AllLinks from "../components/AllLinks";
const Trial = () => {
  return (
    <div className="overflow-hidden bg-gradient w-full relative min-h-screen bg-[#F8F9FA]">
      <div className="pointer-events-none w-72 h-72 filter blur-2xl mix-blend-multiply rounded-full bg-[#FFBE0B] absolute animate-blob animation-delay-2000  opacity-20 top-1/3 left-1/3 "></div>
      <div className="pointer-events-none w-80 h-80 filter blur-2xl mix-blend-multiply rounded-full bg-[#3A86FF] absolute animate-blob_2 animation-delay-2000 opacity-20 top-24 left-1/4 "></div>
      <div className="pointer-events-none w-72 h-72 filter blur-2xl mix-blend-multiply rounded-full bg-[#8338EC] absolute animate-blob animation-delay-400 opacity-20 top-1/3 left-[26rem] "></div>
      <div className="pointer-events-none w-72 h-72 filter blur-2xl mix-blend-multiply rounded-full bg-[#FB5607] absolute animate-blob_2 animation-delay-4000 opacity-20 top-20 left-[28rem] lg:left-[40rem] "></div>
      <Container>
        <Cta />
      </Container>
    </div>
  );
};

export default Trial;
