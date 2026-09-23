import { useState } from "react";
import type { SubmitEvent } from "react";

import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
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

  const [touched, setTouched] = useState<{
    email?: boolean;
    password?: boolean;
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
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setTouched({
      email: true,
      password: true,
    });

    if (!validate()) {
      return;
    }

    if (isLoading) {
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
            const value = event.target.value;

            setEmail(value);

            if (touched.email) {
              const newError = !value.trim()
                ? "Email address is required."
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ? "Please enter a valid email address."
                  : undefined;

              setErrors((previous) => ({
                ...previous,
                email: newError,
              }));
            }
          }}
          onBlur={() => {
            setTouched((previous) => ({
              ...previous,
              email: true,
            }));

            const value = email.trim();

            const newError = !value
              ? "Email address is required."
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? "Please enter a valid email address."
                : undefined;

            setErrors((previous) => ({
              ...previous,
              email: newError,
            }));
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
              const value = event.target.value;

              setPassword(value);

              if (touched.password) {
                const newError = !value
                  ? "Password is required."
                  : value.length < 6
                    ? "Password must be at least 6 characters."
                    : undefined;

                setErrors((previous) => ({
                  ...previous,
                  password: newError,
                }));
              }
            }}
            onBlur={() => {
              setTouched((previous) => ({
                ...previous,
                password: true,
              }));

              const newError = !password
                ? "Password is required."
                : password.length < 6
                  ? "Password must be at least 6 characters."
                  : undefined;

              setErrors((previous) => ({
                ...previous,
                password: newError,
              }));
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
      {/* ==================== SOCIAL LOGIN ==================== */}
<div className="grid grid-cols-3 gap-3">

  {/* Google */}
  <button
    type="button"
    className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50"
    aria-label="Continue with Google"
  >
    <FcGoogle className="h-5 w-5" />
  </button>

  {/* LinkedIn */}
  <button
    type="button"
    className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50"
    aria-label="Continue with LinkedIn"
  >
    <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />
  </button>

  {/* GitHub */}
  <button
    type="button"
    className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50"
    aria-label="Continue with GitHub"
  >
    <FaGithub className="h-5 w-5 text-slate-900" />
  </button>

</div>
      {/* ==================== REGISTER ==================== */}
      <p className="pt-3 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Register
        </Link>
      </p>

    </form>
  );
}