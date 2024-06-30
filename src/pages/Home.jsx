import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="w-full flex flex-wrap justify-center mb-10">
      <Card
        title={"dictionary"}
        imageTitle={"dictionary"}
        description={
          "Search Through Huge Collection of Videos Related to Sign Language."
        }
                link={"/dictionary"}
      />
      <Card
        title={"Alphabet Songs"}
        imageTitle={"music"}
        description={
          "Enjoy Learning and playing with Alphabet Songs by Jack Hartmann."
        }
                link={"/songs"}
      />
      <Card
        title={"Learn"}
        imageTitle={"alphabet"}
        description={
          "Learn with interactive lessons and practice sessions for a dynamic learning experience."
        }
                link={"/learn"}
      />
      <Card
        title={"Quiz"}
        imageTitle={"quiz"}
        description={
          "Learn with interactive quiz and practice what you learnt with live feedback."
        }
                link={"/quiz"}
      />
    </div>
  );
};

export default Home;
