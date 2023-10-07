import profileIMG from '/icons/profile image2.png';
import frame from '/icons/frame2.png';
import statusIcon from '/icons/Available.png';
import { useMediaQuery } from '@react-hook/media-query';
import ellipse12 from '/icons/Ellipse 12.png';
import ellipse13 from '/icons/Ellipse 13.png';
import ellipse15 from '/icons/Ellipse 15.png';
import ellipse16 from '/icons/Ellipse 16.png';
import polygon from '/icons/Polygon 1.png';
import rect1 from '/icons/Rectangle 51.png';
import rect2 from '/icons/Rectangle 52.png';

export default function Hero() {
  const isLargeScreen = useMediaQuery('(min-width:976px)');

  return (
    <section className="hero bg-modalBg flex flex-col-reverse lg:flex-row items-center lg:mx-auto p-8 lg:p-16 overflow-hidden gap-8 relative">
      <section className="hero__content lg:w-[60%]">
        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl text-hdTxt font-bold">
          I'm Abdullah Ayoola <span className="text-cta">Fullstack</span> Developer
        </h1>
        <p className="text-txt my-4 lg:my-8">Experienced full-stack developer dedicated to crafting responsive, user-engaging, and visually appealing web interfaces that elevate the online world.</p>

        <a href="#contact">
          <button className="bg-cta text-hdTxt rounded-md flex items-center gap-3 py-2 px-3">
            <span>HIRE ME</span> <img src={frame} alt="icon" />
          </button>
        </a>
      </section>

      {isLargeScreen ? (
        <img src={profileIMG} alt="profile image" className="scale-[3] w-[350px] absolute top-[70%] right-0" />
      ) : (
        <section className="profile__Image__container relative">
          <section className="profile__image bg-background rounded-full w-[150px] h-[150px] overflow-hidden relative">
            <img src={profileIMG} alt="profile image" className="scale-[2] relative top-[50px]" />
          </section>

          <img src={statusIcon} alt="status icon" className="absolute bottom-0 right-0" />
        </section>
      )}

      <img src={ellipse12} alt="ellipse" className="absolute top-[10%] left-[20%] lg:left-[50%]" />
      <img src={ellipse13} alt="ellipse" className="absolute bottom-[10%] left-[55%]" />
      <img src={ellipse15} alt="ellipse" className="absolute top-[8%] left-[8%]" />
      <img src={ellipse16} alt="ellipse" className="absolute bottom-[10%] left-[8%]" />
      <img src={polygon} alt="polygon" className="absolute bottom-[10%] right-[10px]" />
      <img src={rect1} alt="rectangle" className="absolute right-[10%] top-[10%]" />
      <img src={rect2} alt="rectangle" className="absolute bottom-[20%] right-[10%] lg:left-[40%]" />
    </section>
  );
}
