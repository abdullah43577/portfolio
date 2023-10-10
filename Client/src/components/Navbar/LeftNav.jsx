import iconFB from '/icons/Icons-facebook.png';
import iconIG from '/icons/Icons-instagram.png';
import iconXcorp from '/icons/Icons-twitter.png';
import iconLinkedin from '/icons/Icons-linkedin.png';
import profileIMG from '/icons/profile image2.png';
import statusIcon from '/icons/Available.png';
import extrasIcon from '/icons/Icons.png';
import frame from '/icons/Frame.png';
import { useContext } from 'react';
import { NavContext } from '../RootLayout';

export default function LeftNav() {
  const { toggle } = useContext(NavContext);

  return (
    <nav className={`${toggle.profileNav ? 'translate-x-0' : '-translate-x-full'} w-full lg:w-[20%] h-full lg:h-[1200px] bg-modalBg p-8 absolute left-0 lg:left-[32px] top-[10vh] lg:top-[32px] lg:translate-x-0 z-[9999]`}>
      <section className="profile flex flex-col items-center justify-center">
        <section className="profile__Image__container relative">
          <section className="profile__image bg-background rounded-full w-[150px] h-[150px] overflow-hidden relative">
            <img src={profileIMG} alt="profile image" className="scale-[2] relative top-[50px]" />
          </section>

          <img src={statusIcon} alt="status icon" className="absolute bottom-0 right-0" />
        </section>

        <section className="profile__name text-hdTxt my-3 font-bold">Abdullah Ayoola</section>
        <section className="profile__stack text-txt text-xs mb-3">Fullstack Developer</section>
        <section className="socials flex items-center justify-center gap-3">
          <a href="https://web.facebook.com/profile.php?id=100070875720063" target="_blank" className="social__icon__facebook bg-cta p-2 rounded-full">
            <img src={iconFB} alt="facebook icon" />
          </a>
          <a href="https://www.instagram.com/officialayo540/" target="_blank" className="social__icon__instagram bg-cta p-2 rounded-full">
            <img src={iconIG} alt="Instagram icon" />
          </a>
          <a href="https://twitter.com/officialayo540" target="_blank" className="social__icon__twitter bg-cta p-2 rounded-full">
            <img src={iconXcorp} alt="twitter icon" />
          </a>
          <a href="https://www.linkedin.com/in/ayo540/" target="_blank" className="social__icon bg-cta p-2 rounded-full">
            <img src={iconLinkedin} alt="Linkedin icon" />
          </a>
        </section>
      </section>

      <section className="border-b border-background my-6 w-full h-[3px]"></section>

      <section className="stats w-full">
        <section className="age flex items-center justify-between text-sm">
          <span className="bg-cta text-hdTxt p-1">Age:</span>
          <span className="text-hdTxt">21</span>
        </section>

        <section className="residence flex items-center justify-between text-sm my-3">
          <span className="bg-cta text-hdTxt p-1">Residence:</span>
          <span className="text-hdTxt">NG</span>
        </section>

        <section className="freelance flex items-center justify-between text-sm mb-3">
          <span className="bg-cta text-hdTxt p-1">Freelance:</span>
          <span className="text-available">Available</span>
        </section>

        <section className="address flex items-center justify-between text-sm">
          <span className="bg-cta text-hdTxt p-1">Address:</span>
          <span className="text-hdTxt">Lagos, Nigeria</span>
        </section>
      </section>

      <section className="border-b border-background my-6 w-full h-[3px]"></section>

      <section className="languages">
        <h2 className="text-hdTxt font-bold mb-2">Languages</h2>
        <section className="english">
          <div className="flex items-center justify-between text-sm">
            <span className="text-txt">English</span>
            <span className="text-txt">100%</span>
          </div>
          <div className="bg-cta rounded-md py-[3px] mt-2"></div>
        </section>
      </section>

      <section className="border-b border-background my-6 w-full h-[3px]"></section>

      <section className="skills">
        <h2 className="text-hdTxt font-bold mb-2">Skills</h2>
        <section className="Html">
          <div className="flex items-center justify-between text-sm">
            <span className="text-txt">HTML</span>
            <span className="text-txt">90%</span>
          </div>
          <div className="rounded-md mt-2 w-full border border-cta">
            <div className="bar bg-cta w-[90%] py-[3px] rounded-md"></div>
          </div>
        </section>

        <section className="CSS my-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-txt">CSS</span>
            <span className="text-txt">85%</span>
          </div>
          <div className="rounded-md mt-2 w-full border border-cta">
            <div className="bar bg-cta w-[85%] py-[3px] rounded-md"></div>
          </div>
        </section>

        <section className="Javascript">
          <div className="flex items-center justify-between text-sm">
            <span className="text-txt">JS</span>
            <span className="text-txt">85%</span>
          </div>
          <div className="rounded-md mt-2 w-full border border-cta">
            <div className="bar bg-cta w-[85%] py-[3px] rounded-md"></div>
          </div>
        </section>

        <section className="React my-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-txt">React</span>
            <span className="text-txt">80%</span>
          </div>
          <div className="rounded-md mt-2 w-full border border-cta">
            <div className="bar bg-cta w-[80%] py-[3px] rounded-md"></div>
          </div>
        </section>

        <section className="NextJS">
          <div className="flex items-center justify-between text-sm">
            <span className="text-txt">NextJS</span>
            <span className="text-txt">70%</span>
          </div>
          <div className="rounded-md mt-2 w-full border border-cta">
            <div className="bar bg-cta w-[70%] py-[3px] rounded-md"></div>
          </div>
        </section>

        <section className="NodeJS my-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-txt">NodeJS</span>
            <span className="text-txt">85%</span>
          </div>
          <div className="rounded-md mt-2 w-full border border-cta">
            <div className="bar bg-cta w-[85%] py-[3px] rounded-md"></div>
          </div>
        </section>
      </section>

      <section className="border-b border-background my-6 w-full h-[3px]"></section>

      <section className="extra__skills">
        <h2 className="text-hdTxt font-bold mb-2">Extra Skills</h2>
        <section className="flex items-center gap-2 text-sm">
          <img src={extrasIcon} alt="icon" />
          <span className="text-hdTxt">Tailwind, SCSS</span>
        </section>

        <section className="flex items-center gap-2 mt-2 text-sm">
          <img src={extrasIcon} alt="icon" />
          <span className="text-hdTxt">Git, Github</span>
        </section>
      </section>

      <section className="border-b border-background my-6 w-full h-[3px]"></section>

      <button className="bg-cta w-full py-2 flex items-center justify-center gap-2">
        <span className="text-hdTxt font-bold">DOWNLOAD CV</span>
        <img src={frame} alt="download icon" />
      </button>
    </nav>
  );
}
