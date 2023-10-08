import codingIcon from '/icons/coding.png';

export default function Services() {
  return (
    <section className="services mt-32">
      <h2 className="font-bold text-hdTxt text-4xl text-center">My Services</h2>
      <p className="text-txt text-center max-w-full lg:w-[600px] mx-auto pt-3">I offer a range of services to help you bring your web software projects to life. With a passion for crafting robust and user-friendly applications.</p>

      <section className="services__container flex items-center justify-center flex-wrap my-8 gap-4">
        <div className="bg-modalBg p-4 w-[300px] lg:p-8 rounded-md flex flex-col items-center">
          <img src={codingIcon} alt="coding icon" className="w-[50px] lg:w-auto" />
          <h3 className="text-hdTxt font-bold text-xl my-3">Frontend Development</h3>
          <p className="text-txt text-center w-[300px] text-sm">I create elegant and responsive user interfaces using modern web technologies such as HTML, CSS, and Javascript.</p>
        </div>

        <div className="bg-modalBg p-4 w-[300px] lg:p-8 rounded-md flex flex-col items-center">
          <img src={codingIcon} alt="coding icon" className="w-[50px] lg:w-auto" />
          <h3 className="text-hdTxt font-bold text-xl my-3">Backend Development</h3>
          <p className="text-txt text-center w-[300px] text-sm">I build secure and scalable server-side solutions using Node.js and MongoDB.</p>
        </div>

        <div className="bg-modalBg p-4 w-[300px] lg:p-8 rounded-md flex flex-col items-center">
          <img src={codingIcon} alt="coding icon" className="w-[50px] lg:w-auto" />
          <h3 className="text-hdTxt font-bold text-xl my-3">Fullstack Development</h3>
          <p className="text-txt text-center w-[300px] text-sm">I bridge the gap between frontend and backend, ensuring seamless communication and functionality for your web applications.</p>
        </div>

        <div className="bg-modalBg p-4 w-[300px] lg:p-8 rounded-md flex flex-col items-center">
          <img src={codingIcon} alt="coding icon" className="w-[50px] lg:w-auto" />
          <h3 className="text-hdTxt font-bold text-xl my-3 text-center">API Integration</h3>
          <p className="text-txt text-center w-[300px] text-sm">Integration of third-party APIs and services to enhance your application's functionality. </p>
        </div>
      </section>
    </section>
  );
}
