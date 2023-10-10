import RightNav from './Navbar/RightNav';
import LeftNav from './Navbar/LeftNav';
import { useState, createContext, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { Outlet } from 'react-router-dom';

export const NavContext = createContext();

export default function RootLayout() {
  const [toggle, setToggle] = useState({
    profileNav: false,
    mainNav: false,
  });

  const isSmallestScreen = useMediaQuery('(min-width:320px)');
  const isSmallScreen = useMediaQuery('(min-width:350px)');
  const isMediumScreen = useMediaQuery('(min-width:380px)');

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

  // set the max height of the root element to prevent scrolling when the profile nav is open
  useEffect(() => {
    const root = document.body.firstElementChild;

    if (toggle.profileNav) {
      if (isSmallestScreen && !isSmallScreen && !isMediumScreen) {
        root.style.maxHeight = '250vh';
      } else if (isSmallScreen && !isMediumScreen) {
        root.style.maxHeight = '200vh';
      } else {
        root.style.maxHeight = '160vh';
      }
      root.style.overflowY = 'hidden';
    } else {
      root.style.maxHeight = 'unset';
      root.style.overflowY = 'unset';
    }
  }, [toggle.profileNav]);

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
