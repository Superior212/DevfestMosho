import Hero from "./components/Hero";
import Marquee1 from "./components/Marquee";
import Navbar from "./components/Navbar";
import { BackInTime, StoryOfImpact, QuestionOrIdeas, Footer } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee1 />
      <BackInTime />
      <StoryOfImpact />
      <QuestionOrIdeas />
      <Footer />
    </>
  );
}

export default App;
