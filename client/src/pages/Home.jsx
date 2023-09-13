import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar categories bottom menu search />
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default Home;
