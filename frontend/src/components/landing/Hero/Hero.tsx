import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />

        <div className="absolute -right-32 top-64 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="mb-6">
              <Badge variant="info" size="md">
                <Sparkles size={14} />
                AI-Powered Career Intelligence
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Navigate Your Career{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                with AI
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Understand your job-market fit, identify skill gaps, optimize
              your resume, and make smarter career decisions with personalized
              AI-powered insights.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  window.location.href = "/register";
                }}
              >
                Get Started
                <ArrowRight size={18} />
              </Button>

              <a href="#features">
                <Button
  variant="secondary"
  size="lg"
  className="w-full sm:w-auto"
  onClick={() => {
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Explore Features
</Button>
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-emerald-500"
                />
                Personalized insights
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-emerald-500"
                />
                Explainable AI
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-emerald-500"
                />
                Career tracking
              </div>
            </div>
          </div>

          {/* Right Intelligence Preview */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-indigo-500/10 blur-2xl" />

            {/* Main card */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-2xl shadow-slate-300/40 backdrop-blur-xl sm:p-6">

              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Career Intelligence
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-900">
                    Job Match Analysis
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <TrendingUp size={20} />
                </div>
              </div>

              {/* Match Score */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      Overall Match
                    </p>

                    <p className="mt-1 text-4xl font-bold tracking-tight text-slate-950">
                      87%
                    </p>
                  </div>

                  <Badge variant="success" size="md">
                    Strong Match
                  </Badge>
                </div>

                {/* Progress */}
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                </div>
              </div>

              {/* Skills */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Skill Alignment
                  </h3>

                  <span className="text-xs text-slate-400">
                    AI analysis
                  </span>
                </div>

                <div className="mt-4 space-y-4">

                  {/* Java */}
                  <SkillRow
                    name="Java"
                    score="92%"
                    width="92%"
                  />

                  {/* Spring Boot */}
                  <SkillRow
                    name="Spring Boot"
                    score="88%"
                    width="88%"
                  />

                  {/* React */}
                  <SkillRow
                    name="React"
                    score="81%"
                    width="81%"
                  />
                </div>
              </div>

              {/* Insight */}
              <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <Sparkles size={16} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      AI Recommendation
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Strengthen your Spring Security knowledge to improve
                      your match score for this role.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-300/30 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={16} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Resume analyzed
                  </p>

                  <p className="text-[11px] text-slate-500">
                    12 insights generated
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Skill Row                          */
/* ---------------------------------- */

interface SkillRowProps {
  name: string;
  score: string;
  width: string;
}

function SkillRow({ name, score, width }: SkillRowProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">
          {name}
        </span>

        <span className="text-xs font-semibold text-slate-500">
          {score}
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width }}
        />
      </div>
    </div>
  );
}