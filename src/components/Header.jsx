import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex  justify-center  mx-auto items-center bg-[#2F3032] py-4 text-white text-xl">
      <nav className="flex justify-between  items-center h-full px-6 max-w-7xl w-full  ">
        <span>
          <NavLink className={`text-2xl font-bold`} to="/">
            FitGuru
          </NavLink>
        </span>

        <span className="flex justify-between items-center gap-5 md:gap-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "text-red-600" : "text-gray-100"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/all"}
            className={({ isActive }) =>
              `${isActive ? "text-red-600" : "text-gray-100"}`
            }
          >
            Exercices
          </NavLink>
        </span>
      </nav>
    </div>
  );
}
