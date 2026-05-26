import Navbar from "../components/layout/Navbar";
export default function Dashboard() {

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar/>
      <div className="border-b border-white/10 p-6">
        <h1 className="text-3xl font-bold">
          User Dashboard
        </h1>
      </div>


      <div className="mx-auto max-w-7xl p-6">

        <div className="mb-10">
          <h2 className="text-4xl font-bold">
            Lessgooo , Welcome Back ;)
          </h2>
          <p className="mt-2 text-gray-400">
            Track your journeys and explore the world.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-4xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">
              Cities Explored
            </p>
            <h1 className="mt-3 text-5xl font-bold">
              16
            </h1>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">
              Countries Visited
            </p>

            <h1 className="mt-3 text-5xl font-bold">
              6
            </h1>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">
              Your Travel Score
            </p>

            <h1 className="mt-3 text-5xl font-bold">
              18%
            </h1>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">
              Anything
            </p>

            <h1 className="mt-3 text-l font-bold">
              Will see later what to add
            </h1>
          </div>

        </div>


        <div className="mt-12">

          <h2 className="mb-6 text-2xl font-bold">
            Recent Journeys
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-sm border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Goa Trip
              </h3>

              <p className="mt-2 text-gray-400">
                enjoyeddd
              </p>
            </div>

            <div className="rounded-sm border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                jammu
              </h3>

              <p className="mt-2 text-gray-400">
                yayyy
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}