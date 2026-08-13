import {
 
  Mail,
  Sparkles,
  
} from "lucide-react";
import { Link } from "react-router-dom";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Insights", href: "#insights" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const accountLinks = [
  { label: "Login", href: "/login" },
  { label: "Get Started", href: "/register" },
];

export function Footer() {
  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-sm">
                CP
              </div>

              <span className="text-lg font-semibold tracking-tight text-slate-900">
                CareerPilot{" "}
                <span className="text-indigo-600">AI</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              An AI-powered career intelligence platform that helps
              you understand your strengths, identify skill gaps, and
              make smarter career decisions.
            </p>

            {/* Social Links */}
            
<div className="mt-6 flex items-center gap-2">
  <a
    href="#"
    aria-label="GitHub"
    className="flex h-9 items-center justify-center rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
  >
    GitHub
  </a>

  <a
    href="#"
    aria-label="LinkedIn"
    className="flex h-9 items-center justify-center rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
  >
    LinkedIn
  </a>

  <a
    href="mailto:hello@careerpilot.ai"
    aria-label="Email"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
  >
    <Mail size={17} />
  </a>
</div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection(link.href.replace("#", ""))
                    }
                    className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Account
            </h3>

            <ul className="mt-5 space-y-3">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="mt-7 flex items-center gap-2 text-xs text-slate-400">
              <Sparkles
                size={14}
                className="text-indigo-500"
              />
              AI-powered career guidance
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} CareerPilot AI. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}