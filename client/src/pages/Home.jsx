import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Map from '../components/Map';

import data from '../data/HealthFacilityDataNepal.json';

const Home = () => {
  const [geoJSONData, setgeoJSONData] = useState(data);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const filteredFeatures = geoJSONData.features.filter((feature) => {
      return (
        feature.properties.DIST_NAME?.includes(query) ||
        feature.properties.VDC_NAME1?.includes(query)
      );
    });

    if (!query) {
      setgeoJSONData(data);
    }

    setgeoJSONData({
      ...data,
      features: filteredFeatures,
    });
  };

  useEffect(() => {
    if (!token) {
      navigate('/signin');
    }
  }, [navigate, token]);

  return (
    <div>
      <Navbar categories bottom menu search onSearch={handleSearch} />
      <Container>
        <div className="h-[1080px] bg-slate-50 -my-10 shadow-md">
          <Map geoJSONData={geoJSONData} />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
