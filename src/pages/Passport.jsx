export const Passport = () =>{
    return(
       <div className="bg-white min-h-screen p-4">
      <div className="bg-yellow-400 w-48 text-center py-2 rounded mb-6">
        <h1 className="text-3xl">My Passport</h1>
      </div>
      <div className="border border-[#0D1B3D] p-4 space-y-8">


        <div className="bg-[#0D1B3D] rounded-full px-4 py-3 flex items-center justify-between text-white">

          <div className="flex items-center gap-2">
            <img
              src="/weeknd.png"
              alt="artist"
              className="w-8 h-8 rounded-full border-2 border-yellow-400"
            />

            <h2 className="font-semibold">
              The Weeknd
            </h2>
          </div>

          <p>21:30</p>

          <p className="text-green-400 font-bold">
            Attended
          </p>
        </div>
        <div className="bg-[#0D1B3D] rounded-full px-4 py-3 flex items-center justify-between text-white">

          <div className="flex items-center gap-2">
            <img
              src="/weeknd.png"
              alt="artist"
              className="w-8 h-8 rounded-full border-2 border-yellow-400"
            />

            <h2 className="font-semibold">
              The Weeknd
            </h2>
          </div>

          <p>21:30</p>

          <p className="text-green-400 font-bold">
            Attended
          </p>
        </div>
        <div className="bg-[#0D1B3D] rounded-full px-4 py-3 flex items-center justify-between text-white">

          <div className="flex items-center gap-2">
            <img
              src="/weeknd.png"
              alt="artist"
              className="w-8 h-8 rounded-full border-2 border-yellow-400"
            />

            <h2 className="font-semibold">
              The Weeknd
            </h2>
          </div>

          <p>21:30</p>

          <p className="text-green-400 font-bold">
            Attended
          </p>
        </div>

      </div>
    </div>
    )
}