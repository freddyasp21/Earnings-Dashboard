import React from "react";
import { RiLineChartLine } from "react-icons/ri";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="bg-gray-100 p-8 col-span-3 xl:col-span-5">
        <Header />
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* card 1 */}
          <div className="bg-indigo-900 p-8 rounded-xl text-white flex flex-col gap-6">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-xl">Earnings</h4>
            <span className="text-5xl text-white">&euro; 8.350</span>
            <span className="py-1 px-3 rounded-xl bg-indigo-700">
              + 10% since last month
            </span>
          </div>
          {/* card 2 */}
          <div className="p-4 bg-white rounded-xl text-white flex flex-col justify-between gap-4 drop-shadow-sm">
            <div className="flex items-center gap-4 bg-indigo-900/30 rounded-xl p-4">
              <span className="bg-indigo-900 font-bold p-4 rounded-xl text-xl text-gray-100">
                98
              </span>
              <div className="">
                <h3 className="font-bold">Rank</h3>
                <p className="text-gray-500">top 30%</p>
              </div>
            </div>
            <div className=" bg-indigo-900/30 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-indigo-900 font-bold p-4 rounded-xl text-xl text-gray-100">
                  20
                </span>
                <div className="">
                  <h3 className="font-bold">Proyects</h3>
                  <p className="text-gray-500">8 this Month</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-indigo-900/20 py-1 px-2 rounded-full cursor-pointer">
                  Movil app
                </span>
                <span className="bg-indigo-900/20 py-1 px-2 rounded-full cursor-pointer">
                  Branding
                </span>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-8">Your Proyects</h2>
            <div className="bg-white p-8 rounded-xl drop-shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-hermosa-mujer-morena-rostro-sonriente_53876-137688.jpg"
                  alt=""
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div className="">
                  <h3 className="font-bold">Logo Design for bakery</h3>
                  <p className="text-gray-500">1 day reamaning</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/joven-empresaria-vestido-azul_144627-28138.jpg"
                  alt=""
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div className="">
                  <h3 className="font-bold">Logo Design for bakery</h3>
                  <p className="text-gray-500">1 day reamaning</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
