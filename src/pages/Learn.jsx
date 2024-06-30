import { Card } from "../components";

const Learn = () => {
  return (
    <div className="w-full flex flex-wrap justify-center mb-10">
      <Card
        title={"Numbers"}
        imageTitle={"numbers"}
        description={
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        }
        link={"/learn/numbers"}
      />

      <Card
        title={"Alphabet"}
        imageTitle={"alphabet"}
        description={
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        }
        link={"/learn/alphabet"}
      />

      <Card
        title={"Words"}
        imageTitle={"words"}
        description={
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        }
        link={"/learn/words"}
      />
    </div>
  );
};

export default Learn;
