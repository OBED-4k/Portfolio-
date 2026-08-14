import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "primaryWBorder" | "secondary" | "outline";
  width?: string;
  disabled?: boolean;
};

export default function Button({
  className,
  children,
  type,
  onClick,
  variant = "primary",
  width = "w-full",
  disabled,
}: Props) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 h-12 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50";

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary: "...",
    primaryWBorder: "...",
    secondary: "...",
    outline: "...",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${width} ${className ?? ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
