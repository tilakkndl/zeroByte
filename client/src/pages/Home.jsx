import Container from '../components/Container';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

import bg from '../assets/map.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      navigate('/signin');
    }
  }, [navigate, token]);

  return (
    <div>
      <Navbar categories bottom menu search />
      <Container>
        <div className="h-screen bg-slate-50 -my-10 shadow-md">
          <img
            src={bg}
            alt=""
            className="w-full h-full opacity-30 object-cover"
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
