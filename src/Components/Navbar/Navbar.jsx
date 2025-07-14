import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
const NavMenu = [
  {
    link: "Home",
  },
  {
    link: "Categories",
  },
  {
    link: "Blog",
  },
  {
    link: "About",
  },
  {
    link: "Contact",
  },
];

const Navbar = () => {
  return (
    <main className="text-white bg-orange-500">
      <div className="container flex justify-between items-center">
        {/* Logo section */}

        <div className="max-w-[100px] invert">
          <img src={logo} alt="Fanta logo" />
        </div>

        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4  relative z-40">
            {NavMenu.map((links, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="inline-block text-base py-2 px-3 uppercase font-semibold"
                >
                  {links.link}
                </a>
              </li>
            ))}
            <button className="text-xl ps-14">
              <FaRegUser />
            </button>
          </ul>
        </div>

        {/* hamburger icon */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
