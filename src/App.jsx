import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Especies from './pages/Species';
import GlobalStyles from './GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/especies' element={<Especies />} />
      </Routes>
    </BrowserRouter>
  )
}