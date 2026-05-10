import image2 from "../assets/chrisbrown.jpg";

export const Passport = ({passport}) => {
  return (
    <div className=" min-h-screen">


      <div className="bg-yellow-400 w-150 rounded mb-10 mr-30 mt-10">
        <h1 className="text-3xl font-bold text-center">
          My Passport
        </h1>
      </div>


      <div className="border-4 border-[#0D1B3D] p-6 space-y-8">
  {passport.map((artist)=> (

        <div className="bg-[#0D1B3D] rounded-3xl px-6 py-6 flex items-center justify-between text-white hover:scale-105 transition duration-500 shadow-xl">

          <div className="flex items-center gap-4">
key={artist.id}
            <img
              src={artist.image}
              alt="artist"
              className="w-12 h-12 rounded-full border-4 border-yellow-400"
            />

            <h2 className="text-2xl font-semibold">
              {artist.name}
            </h2>
          </div>

        
          <p className="text-xl">
            {artist.time}
          </p>
          <p className="text-green-400 text-xl font-bold">
            Attented
          </p>
        </div>
      
  ))}
      </div>
   
    </div>
    
  );
};