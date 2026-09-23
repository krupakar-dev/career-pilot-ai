import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";
export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!acceptedTerms) {
      newErrors.terms =
        "Please accept the Terms and Privacy Policy.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: React.SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    // Temporary frontend-only registration simulation.
    // We will connect this to Spring Boot later.

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    console.log("Registration submitted:", {
      name,
      email,
      password,
    });

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Full name
        </label>

        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);

            if (errors.name) {
              setErrors((previous) => ({
                ...previous,
                name: undefined,
              }));
            }
          }}
        />

        {errors.name && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="register-email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email address
        </label>

        <Input
          id="register-email"
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

      {/* Password */}
      <div>
        <label
          htmlFor="register-password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <div className="relative">
          <Input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
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

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                (previous) => !previous
              )
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

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirm-password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Confirm password
        </label>

        <div className="relative">
          <Input
            id="confirm-password"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(
                event.target.value
              );

              if (errors.confirmPassword) {
                setErrors((previous) => ({
                  ...previous,
                  confirmPassword: undefined,
                }));
              }
            }}
            className="pr-11"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                (previous) => !previous
              )
            }
            aria-label={
              showConfirmPassword
                ? "Hide password"
                : "Show password"
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
          >
            {showConfirmPassword ? (
              <EyeOff size={19} />
            ) : (
              <Eye size={19} />
            )}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Terms */}
      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) => {
              setAcceptedTerms(
                event.target.checked
              );

              if (event.target.checked) {
                setErrors((previous) => ({
                  ...previous,
                  terms: undefined,
                }));
              }
            }}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />

          <span>
            I agree to the{" "}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Privacy Policy
            </button>
          </span>
        </label>

        {errors.terms && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.terms}
          </p>
        )}
      </div>

      {/* Register Button */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading
          ? "Creating account..."
          : "Create account"}
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-4 py-1">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-sm text-slate-400">
          or continue with
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Social Registration */}
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

      {/* Login Link */}
      <p className="pt-2 text-center text-sm text-slate-500">
        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
        >
          Login
        </Link>
      </p>

    </form>
  );
}