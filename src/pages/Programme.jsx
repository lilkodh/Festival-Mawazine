import image2 from "../assets/weekend.png";
export const Programme = () =>{
    return(
        <div className="bg-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">
        Select a Day !
      </h1>

      <div className="flex justify-center gap-8 mb-10">

        <button className="border px-3 py-1 text-center leading-4">
          19 <br /> Jun
        </button>

        <button className="border px-3 py-1 text-center leading-4">
          20 <br /> Jun
        </button>

        <button className="bg-yellow-400 px-3 py-1 text-center leading-4 font-semibold">
          21 <br /> Jun
        </button>

        <button className="border px-3 py-1 text-center leading-4">
          22 <br /> Jun
        </button>

      </div>

      <div className="bg-yellow-400 text-center py-1 rounded mb-8 font-medium">
        All Artists
      </div>

      <div className="border border-[#0D1B3D]">

        <div className="flex items-center justify-between p-4 border-b">

          <div className="flex items-center gap-3">
            <img
              src={image2}
              alt="artist"
              className="w-8 h-8 rounded-full"
            />

            <h2 className="font-bold">Dua Lipa</h2>
          </div>

          <p className="text-sm">⏱ 20:10</p>

          <p className="text-sm">📍 Olm Souissi</p>
        </div>
        <div className="flex items-center justify-between p-4 border-b">

          <div className="flex items-center gap-3">
            <img
              src={image2}
              alt="artist"
              className="w-8 h-8 rounded-full"
            />

            <h2 className="font-bold">Nianho</h2>
          </div>

          <p className="text-sm">⏱ 20:10</p>

          <p className="text-sm">📍 Nahdda</p>
        </div>

        <div className="flex items-center justify-between p-4 border-b">

          <div className="flex items-center gap-3">
            <img
              src={image2}
              alt="artist"
              className="w-8 h-8 rounded-full"
            />

            <h2 className="font-bold">TOTO</h2>
          </div>

          <p className="text-sm">⏱ 20:10</p>

          <p className="text-sm">📍 Olm Souissi</p>
        </div>

        <div className="flex items-center justify-between p-4">

          <div className="flex items-center gap-3">
            <img
              src={image2}
              alt="artist"
              className="w-8 h-8 rounded-full"
            />

            <h2 className="font-bold">Saad Lamjarad</h2>
          </div>

          <p className="text-sm">⏱ 20:10</p>

          <p className="text-sm">📍 Olm Souissi</p>
        </div>

      </div>
    </div>
    );
}