import image2 from "../assets/weekend.png";

export const Programme = () => {
  return (
    <div className="bg-white min-h-screen p-4">

      <h1 className="text-3xl font-bold text-center mb-10">
        Select a Day !
      </h1>

      <div className="flex justify-center gap-8 mb-10">

        <button className="border border-[#0D1B3D] px-3 py-1 text-center leading-4 hover:bg-yellow-400 transition duration-500">
          19 <br /> Jun
        </button>

        <button className="border border-[#0D1B3D] px-3 py-1 text-center leading-4 hover:bg-yellow-400 transition duration-500">
          20 <br /> Jun
        </button>

        <button className="bg-yellow-400 px-3 py-1 text-center leading-4 font-semibold">
          21 <br /> Jun
        </button>

        <button className="border border-[#0D1B3D] px-3 py-1 text-center leading-4 hover:bg-yellow-400 transition duration-500">
          22 <br /> Jun
        </button>

      </div>

      <div className="bg-yellow-400 text-center py-2 rounded mb-12 font-medium max-w-md mx-auto">
        All Artists
      </div>

    
      <div className="flex justify-center gap-10 flex-wrap">

      
        <div className="bg-[#0D1B3D] w-56 h-80 rounded-3xl p-6 text-center text-white relative hover:scale-105 transition duration-500 cursor-pointer shadow-lg">

          <img
            src={image2}
            alt="artist"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mb-4"
          />

          <h2 className="text-yellow-400 text-xl font-bold">
            Dua Lipa
          </h2>

          <p className="mt-4 text-lg">21:30</p>

          <p className="text-sm mt-3">
            📍 OLM SOUISSI
          </p>

          <button className="bg-yellow-400 text-white w-10 h-10 rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2 text-2xl hover:bg-yellow-300 transition duration-500">
            +
          </button>
        </div>
        <div className="bg-[#0D1B3D] w-56 h-80 rounded-3xl p-6 text-center text-white relative hover:scale-105 transition duration-500 cursor-pointer shadow-lg">

          <img
            src={image2}
            alt="artist"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mb-4"
          />

          <h2 className="text-yellow-400 text-xl font-bold">
            Nianho
          </h2>

          <p className="mt-4 text-lg">20:10</p>

          <p className="text-sm mt-3">
            📍 Nahdda
          </p>

          <button className="bg-yellow-400 text-white w-10 h-10 rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2 text-2xl hover:bg-yellow-300 transition duration-500">
            +
          </button>
        </div>
        <div className="bg-[#0D1B3D] w-56 h-80 rounded-3xl p-6 text-center text-white relative hover:scale-105 transition duration-500 cursor-pointer shadow-lg">

          <img
            src={image2}
            alt="artist"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mb-4"
          />

          <h2 className="text-yellow-400 text-xl font-bold">
            TOTO
          </h2>

          <p className="mt-4 text-lg">20:10</p>

          <p className="text-sm mt-3">
            📍 OLM SOUISSI
          </p>

          <button className="bg-yellow-400 text-white w-10 h-10 rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2 text-2xl hover:bg-yellow-300 transition duration-500">
            +
          </button>
        </div>

      </div>
    </div>
  );
};