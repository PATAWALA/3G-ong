import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ActionsFamilie from './pages/ActionsFamille';
import ActionsJeunes from './pages/ActionsJeunes';
import ActionsSante from './pages/ActionsSante';
import ActionsCulture from './pages/ActionsCulture';
import ActionsHumanitaire from './pages/ActionsHumanitaire';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="actions/famille" element={<ActionsFamilie />} />
        <Route path="actions/jeunes" element={<ActionsJeunes />} />
        <Route path="actions/sante" element={<ActionsSante />} />
        <Route path="actions/culture" element={<ActionsCulture />} />
        <Route path="actions/humanitaire" element={<ActionsHumanitaire />} />
        <Route path="evenements" element={<Events />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;