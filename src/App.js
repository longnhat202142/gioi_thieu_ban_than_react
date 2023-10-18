import './App.css';
import { NavBar } from './compoments/NavBar';
import { Banner } from './compoments/Banner';
import { Skills } from './compoments/Skills.js';
import { Projects } from './compoments/Project.js';
import { Footer } from './compoments/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
