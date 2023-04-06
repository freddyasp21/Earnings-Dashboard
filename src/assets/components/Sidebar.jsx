import React from "react";
import { RiHome4Line,RiSuitcaseLine, RiBook3Line } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="bg-indigo-900 text-white h-full overflow-y-scroll">
      {/* Contenedor superior */}
      <div className="flex justify-center p-8 flex-col items-center gap-2">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg?w=740&t=st=1680751510~exp=1680752110~hmac=ff99bd4cb8e109c82ac374579a3da4e6fa4fdafc0e7d854b68249a6352b11a2e"
          alt=""
          className="w-20 h-20 object-cover rounded-full"
        />
        <h1 className="text-xl font-bold">Daniel Luis J.</h1>
        <p className="bg-indigo-700 py-1 px-3 rounded-full">Pro Level</p>
      </div>

      {/*Contenedor inferior  */}
      <nav className="bg-indigo-600 p-8 rounded-tr-full">
        <a className="flex">
          <RiHome4Line /> Home
        </a>
        <a className="">
            <RiSuitcaseLine/> Projects
        </a>
        <a className="">
            <RiBook3Line/> Invoices
        </a>
        <a className=""></a>
      </nav>
    </div>
  ); 
}

export default Sidebar;
