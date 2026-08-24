import { RegisterForm } from "../../components/forms/auth/RegisterForm";

function Register() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-3 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:rounded-3xl lg:grid-cols-[0.9fr_1.1fr]">

          {/* Brand Panel */}
          <section className="relative overflow-hidden bg-slate-950 p-6 text-white sm:p-8 lg:flex lg:flex-col lg:justify-between lg:p-10">

            {/* Background glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"
              aria-hidden="true"
            />

            {/* Brand */}
            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold shadow-lg shadow-indigo-600/20">
                  CP
                </div>

                <span className="text-xl font-semibold tracking-tight">
                  CareerPilot{" "}
                  <span className="text-indigo-400">
                    AI
                  </span>
                </span>

              </div>

              {/* Message */}
              <div className="mt-10 max-w-sm sm:mt-14 lg:mt-20">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                  Career Intelligence
                </p>

                <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
                  Build your career
                  <br />
                  with intelligence.
                </h1>

                <p className="mt-6 text-sm leading-7 text-slate-300">
                  Create your CareerPilot AI profile and
                  discover personalized insights designed
                  around your career goals.
                </p>

              </div>

            </div>

            {/* Growth Card */}
            <div className="relative z-10 mt-8 sm:mt-10">

              {/* Graph */}
              <div className="relative hidden h-20 w-full sm:block sm:h-24 lg:h-28">

                <svg
                  viewBox="0 0 420 120"
                  className="h-full w-full overflow-visible"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 100 L75 70 L125 88 L180 55 L235 70 L290 32 L345 48 L410 10"
                    stroke="rgb(99 102 241)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.25"
                  />

                  <path
                    d="M10 100 L75 70 L125 88 L180 55 L235 70 L290 32 L345 48 L410 10"
                    stroke="rgb(129 140 248)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="10"
                    cy="100"
                    r="4"
                    fill="rgb(99 102 241)"
                  />

                  <circle
                    cx="75"
                    cy="70"
                    r="4"
                    fill="rgb(129 140 248)"
                  />

                  <circle
                    cx="125"
                    cy="88"
                    r="4"
                    fill="rgb(129 140 248)"
                  />

                  <circle
                    cx="180"
                    cy="55"
                    r="4"
                    fill="rgb(129 140 248)"
                  />

                  <circle
                    cx="235"
                    cy="70"
                    r="4"
                    fill="rgb(129 140 248)"
                  />

                  <circle
                    cx="290"
                    cy="32"
                    r="4"
                    fill="rgb(129 140 248)"
                  />

                  <circle
                    cx="345"
                    cy="48"
                    r="4"
                    fill="rgb(129 140 248)"
                  />

                  <circle
                    cx="410"
                    cy="10"
                    r="5"
                    fill="rgb(168 85 247)"
                  />
                </svg>

              </div>

              {/* Score Card */}
              <div className="rounded-2xl border border-white/10 bg-indigo-950/60 p-5 shadow-xl shadow-black/20 backdrop-blur-sm">

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Career Growth
                    </p>

                    <p className="mt-1 text-3xl font-bold tracking-tight">
                      92%
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Match Score
                    </p>
                  </div>

                  <div className="text-right">

                    <div className="mb-2 flex items-center justify-end gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />

                      <span className="text-xs font-medium text-emerald-400">
                        AI Powered
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">
                      Personalized insights
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Register Panel */}
          <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">

            <div className="w-full max-w-md">

              <div className="mb-8">

                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Create your account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Start your personalized career journey.
                </p>

              </div>

              <RegisterForm />

            </div>

          </section>

        </div>

      </div>
    </main>
  );
}

export default Register;