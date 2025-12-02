import React from "react";
import GradientButton from "../UiComponents/GradientButton/GradientButton";

export default function HeroSection() {
  return (
    <section className="relative hero h-screen text-white overflow-hidden px-4 py-4 sm:py-8 md:py-12 lg:py-20 xl:py-32">
      <div className="mx-auto max-w-5xl flex flex-col justify-center items-center h-full space-y-12">
        <div className="space-y-6 sm:pt-14 text-center">
          <h1 className="mx-auto text-balance max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#afbefd]">Close 60% more demos {""}</span>
            without hiring sales reps
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            Blacky analyzes every demo call and tells you exactly what kills
            deals. 180+ early-stage founders use it to fix their pitch before
            burning through their runway.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <GradientButton />
          <button className="rounded-full border border-gray-300 bg-[white] text-black px-6 py-3 text-base font-semibold transition-colors hover:bg-gray-50">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}
