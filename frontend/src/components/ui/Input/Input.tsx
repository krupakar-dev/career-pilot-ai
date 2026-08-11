import { forwardRef, useId } from "react";
import type { InputProps } from "./Input.types";
import { cn } from "../../../utils/cn";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900",
              "placeholder:text-slate-400",
              "outline-none transition-all duration-200",
              "focus:ring-4",
              leftIcon ? "pl-10" : "",
rightIcon ? "pr-10" : "",

              hasError
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/10",

              disabled &&
                "cursor-not-allowed bg-slate-100 text-slate-400",

              className
            )}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-500"
          >
            {error}
          </p>
        )}

        {/* Helper text */}
        {!error && helperText && (
          <p
            id={`${inputId}-helper`}
            className="mt-2 text-sm text-slate-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;