import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/contact";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Sample } from "./components/Sample";

export default function App() {
  return (
    <div className="p-10">
      <Nav/>
      <About/>
      <Projects/>
      {/* <Sample/> */}
      <Contact />
      <footer className="p-10">
        <Footer/>
      </footer>
      
    </div>
  );
}
