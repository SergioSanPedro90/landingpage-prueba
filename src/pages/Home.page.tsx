import { Calendly } from "@/components/Calendly.component";
import { Chatbot } from "@/components/Chatbot";
import { Navbar } from "@/components/Navbar";


export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Calendly />
      <Chatbot/>
    </>
  );
};

