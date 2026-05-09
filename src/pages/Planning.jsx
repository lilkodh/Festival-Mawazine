
import { artists } from "../Data/Artistsdata";
export const Planning = ({planning}) => {
  return (
    <div className="flex justify-center gap-20 flex-wrap mt-30">

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

      <button className="bg-yellow-400 w-40 py-2 rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 font-bold hover:bg-red-700 transition duration-500">
        -REMOVE
      </button>

    </div>

  ))}

</div>
  );
};