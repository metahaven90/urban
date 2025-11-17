import { useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Lookbook from './pages/Lookbook';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'products':
        return <Products />;
      case 'lookbook':
        return <Lookbook />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
