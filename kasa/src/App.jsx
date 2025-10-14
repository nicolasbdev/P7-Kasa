import Header from './components/Header';  
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';    
import Logement from './Pages/Logement';
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
            <Route path="logements/:id" element={<Logement />} />

        </Routes> 
        <Footer />      
    </BrowserRouter>
  );
}
export default App; 

/* Ci-dessus : 
Import des différentes pages jsx pour pouvoir les appeler sur cette page App. Le JSX est la syntaxe et l'extension fichier propre à React.
Ajout du Browserouter pour structurer nos pages jsx.
Ajout des composants Header et Footer (qui ne sont pas modulables).
Création des routes pour ajouter les pages (Home, Error, About et Logement) qui vont enrichir notre site et sa navigation.
Toute adresse URL non correcte renvoie à la page Error.jsx */