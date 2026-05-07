import image2 from "../assets/weekend.png";
export const Planning = () => {
    return(
       <div className="bg-white min-h-screen p-4">

      <div className="bg-yellow-400 w-130 text-center py-1 rounded mb-20">
        <h1 className="text-3xl">My Planing </h1>
      </div>

      <div className="space-y-6">
        <div className="border-b border-gray-400 pb-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src={image2}
              alt="artist"
              className="w-10 h-10 rounded-full"
            />

            <h2 className="text-2xl font-bold">
              The Weekand
            </h2>
          </div>

          <p className="text-3xl">21:30</p>
        </div>

        <div className="border-b border-gray-400 pb-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src={image2}
              alt="artist"
              className="w-10 h-10 rounded-full"
            />

            <h2 className="text-2xl font-bold">
              Dua Lipa
            </h2>
          </div>

          <p className="text-3xl">21:10</p>
        </div>

        <div className="border-b border-gray-400 pb-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src={image2}
              alt="artist"
              className="w-10 h-10 rounded-full"
            />

            <h2 className="text-2xl font-bold">
              TOTO
            </h2>
          </div>

          <p className="text-3xl">21:30</p>
        </div>
        <div className="border-b border-gray-400 pb-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src={image2}
              alt="artist"
              className="w-10 h-10 rounded-full"
            />

            <h2 className="text-xl font-bold">
              Saad Lmjarad
            </h2>
          </div>

          <p className="text-3xl">21:30</p>
        </div>

      </div>
    </div>
    );
}