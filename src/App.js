import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <main className="pb-14 lg:pb-0">
      <Header/>
      <div className="pt-16">
      <Outlet/>
      </div>
      <Footer/>
      <MobileNav/>
    </main>
  );
}

export default App;
