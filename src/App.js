import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';


 const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/proyectos/:id" element={<ProjectDisplay/>} />
        <Route path="/sobremi" element={<SobreMi/>} />
      </Routes>
     < Footer />
    </Router>
  )
};
export default App;
