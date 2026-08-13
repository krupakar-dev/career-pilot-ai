import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const insights = [
  {
    label: "Job Match",
    value: "87%",
    description: "Strong match for this role",
    icon: Target,
  },
  {
    label: "Skill Coverage",
    value: "92%",
    description: "Most required skills detected",
    icon: CheckCircle2,
  },
  {
    label: "Growth Potential",
    value: "+24%",
    description: "Potential improvement identified",
    icon: TrendingUp,
  },
];

const recommendations = [
  "Strengthen your Spring Boot experience",
  "Add measurable project achievements",
  "Highlight REST API development",
];

export function AISection() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
              <Sparkles size={15} />
              AI-Powered Career Intelligence
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Know exactly where you stand.
              <span className="block text-indigo-400">
                And what to do next.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              CareerPilot AI analyzes your profile against real
              opportunities to uncover your strengths, identify skill
              gaps, and give you clear actions to move your career forward.
            </p>

            {/* Recommendations */}
            <div className="mt-8 space-y-4">
              {recommendations.map((recommendation) => (
                <div
                  key={recommendation}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400">
                    <CheckCircle2 size={14} />
                  </div>

                  <span className="text-sm text-slate-300 sm:text-base">
                    {recommendation}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-600/30"
            >
              Explore AI Insights
              <ArrowUpRight size={17} />
            </button>
          </div>

          {/* Right AI Dashboard */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-indigo-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-7">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                      <Sparkles size={17} />
                    </div>

                    <span className="text-sm font-semibold text-white">
                      Career Analysis
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Software Engineer — Backend
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  Analyzed
                </span>
              </div>

              {/* Match Score */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Overall Match
                    </p>

                    <p className="mt-2 text-4xl font-bold text-white">
                      87%
                    </p>

                    <p className="mt-1 text-xs text-emerald-400">
                      Excellent opportunity match
                    </p>
                  </div>

                  {/* Circular score */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-indigo-500/20">
                    <div className="absolute inset-[-6px] rounded-full border-[6px] border-transparent border-t-indigo-500 border-r-indigo-500 rotate-[20deg]" />

                    <span className="text-sm font-semibold text-indigo-300">
                      Strong
                    </span>
                  </div>
                </div>
              </div>

              {/* Insight Cards */}
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {insights.map((insight) => {
                  const Icon = insight.icon;

                  return (
                    <div
                      key={insight.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          {insight.label}
                        </span>

                        <Icon
                          size={15}
                          className="text-indigo-400"
                        />
                      </div>

                      <p className="mt-3 text-xl font-bold text-white">
                        {insight.value}
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {insight.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* AI Recommendation */}
              <div className="mt-4 rounded-2xl border border-indigo-400/10 bg-indigo-500/[0.07] p-5">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={16}
                    className="text-indigo-400"
                  />

                  <span className="text-sm font-semibold text-white">
                    AI Recommendation
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Your profile is strong for this role. Focus on
                  strengthening your Spring Boot experience and adding
                  measurable project outcomes to increase your match score.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Confidence
                  </span>

                  <span className="text-xs font-semibold text-indigo-400">
                    94%
                  </span>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[94%] rounded-full bg-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}