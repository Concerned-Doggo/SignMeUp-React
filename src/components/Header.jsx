import { NavLink } from "react-router-dom";
const Header = () => {
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Feedback",
      href: "/feedback",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
    {
      name: "Github",
      href: "https://github.com/concerned-doggo",
    },
  ];
  return (
    <nav className="bg-nav flex flex-col md:flex-row pl-[25vw] justify-center md:justify-between text-sky-400 align-middle md:mb-10 md:px-4">
      <NavLink className="p-3 flex font-bold text-2xl rounded-b-3xl" to="/">
        <img
          className="w-10 mr-2"
          src="../Images/Logos/websiteLogo.png"
        />
        SignMeUp!
      </NavLink>
      <div className="flex gap-5 font-semibold p-3 rounded-b-3xl">
        {navigation.map((item) => (
          <NavLink
                        key={item.name}
            to={item.href}
            className={(isActive) => {
              return isActive ? "text-sky-400" : "text-gray-400";
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Header;
