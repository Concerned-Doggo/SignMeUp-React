import { Link } from "react-router-dom";

const Card = ({ title, imageTitle, description, link }) => {
    const image = `../Images/Logos/${imageTitle}.png`;
  return (
      <Link className="w-full md:w-[43%] " to={link}>
        <div className="bg-sky-200 flex flex-col flex-wrap justify-center m-5 p-5 rounded-xl drop-shadow-md">
          <img className="w-1/4 self-center" src={image} />
          <h1 className="self-center font-bold text-2xl text-gray-700 mb-2">
            {title}
          </h1>
          <p className="self-center text-wrap">{description}</p>
        </div>
      </Link>
  );
};

export default Card;
