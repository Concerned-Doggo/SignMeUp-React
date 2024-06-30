import { Link } from "react-router-dom";
const AlphabetCard = ({letter1, letter2}) => {
  return (
      <Link className="w-full md:w-[43%]" to={`/learn/alphabet/${letter1}-${letter2}`}>
        <div className="bg-sky-200 flex flex-col flex-wrap justify-center m-5 p-5 rounded-xl">
          <div className="w-full flex flex-wrap justify-center my-10">
            <img
              className="w-1/4 self-center"
              src={`../Images/Alphabet/${letter1}.png`}
            />
            <img
              className="w-1/4 self-center"
              src="../Images/Logos/right-arrow.png"
            />
            <img
              className="w-1/4 self-center"
              src={`../Images/Alphabet/${letter2}.png`}
            />
          </div>
        </div>
      </Link>
  );
};

export default AlphabetCard;
