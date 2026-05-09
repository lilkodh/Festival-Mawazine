import image2 from "../assets/chrisbrown.jpg";
export const Artistdetails = () => {
  return (
    <div className="min-h-screen p-10 flex justify-center items-center ">

      <div className="border-4 border-[#0D1B3D] rounded-2xl p-2 w-200 h-150  ">

        <div className="bg-[#0D1B3D] rounded-2xl p-6 text-white h-140 relative ">

          <div className="flex items-start gap-6 " >

            <img
              src={image2}
              alt="artist"
              className="w-28 h-28 rounded-full border-4 border-yellow-400 hover:scale-200 transition duration-2000"
            />

            <div className="mt-4">

              <h1 className="text-4xl font-bold mb-8">
                The Weeknd
              </h1>

              <p className="mb-6 text-lg">
                📍 Olm Souissi
              </p>

              <p className="text-2xl">
                ⏱ 21:30
              </p>

            </div>
          </div>

          <div className="bg-yellow-400 text-white  rounded-[50px] px-10 py-10 w-100 absolute mt-15 ml-40 hover:scale-140 transition duration-2000 ">

            <p className="text-sm text-center font-bold leading-10">
              The Weeknd is a Canadian singer and songwriter
              known for his unique voice and emotional music.
              He mixes styles like R&B, pop, and electronic music.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};