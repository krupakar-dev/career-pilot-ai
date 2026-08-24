import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.578.688.48A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
            />
          </svg>
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