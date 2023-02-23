import Automation from "./components/Automation";
import ContactForm from "./components/ContactForm";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import OurFeatures from "./components/OurFeatures";
import Testimonials from "./components/Testimonials";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Main />
      <OurFeatures />
      <Automation />
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default App;
