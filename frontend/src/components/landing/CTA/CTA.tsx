import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
          <Sparkles size={15} />
          Your career, intelligently guided
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to take control of your{" "}
          <span className="text-indigo-400">career?</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Turn your skills, experience, and career goals into a clear
          strategy. Let CareerPilot AI help you understand where you
          stand and what to do next.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/register"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-600/30 sm:w-auto"
          >
            Get Started

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("features")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
          >
            Explore Features
          </button>
        </div>

        {/* Trust line */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          Built for ambitious developers and professionals

          <span className="hidden sm:inline">•</span>

          <span className="hidden sm:inline">
            Powered by AI
          </span>
        </div>
      </div>
    </section>
  );
}