import {
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  ChartNoAxesCombined,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Job Match Intelligence",
    description:
      "Analyze job descriptions against your profile and understand how strongly your skills align with each opportunity.",
    label: "87% Match",
  },
  {
    icon: FileText,
    title: "AI Resume Insights",
    description:
      "Get intelligent recommendations to improve your resume based on the roles you want to pursue.",
    label: "AI Powered",
  },
  {
    icon: GraduationCap,
    title: "Skill Gap Analysis",
    description:
      "Discover the skills you are missing and understand what you should learn to become a stronger candidate.",
    label: "Personalized",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Career Analytics",
    description:
      "Track applications, monitor your progress, and turn your career journey into measurable insights.",
    label: "Track Progress",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            Built for your career
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Everything you need to move
            <span className="block text-indigo-600">
              your career forward
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            CareerPilot AI brings job analysis, resume intelligence, skill
            discovery, and career tracking together in one intelligent
            platform.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-indigo-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                  {/* Label */}
                  <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    {feature.label}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}