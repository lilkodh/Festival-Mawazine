import image2 from "../assets/weekend.png";
export const Artistdetails = () => {
  return (
    <div className="bg-white min-h-screen p-6 flex justify-center items-center">

      <div className="border-4 border-[#0D1B3D] rounded-2xl p-2 w-full max-w-md">

        <div className="bg-[#0D1B3D] rounded-2xl p-6 text-white h-[500px] relative">

          <div className="flex items-start gap-6">

            <img
              src={image2}
              alt="artist"
              className="w-28 h-28 rounded-full border-4 border-yellow-400"
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

          <div className="bg-yellow-400 text-black rounded-full px-8 py-6 w-[260px] absolute bottom-10 left-1/2 -translate-x-1/2">

            <p className="text-sm text-center font-medium leading-6">
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