
import { Dock,Navbar, Welcome } from "./components";
import { Finder, ImageFile, Resume, Safari, Terminal, TextFile, Contact } from "./windows";
import gsap from "gsap";
import { Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <TextFile/>
      <ImageFile/>
      <Contact/>
    </main>
  );
};

export default App;