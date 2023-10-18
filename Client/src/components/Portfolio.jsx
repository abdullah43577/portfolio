import projectsData from './projectsData';
import { useState } from 'react';

export default function Portfolio() {
  const allData = projectsData.map((data) => {
    return (
      <div key={data.id} className="img__container w-[300px] cursor-pointer relative overflow-hidden">
        <img src={data.img} alt={data.alt} className="w-full" />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-cta flex flex-col items-center justify-center">
          <h3 className="text-hdTxt font-bold text-center">{data.title}</h3>

          <div className="icons__container mt-3">
            <a href={data.githubURL} target="_blank">
              <i className="fa-brands fa-github mr-3 fa-xl"></i>
            </a>
            <a href={data.liveURL} target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    );
  });

  const [renderedData, setRenderedData] = useState(allData);

  const [filterTabs, setFilterTabs] = useState({
    'All stacks': true,
    VanillaJS: false,
    ReactJS: false,
    NextJS: false,
    NodeJS: false,
  });

  const filterArr = function (params, param2) {
    const filtered = projectsData.filter((data) => data.techStacks.includes(params));
    setRenderedData(data(filtered));

    // reset tabs
    setFilterTabs({
      'All stacks': false,
      VanillaJS: false,
      ReactJS: false,
      // NextJS: false,
      NodeJS: false,
    });

    setFilterTabs((prevValue) => {
      return {
        ...prevValue,
        [param2]: true,
      };
    });
  };

  function data(arr) {
    const data = arr.map((data) => {
      return (
        <div key={data.id} className="img__container w-[300px] cursor-pointer relative overflow-hidden">
          <img src={data.img} alt={data.alt} className="w-full" />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-cta flex flex-col items-center justify-center">
            <h3 className="text-hdTxt font-bold text-center">{data.title}</h3>

            <div className="icons__container mt-3">
              <a href={data.githubURL} target="_blank">
                <i className="fa-brands fa-github mr-3 fa-xl"></i>
              </a>
              <a href={data.liveURL} target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return data;
  }

  return (
    <section className="portfolio mt-32">
      <h2 className="font-bold text-hdTxt text-3xl lg:text-4xl text-center">Portfolio</h2>
      <p className="text-txt text-center max-w-full lg:w-[600px] mx-auto pt-3">Here are some of the projects I've built to showcase my expertise</p>

      <ul className="portfolio__navigator flex items-center gap-3 lg:gap-10 justify-center mt-6 flex-wrap">
        <li className={`cursor-pointer ${filterTabs['All stacks'] ? 'filter__active' : ''} hover:text-cta`} onClick={() => filterArr('HTML', 'All stacks')}>
          All stacks
        </li>
        <li className={`cursor-pointer ${filterTabs.VanillaJS ? 'filter__active' : ''} hover:text-cta`} onClick={() => filterArr('JS', 'VanillaJS')}>
          VanillaJS
        </li>
        <li className={`cursor-pointer ${filterTabs.ReactJS ? 'filter__active' : ''} hover:text-cta`} onClick={() => filterArr('REACT', 'ReactJS')}>
          React
        </li>
        {/* <li className={`cursor-pointer ${filterTabs.NextJS ? 'filter__active' : ''} hover:text-cta`} onClick={() => filterArr('NextJS', 'NextJS')}>
          NextJS
        </li> */}
        <li className={`cursor-pointer ${filterTabs.NodeJS ? 'filter__active' : ''} hover:text-cta`} onClick={() => filterArr('nodeJS', 'NodeJS')}>
          NodeJS
        </li>
      </ul>

      <section className="projects flex items-center justify-center flex-wrap gap-6 mt-6">
        {renderedData.length ? renderedData : <h2 className="text-hdTxt text-center text-2xl font-bold mt-6">Data for the selected stack is unavailable right now, please check back later!</h2>}
      </section>
    </section>
  );
}
