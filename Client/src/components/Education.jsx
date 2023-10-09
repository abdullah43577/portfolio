export default function Education() {
  return (
    <section className="education__sect mt-32">
      <h2 className="font-bold text-hdTxt text-4xl text-center">Education</h2>
      <p className="text-txt text-center max-w-full lg:w-[600px] mx-auto pt-3">Educational qualifications I've earned over my course of study</p>

      <section className="information bg-modalBg p-8 mt-16">
        <section className="edu__one flex flex-col lg:flex-row justify-between border-b border-gray-300 pb-6">
          <section className="title">
            <h3 className="text-hdTxt font-bold">Freecodecamp.org</h3>
            <div className="flex items-center gap-3 mt-3">
              <p className="text-hdTxt">Student</p>
              <p className="text-background bg-cta px-1">2019 - 2021</p>
            </div>
          </section>

          <article className="mt-6 lg:mt-0 lg:w-2/3">
            <h3 className="text-hdTxt font-bold">Certificate of Web Training</h3>
            <p className="text-txt mt-3">
              <a href="https://shrtco.de/hBEqjV" className="text-cta underline" target="_blank">
                Certificate of Responsive Web Design
              </a>{' '}
              from Freecodecamp.org. This certification is earned by completing 300 hours of coding challenges and projects. The projects include building a Tribute Page, Survey Form, Product Landing Page, Technical Documentation Page, and a Personal
              Portfolio Webpage.
            </p>
          </article>
        </section>

        <section className="edu__two flex flex-col lg:flex-row justify-between my-6 border-b border-gray-300 pb-6">
          <section className="title">
            <h3 className="text-hdTxt font-bold">Javascript course</h3>
            <div className="flex items-center gap-3 mt-3">
              <p className="text-hdTxt">Student</p>
              <p className="text-background bg-cta px-1">2022 - 2023</p>
            </div>
          </section>

          <article className="mt-6 lg:mt-0 lg:w-2/3">
            <h3 className="text-hdTxt font-bold">Certificate of Web Training</h3>
            <p className="text-txt mt-3">
              <a href="https://shrtco.de/d7ZU5L" className="text-cta underline" target="_blank">
                Certificate of The Complete Javascript Course: From Zero to Expert!
              </a>{' '}
              from Udemy. This certification is earned by completing ~ 70 hours of coding challenges and projects.
            </p>
          </article>
        </section>

        <section className="edu__three flex flex-col lg:flex-row justify-between my-6">
          <section className="title">
            <h3 className="text-hdTxt font-bold">Backend Internship - (NodeJS)</h3>
            <div className="flex items-center gap-3 mt-3">
              <p className="text-hdTxt">Student</p>
              <p className="text-background bg-cta px-1">2023</p>
            </div>
          </section>

          <article className="mt-6 lg:mt-0 lg:w-2/3">
            <h3 className="text-hdTxt font-bold">Certificate of Participation</h3>
            <p className="text-txt mt-3">Certificate of The Complete Javascript Course: From Zero to Expert! from Udemy. This certification is earned by completing ~ 70 hours of coding challenges and projects.</p>
          </article>
        </section>
      </section>
    </section>
  );
}
