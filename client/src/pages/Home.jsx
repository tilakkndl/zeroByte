import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Map from '../components/Map';

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
        <div className="h-[1080px] bg-slate-50 -my-10 shadow-md">
          <Map />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
