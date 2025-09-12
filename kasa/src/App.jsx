import Header from './components/Header';  
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';    
//import Logement from './Pages/Logement';
import Error from './Pages/Error';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
           <Route path="*" element={<Error />} />
           <Route path="/about" element={<About />} />
        </Routes> 
        <Footer />      
    </BrowserRouter>
  );
}
export default App; 