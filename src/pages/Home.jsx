import image from "../assets/how.png";
import image2 from "../assets/weekend.png";
import image3 from "../assets/week.webp";
export const Home = () => {
    return(
<div >


        <div className=" rounded-xl flex justify-center items-center ">
            <img src={image} alt="Mawazine Festival" className="w-full h-150  "/>
           
          <div className=" rounded-[20px]  absolute  bg-[#fce10e72] w-300  h-110 flex items-center justify-center " >
             <div className="flex flex-col items-center gap-6 ">
            <h1 className="text-white text-4xl font-serif font-bold flex items">
             🎵 MAWAZINE
            </h1>
            <div className="mt-50">
             <p className="text-2xl ">June 19 - 27, 2026 .Rabat, Morocco</p>
             </div>
            
            </div>
          </div>
    
        </div>

        <div className="border-3 mr-3 ml-3 mt-3 mb-3 border-yellow-500 p-5 shadow-xl">
          <h2 className="text-xl font-serif mb-6 flex items-center gap-3 text-black">
            <span className="text-2xl ">🔔</span > Next Concert
          </h2>

          <div className="bg-[#0b132b] rounded-[60px] p-10 h-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:scale-105 transition duration-500 shadow-xl">

            <div className="flex items-center gap-10 ">
              
              <div className="bg-white p-10 rounded-full ">
                <img
                  src={image3}
                  alt="The Weeknd"
                  className="w-30 h-30  rounded-full bg-yellow-500 "
                />
              </div>

              <div className="font-[Aboreto] text-[#e5b84b] text-4xl gap-10 ">
                <h3 className="mb-10 underline ">The WeeKand</h3>
                <p >
                  <span className="text-gray-100">⏱</span> 21:30
                </p>
                <p className="text-md flex items-center gap-2">
                  <span className="text-red-500">📍</span> OLM SOUISSI
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-20 min-w-[200px]">
              <button className="bg-[#e5b84b] text-black font-bold px-4 py-2.5 rounded-full text-xs shadow hover:scale-105 transition duration-500 shadow-xl">
                + Add To Planning
              </button>
              <button className="bg-white text-black font-bold px-4 py-2.5 rounded-full text-xs shadow hover:scale-105 transition duration-500 shadow-xl">
                I was There
              </button>
            </div>

          </div>
        </div>


      </div>

  );
}