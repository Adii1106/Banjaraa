import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Travel Planning",
      description:
        "Plan trips effortlessly with personalized recommendations and optimized itineraries.",
      icon: "🗺️",
    },

    {
      title: "Discover Hidden Gems",
      description:
        "Explore underrated destinations, local experiences, and unforgettable adventures.",
      icon: "✨",
    },

    {
      title: "Capture Memories",
      description:
        "Save your journeys, photos, and experiences in one beautiful travel journal.",
      icon: "📸",
    },
  ];

  return (
    <section className="bg-gray py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center space-y-12">
          <h2 className="text-6xl font-bold         italic text-white">
            Why Choose Banjaraa?
          </h2>

          <h2 className="text-8xl absolut top-10 font-boathouse text-orange-500">
            CAUSE ITS MORE THAN A TRAVEL TRACKER</h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Designed for travelers who want more than just destinations —
            create stories worth remembering.
          </p>
        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/10"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}