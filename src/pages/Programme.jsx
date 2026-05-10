import { artists } from "../Data/Artistsdata";
import { Link } from "react-router-dom";

export const Programme = ({planning,setPlanning}) => {

  const addToPlanning = (oneofartist) => {
    setPlanning(previousPlanning => [
      ...previousPlanning,
      oneofartist
    ])
  }

  return (
    <div className="min-h-screen p-4">

      <h1 className="text-3xl font-bold text-center mb-11">
        Select a Day !
      </h1>

      <div className="flex justify-center gap-20 mb-15">

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

      <div className="bg-yellow-400 text-center py-2 rounded mb-12">
        All Artists
      </div>

      <div className="flex justify-center gap-20 flex-wrap">

        {artists.map((oneofartist) => (
          

          <div
            
          
          key={oneofartist.id}
            className="bg-[#0D1B3D] w-56 h-100 rounded-3xl p-6 text-center text-white relative hover:scale-130 transition duration-1000"
          >

            <img
              src={oneofartist.image}
              alt={oneofartist.name}
              className="w-24 h-24 rounded-full border-4 border-yellow-400 mx-auto mb-4 hover:scale-200 transition duration-1500"
            />

            <h2 className="text-yellow-400 text-xl font-bold">
              {oneofartist.name}
            </h2>
            

            <p className="mt-4 text-lg">
              {oneofartist.time}
            </p>

            <p className="text-sm mt-3 mb-6">
              {oneofartist.location}
            </p>
             <Link to={`/programme/${oneofartist.id}`}>
              <button className="border-2 rounded-2xl p-2 bg-amber-400 hover:bg-amber-500 scale-100 duration-100">View More</button>

            </Link>
            

            <button
              className="bg-yellow-400 text-white w-10 h-10 rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2 text-2xl hover:bg-green-500 transition duration-500"
              onClick={() => addToPlanning(oneofartist)}
            >
              +
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};