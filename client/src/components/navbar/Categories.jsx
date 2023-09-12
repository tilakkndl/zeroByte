import Container from "../Container";

import { FaToilet, FaBed } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { BiDevices } from "react-icons/bi";

const categories = [
  {
    id: 1,
    title: "Toilets",
    icon: FaToilet,
  },
  {
    id: 2,
    title: "Rooms",
    icon: FaBed,
  },
  {
    id: 3,
    title: "Parking",
    icon: LuParkingCircle,
  },
  {
    id: 4,
    title: "Items",
    icon: BiDevices,
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
                hover:bg-white hover:text-[#a3270e]
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
