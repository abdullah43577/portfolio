import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="404 flex flex-col justify-center">
      <h1 className="text-hdTxt text-center font-bold text-3xl lg:text-4xl mt-20">404 Page Not Found</h1>
      <p className="text-txt text-center max-w-full lg:w-[600px] mx-auto pt-3">The page you are looking for does not exist.</p>
      <Link to="/" className="btn text-cta text-center mx-auto mt-3">
        Go back to homepage
      </Link>
    </div>
  );
}
