import Container from '../Container';

import { FaBed, FaHospitalSymbol } from 'react-icons/fa';
import { BiSolidAmbulance } from 'react-icons/bi';

const categories = [
  {
    id: 1,
    title: 'Ambulance',
    icon: BiSolidAmbulance,
  },
  {
    id: 2,
    title: 'Hospitals',
    icon: FaHospitalSymbol,
  },
  {
    id: 3,
    title: 'Nearest Hospital',
    icon: FaBed,
  },
];

const Categories = () => {
  return (
    <div className="pb-8 pt-4">
      <Container>
        <ul className="flex items-center justify-start gap-4 flex-wrap">
          {categories.map(({ id, title, icon: Icon }) => (
            <li
              key={id}
              className="
                flex items-center gap-2 
                border rounded-full 
                px-3 py-1
                cursor-pointer
                hover:bg-white hover:text-[#c53434]
                transition ease duration-500
              "
            >
              <Icon />
              {title}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Categories;
