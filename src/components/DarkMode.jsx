import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  console.log(element);
  //   UseEffect
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <div>
      {theme === "light" ? (
        <MdDarkMode
          size={30}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      ) : (
        <CiLight
          size={30}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </div>
  );
};

export default DarkMode;
