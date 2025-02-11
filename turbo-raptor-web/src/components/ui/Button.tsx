import * as React from "react";
import clsx from "clsx";

// Define allowed variants and sizes
type Variant = "default" | "outline";
type Size = "sm" | "md" | "lg";

// Define ButtonProps with proper typing
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

// Define button styles
const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition";
const variantStyles: Record<Variant, string> = {
  default: "bg-blue-500 text-white hover:bg-blue-600",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
} as const;
const sizeStyles: Record<Size, string> = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-3",
} as const;

// Forward ref with proper typing
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref: any) => {
    const variantClass = variantStyles[variant as Variant]; // ✅ Explicitly cast to `Variant`
    const sizeClass = sizeStyles[size as Size]; // ✅ Explicitly cast to `Size`

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>} // ✅ Properly type `ref`
        className={clsx(baseStyles, variantClass, sizeClass, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
