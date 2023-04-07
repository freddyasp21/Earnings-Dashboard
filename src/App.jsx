import React from "react";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="bg-gray-100 p-8 col-span-3 xl:col-span-5 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 01 */}
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
            <div className="flex items-center gap-4 bg-indigo-600/20 rounded-xl p-4">
              <span className="bg-indigo-900 font-bold p-4 rounded-xl text-xl text-gray-100">
                98
              </span>
              <div className="">
                <h3 className="font-bold text-black">Rank</h3>
                <p className="text-gray-500">top 30%</p>
              </div>
            </div>
            <div className="bg-indigo-600/20 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-indigo-900 font-bold p-4 rounded-xl text-xl text-gray-100">
                  20
                </span>
                <div className="">
                  <h3 className="font-bold text-black">Proyects</h3>
                  <p className="text-gray-500">8 this Month</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-between">
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
              <div className="flex items-center gap-4 mb-4">
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
              <div className="flex justify-end">
                <a className="text-indigo-900 font-bold hover:text-indigo-600 hover:underline cursor-pointer">
                  See all projects
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 02 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div className="">
            <h2 className="text-2xl font-bold mb-8">Recent Invoices</h2>
            <div className="bg-white p-8 rounded-xl drop-shadow-sm">
              <div className="flex items-center justify-between md:gap-4 mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/vista-frontal-mujer-sonriente-auriculares_23-2148613052.jpg"
                    alt=""
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold text-center">Samara Gabar</h2>
                    <p className="text-gray-500">Info of the Job</p>
                  </div>
                </div>

                <span className="bg-green-300 text-green-800 py-1 px-3 rounded-full font-medium cursor-pointer">
                  Paid
                </span>

                <span className="font-bold">&euro; 1200.87</span>
              </div>

              <div className="flex items-center justify-between md:gap-4 mb-4">
                <div className="flex flex-col md:flex-row  items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/concepto-emociones-personas-foto-cabeza-hombre-guapo-aspecto-serio-barba-confiado-decidido_1258-26730.jpg"
                    alt=""
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold">Alvaro Zheng</h2>
                    <p className="text-gray-500">Info of the Job</p>
                  </div>
                </div>

                <span className="bg-red-300 text-red-800 py-1 px-3 rounded-full font-medium cursor-pointer">
                  Late
                </span>

                <span className="font-bold">&euro; 1800.87</span>
              </div>

              <div className="flex items-center justify-between md:gap-4 mb-4">
                <div className="flex flex-col md:flex-row  items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/hombre-joven-guapo-nuevo-corte-pelo-estilo_176420-19636.jpg"
                    alt=""
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold">Valeriano V.</h2>
                    <p className="text-gray-500">Info of the Job</p>
                  </div>
                </div>

                <span className="bg-red-300 text-red-800 py-1 px-3 rounded-full font-medium cursor-pointer">
                  Late
                </span>

                <span className="font-bold">&euro; 2200.87</span>
              </div>
            </div>
            <div className="bg-indigo-900 text-gray-100 gap-2 p-8 rounded-xl mt-8 flex items-center justify-between drop-shadow-xl">
              <div className="">
                <RiHashtag
                  className="text-4xl -rotate-12"
                  text-center
                  md:text-start
                />
              </div>
              <div className="">
                <h5 className="font-bold text-white text-center md:text-start">
                  Engage with clients
                </h5>
                <p className=" text-center md:text-start">Jump Slack Channel</p>
              </div>

              <button className="bg-indigo-600 py-2 px-6 rounded-xl text-white hover:bg-indigo-600/50 transition-all">
                Join now
              </button>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-8">Recommend Proyects</h2>
            <div className="bg-white p-8 rounded-xl drop-shadow-sm flex flex-col gap-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-row gap-4">
                  <img
                    src="https://img.freepik.com/fotos-premium/retrato-mujer-hermosa-pelo-rojo_274222-8108.jpg"
                    alt=""
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold">Samara Gabarri</h2>
                    <p className="text-gray-500">Info of the Job</p>
                  </div>
                </div>
                <div className="">
                  <span className="bg-indigo-700 py-2 px-4 rounded-full text-white font-medium cursor-pointer">
                    View
                  </span>
                </div>
              </div>

              <div className="">
                <h5 className="text-lg font-bold mb-8">
                  I needed help with some database questions and he delivered
                  really...
                </h5>
                <p className="text-gray-500 leading-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Autem qui officiis exercitationem. Ad, delectus fugit? Ab quae
                  obcaecati amet asperiores, necessitatibus magni beatae saepe
                  voluptatum exercitationem voluptas quod ipsam nisi!
                </p>
              </div>

              <div className="bg-indigo-600/20 flex items-center justify-between gap-4 py-4 px-8 rounded-lg mt-4">
                <div className="">
                  <span className="font-bold text-black">&euro; 8.700 </span>
                  <span className="text-gray-500">/ Mouth</span>
                </div>
                <span className="bg-gray-100 text-gray-500 py-1 px-3 rounded-full font-medium min-w-[87px]">
                  Full time
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
