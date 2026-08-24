import { useState } from "react";
import type { SubmitEvent } from "react";

import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const validate = () => {
    const newErrors: {
      email?: string;
      password?: string;
    } = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    // Temporary frontend-only login simulation.
    // We will replace this with the Spring Boot API later.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Login submitted:", {
      email,
      password,
    });

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* ==================== EMAIL ==================== */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email address
        </label>

        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);

            if (errors.email) {
              setErrors((previous) => ({
                ...previous,
                email: undefined,
              }));
            }
          }}
        />

        {errors.email && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* ==================== PASSWORD ==================== */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);

              if (errors.password) {
                setErrors((previous) => ({
                  ...previous,
                  password: undefined,
                }));
              }
            }}
            className="pr-11"
          />

          {/* Password visibility */}
          <button
            type="button"
            onClick={() =>
              setShowPassword((previous) => !previous)
            }
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
          >
            {showPassword ? (
              <EyeOff size={19} />
            ) : (
              <Eye size={19} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.password}
          </p>
        )}
      </div>

      {/* ==================== REMEMBER + FORGOT ==================== */}
      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />

          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          Forgot password?
        </Link>
      </div>

      {/* ==================== LOGIN BUTTON ==================== */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Login"}
      </Button>

      {/* ==================== DIVIDER ==================== */}
      <div className="flex items-center gap-4 py-2">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-sm text-slate-400">
          or continue with
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* ==================== SOCIAL LOGIN ==================== */}
      <div className="grid grid-cols-3 gap-3">

        {/* Google */}
        <button
          type="button"
          className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50"
          aria-label="Continue with Google"
        >
          <span className="text-lg font-bold text-red-500">
            G
          </span>
        </button>

        {/* LinkedIn */}
        <button
          type="button"
          className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50"
          aria-label="Continue with LinkedIn"
        >
          <span className="text-lg font-bold text-blue-600">
            in
          </span>
        </button>

        {/* GitHub */}
        <button
          type="button"
          className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50"
          aria-label="Continue with GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-slate-900"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.578.688.48A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
          </svg>
        </button>
      </div>

      {/* ==================== REGISTER ==================== */}
      <p className="pt-3 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
        >
          Register
        </Link>
      </p>

    </form>
  );
}