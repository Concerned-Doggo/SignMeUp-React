import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b  from-sky-200 via-sky-800 via-75% to-sky-950 text-center text-white pt-5 rounded-t-3xl">
      <div className="mb-10 mt-10 flex flex-wrap justify-center gap-5">
        <h1 className="text-3xl w-full font-bold">SignMeUp!</h1>
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <Link to="/LearnPages/A-F.html" className="font-semibold">
          AboutUs
        </Link>
        <Link to="https://github.com/concerned-doggo" className="font-semibold">
          Github
        </Link>
      </div>
      <div>
        <h1 className="font-bold text-xl">Made with ❤️</h1>
        <p className="font-semibold">2024</p>
      </div>
      <div className="border-sky-950 border-4"></div>
    </footer>
  );
};

export default Footer;
