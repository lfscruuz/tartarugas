import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Especies from './pages/SpeciesPage';
import GlobalStyles from './GlobalStyles';
import Projetos from './pages/ProjectsPage';
import Sidebar from './components/sidebar';
import MoreInfo from './components/landing page/MoreInfo';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Sidebar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='especies' element={<Especies />} />
        </Routes>
        <MoreInfo/>
      </div>
    </BrowserRouter>
  )
}