import image2 from "../assets/weekend.png";

export const Passport = () => {
  return (
    <div className="bg-white min-h-screen p-4">


      <div className="bg-yellow-400 w-80 rounded mb-10 py-2">
        <h1 className="text-3xl font-bold text-center">
          My Passport
        </h1>
      </div>


      <div className="border-4 border-[#0D1B3D] p-6 space-y-8">


        <div className="bg-[#0D1B3D] rounded-3xl px-6 py-6 flex items-center justify-between text-white hover:scale-105 transition duration-500 shadow-xl">

  
          <div className="flex items-center gap-4">

            <img
              src={image2}
              alt="artist"
              className="w-12 h-12 rounded-full border-4 border-yellow-400"
            />

            <h2 className="text-2xl font-semibold">
              The Weekand
            </h2>
          </div>

        
          <p className="text-xl">
            21:30
          </p>
          <p className="text-green-400 text-xl font-bold">
            Attented
          </p>
        </div>

        <div className="bg-[#0D1B3D] rounded-3xl px-6 py-6 flex items-center justify-between text-white hover:scale-105 transition duration-500 shadow-xl">

          <div className="flex items-center gap-4">

            <img
              src={image2}
              alt="artist"
              className="w-12 h-12 rounded-full border-4 border-yellow-400"
            />

            <h2 className="text-2xl font-semibold">
              The Weekand
            </h2>
          </div>

          <p className="text-xl">
            21:30
          </p>

          <p className="text-green-400 text-xl font-bold">
            Attented
          </p>
        </div>

        <div className="bg-[#0D1B3D] rounded-3xl px-6 py-6 flex items-center justify-between text-white hover:scale-105 transition duration-500 shadow-xl">

          <div className="flex items-center gap-4">

            <img
              src={image2}
              alt="artist"
              className="w-12 h-12 rounded-full border-4 border-yellow-400"
            />

            <h2 className="text-2xl font-semibold">
              The Weekand
            </h2>
          </div>

          <p className="text-xl">
            21:30
          </p>

          <p className="text-green-400 text-xl font-bold">
            Attented
          </p>
          
        </div>

      </div>
    </div>
  );
};