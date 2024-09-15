import React, { ComponentProps, ComponentPropsWithRef } from "react";
import { buttonVariants, ButtonVariants } from "./buttonVariant";

type ButtonPorops = ComponentProps<"button"> &
  ComponentPropsWithRef<"button"> &
  ButtonVariants & {
    variant?: "primary" | "secondary";
    children?: React.ReactNode;
  };

export const Button = ({
  variant,
  className,
  children,
  ...props
}: ButtonPorops) => {
  return (
    <button {...props} className={buttonVariants({ variant, className })}>
      {children}
    </button>
  );
};
