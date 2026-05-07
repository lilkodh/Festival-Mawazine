import image2 from "../assets/weekend.png";
export  const Artistdetails = () => {
    return(
         <div className=" p-6 flex justify-center items-center">

      <div className="border-2 border-[#0D1B3D] rounded-2xl p-4 w-200 h-150 ">
        <div className="bg-[#0D1B3D] rounded-2xl p-4 text-white h-140 flex flex-col justify-center items-center gap-10">
          <div className="flex  gap-10  ">
            <img
              src={image2}
              alt="artist"
              className="w-16 h-16 rounded-full border-4 border-yellow-400"
            />

            <div>
              <h1 className="text-2xl font-bold mb-4">
                The Weekend
              </h1>

              <p className="text-sm mb-1">
                📍 Olm Souissi
              </p>

              <p className="text-sm">
                ⏰ 21:30
              </p>
            </div>
          </div>
          <p className="text-xs leading-5 text-gray-300 mb-2">
            The Weekend is a Canadian singer and songwriter
            known for his unique style and emotional music.
            He mixes styles like R&B, pop, and electronic music.
          </p>
          <div className="flex justify-between gap-30 mt-20">

            <button className="bg-white text-black px-4 py-1 rounded-full text-sm ">
              I was There
            </button>

            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm">
              +Add To Planning
            </button>

          </div>

        </div>
      </div>
    </div>
    )
}