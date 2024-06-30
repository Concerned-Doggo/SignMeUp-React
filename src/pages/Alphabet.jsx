import { AlphabetCard } from "../components";

const Alphabet = () => {
  return (
    <div class="w-full flex flex-wrap justify-center mb-10">
      <AlphabetCard letter1={"A"} letter2={"F"} />
      <AlphabetCard letter1={"G"} letter2={"L"} />
      <AlphabetCard letter1={"M"} letter2={"R"} />
      <AlphabetCard letter1={"S"} letter2={"Z"} />
    </div>
  );
};

export default Alphabet;
