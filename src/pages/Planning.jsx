import image2 from "../assets/weekend.png";

export const Planning = () => {
  return (
    <div className=" min-h-screen   ">


      <div className="bg-yellow-400 w-150 rounded mb-20 py-1 mt-10">
        <h1 className="text-3xl font-bold text-center">
          My Planing
        </h1>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        <div className="bg-[#0D1B3D] w-52 h-100 rounded-3xl relative text-center hover:scale-105 transition duration-500 shadow-xl">

  <div className="bg-white rounded-full w-40 mx-auto mt-4 py-1">
    <h2 className="text-yellow-400 font-bold">
      Dua Lipa
    </h2>
  </div>

  <img
    src={image2}
    alt="artist"
    className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mt-16"
  />

  <button className="bg-yellow-400 w-40 py-2 rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 font-bold hover:bg-red-700 transition duration-500">
    -REMOVE
  </button>
</div>

<div className="bg-[#0D1B3D] w-52 h-100 rounded-3xl relative text-center hover:scale-105 transition duration-500 shadow-xl">

  <div className="bg-white rounded-full w-40 mx-auto mt-4 py-1">
    <h2 className="text-yellow-400 font-bold">
      Saad Lamjarad
    </h2>
  </div>

  <img
    src={image2}
    alt="artist"
    className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mt-16"
  />

  <button className="bg-yellow-400 w-40 py-2 rounded-full absolute bottom-6 left-1/2 -translate-x-20 font-bold hover:bg-red-700 transition duration-500">
    -REMOVE
  </button>
</div>

 
        <div className="bg-[#0D1B3D] w-52 h-100 rounded-3xl relative text-center hover:scale-105 transition duration-500 shadow-xl">

          <div className="bg-white rounded-full w-40 mx-auto mt-4 py-1">
            <h2 className="text-yellow-400 font-bold">
              The Weekand
            </h2>
          </div>

          <img
            src={image2}
            alt="artist"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mt-16"
          />

 
          <button className="bg-yellow-400 w-40 py-2 rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 font-bold hover:bg-red-700 transition duration-500 shadow-2xl ">
            -REMOVE
          </button>
        </div>


        <div className="bg-[#0D1B3D] w-52 h-100 rounded-3xl relative text-center hover:scale-105 transition duration-500 shadow-xl">

          <div className="bg-white rounded-full w-40 mx-auto mt-4 py-1">
            <h2 className="text-yellow-400 font-bold">
              The Weekand
            </h2>
          </div>

          <img
            src={image2}
            alt="artist"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mt-16"
          />

          <button className="bg-yellow-400 w-40 py-2 rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 font-bold hover:bg-red-500 transition duration-500">
            -REMOVE
          </button>
        </div>

      </div>
      
    </div>
  );
};