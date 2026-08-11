import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./components/ui/Card";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          CareerPilot AI — Card System
        </h1>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Default */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-slate-900">
                Default Card
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your career overview
              </p>
            </CardHeader>

            <CardContent>
              <p>
                Track your applications, resumes and career progress
                from one place.
              </p>
            </CardContent>

            <CardFooter>
              <span className="text-sm font-medium text-indigo-600">
                View Dashboard →
              </span>
            </CardFooter>
          </Card>

          {/* Interactive */}
          <Card variant="interactive" tabIndex={0}>
            <CardHeader>
              <h2 className="text-lg font-semibold text-slate-900">
                Interactive Card
              </h2>
            </CardHeader>

            <CardContent>
              <p>
                Hover over this card. It should feel responsive
                without being distracting.
              </p>
            </CardContent>
          </Card>

          {/* Highlight */}
          <Card variant="highlight">
            <CardHeader>
              <h2 className="text-lg font-semibold text-slate-900">
                AI Career Insight
              </h2>
            </CardHeader>

            <CardContent>
              <p>
                Your resume has an 87% match with this job description.
              </p>
            </CardContent>

            <CardFooter>
              <span className="text-sm font-semibold text-indigo-600">
                Analyze Match →
              </span>
            </CardFooter>
          </Card>

          {/* Flat */}
          <Card variant="flat">
            <CardHeader>
              <h2 className="text-lg font-semibold text-slate-900">
                Flat Card
              </h2>
            </CardHeader>

            <CardContent>
              <p>
                A clean card without unnecessary elevation.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
}

export default App;