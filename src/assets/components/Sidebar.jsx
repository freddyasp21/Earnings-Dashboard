import { useState } from "react";
import {
  RiHome4Line,
  RiSuitcaseLine,
  RiBook3Line,
  RiBarChart2Line,
  RiMore2Line,
  RiCloseFill,
} from "react-icons/ri";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div
      className={`bg-indigo-900 text-white h-full fixed lg:static lg:w-full w-[80%] md:w-[40%] transition-all duration-300 ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      {/* Contenedor superior */}
      <div className="flex justify-center p-8 flex-col items-center gap-2 h-[30vh]">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg?w=740&t=st=1680751510~exp=1680752110~hmac=ff99bd4cb8e109c82ac374579a3da4e6fa4fdafc0e7d854b68249a6352b11a2e"
          alt=""
          className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
        />
        <h1 className="text-xl font-bold">Daniel Luis J.</h1>
        <p className="bg-indigo-700 py-1 px-3 rounded-full">Pro Level</p>
      </div>

      {/*Contenedor inferior  */}
      <div className="bg-indigo-600 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8">
        <nav className="flex flex-col gap-8">
          <a className="flex items-center gap-5 text-xl py-2 px-4 rounded-xl hover:bg-indigo-900/50 cursor-pointer transition-colors">
            <RiHome4Line /> Home
          </a>
          <a className="flex items-center gap-5 text-xl py-2 px-4 rounded-xl hover:bg-indigo-900/50 cursor-pointer transition-colors">
            <RiSuitcaseLine /> Projects
          </a>
          <a className="flex items-center gap-5 text-xl py-2 px-4 rounded-xl hover:bg-indigo-900/50 cursor-pointer transition-colors">
            <RiBook3Line /> Invoices
          </a>
          <a className="flex items-center gap-5 text-xl py-2 px-4 rounded-xl hover:bg-indigo-900/50 cursor-pointer transition-colors">
            <RiBarChart2Line /> Reports
          </a>
        </nav>
        <div className="bg-indigo-900/50 p-4 rounded-xl">
          <p className="">Having troubles?</p>
          <a className="font-semibold cursor-pointer">Contact Us</a>
        </div>
      </div>

      {/* button movil */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed bottom-4 right-4 bg-indigo-600 p-3 rounded-full text-2xl lg:hidden"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Line />}
      </button>
    </div>
  );
}

export default Sidebar;
