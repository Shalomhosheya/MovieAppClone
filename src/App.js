import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from'react-redux';
import { setBannerData } from './Store/movieSlice';

function App() {

  const dispatch = useDispatch();
  const fetchtrend = async () => {
    try {
      const response = await axios.get('/trending/all/week');
       dispatch(setBannerData(response.data.results));
      
       console.log(response.data.results);
    } catch (error) {
      console.error('Error:', error);
  
    }
  }

  const fetchConfigurations = async () => {

    try {
      const response = await axios.get('/configuration');
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    fetchtrend();
    fetchConfigurations();
  }, [])

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
