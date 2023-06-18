import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Especies from './pages/SpeciesPage';
import GlobalStyles from './GlobalStyles';
import Projetos from './pages/ProjectsPage';
import Loggerhead from './pages/Loggerhead';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/especies' element={<Especies />} />
        <Route path='/especies/loggerhead' element={<Loggerhead />} />
        <Route path='/projetos' element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  )
}