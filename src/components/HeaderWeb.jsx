import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { data } from "autoprefixer";
const HeaderWeb = () => {
  const ManueLink = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blog",
      link: "/#blog",
    },
  ];
  const dropDwonItem = [
    {
      id: 1,
      name: "Mobile",
      link: "#",
    },
    {
      id: 2,
      name: "Laptop",
      link: "#",
    },
    {
      id: 3,
      name: "Tab",
      link: "#",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative Z-40">
      <div className="py-4">
        <div className="container flex items-center justify-between">
          {/* Logo section */}
          <div className=" flex items-center  gap-5">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              TechHub
            </a>
            {/* Menu Item */}
            <div
              className="hidden 
            sm:block"
            >
              <ul className="flex gap-5 items-center">
                {ManueLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className=" inline-block font-semibold text-gray-400  hover:text-black
                      dark:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Drop down */}
                <l1 className="relative cursor-pointer group:">
                  <a
                    href="#"
                    className="flex items-center gap-[3px] font-semibold text-gray-500 dark:hover:text-white"
                  >
                    Cetagory
                    <FaCaretDown className="group hover:rotate-180 duration-400" />
                  </a>
                  {/* Drop dwon item */}
                  <div className="absolute   z-[9999]   group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-500 p-2 dark:text-white ">
                    {dropDwonItem.map((myData, index) => (
                      <li key={index} className="space-y-2">
                        <a
                          className="text-gray-300  hover:text-white dark:hover:text-white hover:bg-red-300 inline-block p-3 w-full rounded-md font-semibold duration-200"
                          href={myData.link}
                        >
                          {myData.name}
                        </a>
                      </li>
                    ))}
                  </div>
                </l1>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between  gap-4">
            {/* Nav Bar right Section */}
            <div className="relative  items-center group hidden sm:block">
              <input
                placeholder="Search"
                type="search"
                className="search-bar text-white"
              />
              <FaSearch
                className="text-xl group-hover:text-pretty text-red-500 absolute
              top-1/2  -translate-y-1/2 right-3"
              />
            </div>
            <button className="relative p-4">
              <FaCartShopping className="text-2xl text-gray-500  dark:text-gray-400" />
              <div className="w-4 h-5 bg-red-400 text-white rounded-full absolute top-0 right-0 items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark mode Section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWeb;
