import { Routes, Route, Link } from "react-router-dom";
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <div className='page'>
      <Header />
      <main className='container content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route element={NotFound} /> 
      </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
