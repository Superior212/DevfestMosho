import Hero from "./components/Hero";
import Marquee1 from "./components/Marquee";
import Navbar from "./components/Navbar";
import {
  BackInTime,
  StoryOfImpact,
  QuestionOrIdeas,
  Footer,
} from "./components";
import StayUpTodate from "./components/StayUpTodate/StayUpTodate";
import EventSchedule from "./components/EventSchedule/EventSchedule";
import CallForSpeakers from "./components/CallForSpeakers/CallForSpeakers";
import CountDown from "./components/CountDown/CountDown";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee1 />
      <CountDown />
      <EventSchedule />
      <CallForSpeakers />
      <StayUpTodate />
      <BackInTime />
      <StoryOfImpact />
      <QuestionOrIdeas />
      <Footer />
    </>
  );
}

export default App;
