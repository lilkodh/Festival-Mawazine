
import { useParams } from "react-router-dom";
import { artists } from "../Data/Artistsdata";
export const Artistdetails = ({passport,setPassport}) => {
 
  const {artistId} = useParams()
  
  const artist = artists.find(
        (artist) => artist.id === Number(artistId)
  )
  const addToPassport = (artis)=> {
    setPassport((prePaaaport)=> [...prePaaaport,artist])
  }
  
  return (
    
    <div className="min-h-screen p-10 flex justify-center items-center ">
      

      <div className="border-4 border-[#0D1B3D] rounded-2xl p-2 w-200 h-150  ">

        <div className="bg-[#0D1B3D] rounded-2xl p-6 text-white h-140 relative ">

          <div className="flex items-start gap-6 " >

            <img
              src={artist.image}
              alt="artist"
              className="w-28 h-28 rounded-full border-4 border-yellow-400 hover:scale-200 transition duration-2000"
            />
            

            <div className="mt-4">

              <h1 className="text-4xl font-bold mb-8">
                {artist.name}
              </h1>
              

              <p className="mb-6 text-lg">
               {artist.location}
              </p>

              <p className="text-2xl">
                {artist.time}
              </p>
              

            </div>
          </div>

          <div className="bg-yellow-400 text-white  rounded-[50px] px-10 py-10 w-100 absolute mt-15 ml-40 hover:scale-140 transition duration-2000 ">

            <p className="text-sm text-center font-bold leading-10">
             {artist.description}
            </p>

          </div>

        </div>
        <div className="flex justify-center mt-[-70px] ">
            <button className=" text-2xl text-black   rounded-full p-2 bg-white hover:bg-green-400 scale-100 transition duration-500" onClick={() => addToPassport(artist)}> I was There </button >
            </div>
      </div>
      
    </div>
    
  );
};