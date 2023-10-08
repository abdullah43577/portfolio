import RightNav from './Navbar/RightNav';
import LeftNav from './Navbar/LeftNav';
import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';

export const NavContext = createContext();

export default function RootLayout() {
  const [toggle, setToggle] = useState({
    profileNav: false,
    mainNav: false,
  });

  const [counter, setCounter] = useState(0);

  const handleNavToggle = function () {
    setCounter(counter + 1);

    if (counter === 0) {
      setToggle((prev) => ({ ...prev, profileNav: true }));
    } else if (counter === 1) {
      setToggle({ profileNav: false, mainNav: true });
    } else {
      setCounter(0);
      setToggle({ profileNav: false, mainNav: false });
    }
  };

  return (
    <NavContext.Provider value={{ toggle, handleNavToggle }}>
      <section className="w-full h-full p-4 lg:p-8">
        <LeftNav />
        <div className="outlet__container w-full mt-[10vh] lg:mt-0 lg:w-[70%] mx-auto relative lg:left-[80px] xl:left-[100px] 2xl:left-[115px]">
          <Outlet />
        </div>
        <RightNav />
      </section>
    </NavContext.Provider>
  );
}
