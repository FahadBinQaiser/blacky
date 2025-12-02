import React from "react";

export default function DashboardHero() {
  return (
    <section className="relative hero h-screen text-white overflow-hidden px-4 py-4 sm:py-8 md:py-12 lg:py-20 xl:py-32">
      <div className="mx-auto max-w-5xl flex flex-col justify-center items-center h-full space-y-12">
        <div className="space-y-6 text-center">
          <h1 className="mx-auto text-balance max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#afbefd]">
              Cut supply chain waste by 40%
            </span>{" "}
            without replacing your existing systems
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            Streamline Analytics plugs into SAP, Oracle, and NetSuite to
            identify operational inefficiencies in real-time. 340+ enterprise
            teams trust us to eliminate waste and reduce costs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            className="relative overflow-hidden rounded-full px-6 py-3 text-base font-semibold text-white"
            style={{
              background:
                "linear-gradient(to bottom, #361893 40%, #afbefd 130%)",
              backdropFilter: "blur(20px)",
            }}
          >
            Book a Demo
          </button>
          <button className="rounded-full border border-gray-300 bg-[white] text-black px-6 py-3 text-base font-semibold transition-colors hover:bg-gray-50">
            See ROI Calculator
          </button>
        </div>
      </div>
    </section>
  );
}
