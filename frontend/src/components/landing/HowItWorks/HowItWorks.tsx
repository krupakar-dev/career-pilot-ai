import {
  UserRound,
  Search,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Build Your Profile",
    description:
      "Create your career profile with your skills, experience, projects, education, and career goals.",
  },
  {
    number: "02",
    icon: Search,
    title: "Analyze Opportunities",
    description:
      "Add a job description and let CareerPilot AI analyze how well your profile matches the opportunity.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Get AI Insights",
    description:
      "Discover skill gaps, understand your strengths, and receive personalized recommendations to improve your profile.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Track applications, monitor your progress, and turn your career journey into measurable insights.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            From career confusion to{" "}
            <span className="text-indigo-600">clear direction</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            CareerPilot AI turns your career journey into a simple,
            intelligent, and actionable process.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(100%+8px)] top-12 hidden w-4 lg:block">
                    <ArrowRight
                      size={18}
                      className="text-indigo-200"
                    />
                  </div>
                )}

                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-indigo-600">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon size={21} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}