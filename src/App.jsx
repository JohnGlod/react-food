import { Routes, Route } from "react-router-dom";
import { Layout } from './layout/Layout';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from "./pages/NotFound";
import {Category} from './pages/Category'
import {Recipe} from './pages/Recipe'

const App = () => {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index  element={<Home />} />
          <Route path='contacts' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='category/:name' element={<Category />} />
          <Route path='meal/:id' element={<Recipe />} />
          <Route path='*' element={<NotFound /> } />
        </Route> 
      </Routes>
    </div>
  );
};

export default App;
