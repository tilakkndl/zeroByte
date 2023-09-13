import Container from '../components/Container';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

import bg from '../assets/map.png';

const Home = () => {
  return (
    <div>
      <Navbar categories bottom menu search />
      <Container>
        <div className="h-screen bg-slate-50 -my-10 shadow-md">
          <img src={bg} alt="" className="w-full h-full opacity-30" />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
