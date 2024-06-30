import {Link} from "react-router-dom";

const AboutUsCard = ({ name, LinkedIn, Resume }) => {
  return (
    <div className="about-us-box">
      <img src="../Images/Logos/person1.png" alt="Image" />

      <div className="about-us-info flex flex-col">
        <h3 className="font-bold text-gray-500 mb-2">{name}</h3>
        <Link
          to={`https://www.linkedin.com/in/${LinkedIn}`}
          className="text-blue-500 font-semibold inline-block mb-1"
        >
          <img
            className="socials-logo m-0"
            src="../Images/Logos/linkedin.png"
          />
          LinkedIn
        </Link>
        {Resume ? (
          <Link
            to="Resume.pdf"
            className="text-blue-500 font-semibold inline-block"
          >
            <img
              className="socials-logo m-0"
              src="../Images/Logos/resume.png"
            />
            Resume
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AboutUsCard;
