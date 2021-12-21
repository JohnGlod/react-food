import { Routes, Route } from "react-router-dom";
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from "./pages/NotFound";
import {Category} from './pages/Category'
import {Recipe} from './pages/Recipe'

const App = () => {
  return (
    <div className='page'>
      <Header />
      <main className='container content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path='/meal/:id' element={<Recipe />} />
        <Route path='*' element={<NotFound /> } /> 
      </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
