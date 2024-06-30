import React from "react";
import {AboutUsCard} from "../components";

const Aboutus = () => {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl text-sky-400 font-bold mb-4 text-center">
          About Us
        </h1>
        <h2 className="text-white text-center">You found the easter egg!</h2>
        <p className="self-center para-width text-lg font-semibold text-gray-600 text-center mb-10">
          SignMeUp! is more than just a platform; it's a journey of empowerment
          and connection through sign language. Our mission is simple: to make
          sign language learning easy, enjoyable, and accessible to all. Imagine
          a world where barriers dissolve, where communication knows no limits.
          That's the world we're building, one sign at a time. At SignMeUp!, we
          believe that learning should be immersive and engaging. That's why we
          offer interactive lessons, live quizzes, and comprehensive
          dictionaries—all designed to bring sign language to life.
        </p>
      </div>

      <div className="team-members">
        <h2 className="text-2xl text-sky-400 font-bold mb-4 text-center">
          Meet Our Team
        </h2>
        <h3 className="text-white text-center">Another one!</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <AboutUsCard
            name="Abhay Pandey"
            LinkedIn="abhay-pandey-854ba12aa"
            Resume
          />
          <AboutUsCard
            name="Harshal Chavan"
            LinkedIn="harshal-chavan-20129324b"
            Resume
          />
          <AboutUsCard
            name="Ajinkya Birari"
            LinkedIn="ajinkya-birari-25566b229"
            Resume
          />
          <AboutUsCard
            name="Atharva Aurangabadkar"
            LinkedIn="atharv-aurangabadkar-a24373289"
            Resume
          />
          <AboutUsCard
            name={"Prof. Nisy Mathew"}
            LinkedIn={"nisy-elsa-mathew-72699a88"}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
