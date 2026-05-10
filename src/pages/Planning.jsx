import image2 from "../assets/chrisbrown.jpg";
import { artists } from "../Data/Artistsdata";


export const Planning = ({planning,setPlanning}) => {

  const removefromPlanning = (id) => {

    setPlanning( planning.filter(artist => artist.id !== id ))
    
  }
  return (
    
    
    <div className="min-h-screen ">

      <div className="mt-10">
     <div className="bg-yellow-400 w-150 rounded p-1">
        <h1 className="text-3xl font-bold text-center">
          My Planning
        </h1>
      </div>
      </div>

   <div className="flex justify-center items-center  gap-10 mt-10">

  {planning.map((artist) => (
    

    <div
      key={artist.id}
      className="bg-[#0D1B3D] w-52 h-100 rounded-3xl relative text-center hover:scale-105 transition duration-500 shadow-xl"
    >

      <div className="bg-white rounded-full w-40 mx-auto mt-4 py-1">
        <h2 className="text-yellow-400 font-bold">
          {artist.name}
        </h2>
      </div>

      <img
        src={artist.image}
     
        className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mt-16"
      />

      <button className="bg-yellow-400 w-40 py-2 rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 font-bold hover:bg-red-700 transition duration-500" onClick={() => removefromPlanning(artist.id)} >
        -REMOVE
      </button>
      
    </div>

  ))}
  </div>

</div>
  );
};