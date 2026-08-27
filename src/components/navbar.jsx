import dayjs from "dayjs";
import { useEffect } from "react";
import { navLinks, navIcons } from "#constants";
import Weather from "./Weather";
import useWindowStore from "../stores/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme;

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />

        <p className="text-lg font-bold">
          Rishit's Portfolio
        </p>

        <ul>
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => openWindow(item.type)}
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                className={`icon-hover ${
                  id === 4 ? "cursor-pointer" : ""
                }`}
                alt={`icon-${id}`}
                onClick={id === 4 ? toggleTheme : undefined}
              />
            </li>
          ))}
        </ul>

        <Weather />

        <time>
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;