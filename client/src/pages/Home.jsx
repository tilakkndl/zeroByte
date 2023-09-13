import Container from '../components/Container';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar categories bottom menu search />
      <Container>
        <div className="h-screen bg-slate-50 -my-10 shadow-md"></div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
