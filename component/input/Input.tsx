import React, { ComponentProps, ComponentPropsWithRef } from "react";
import { inputVariants, InputVariants } from "./inputVariant";

type InputProps = ComponentProps<"input"> &
  ComponentPropsWithRef<"input"> &
  InputVariants & {
    label?: string;
    variant?: "default";
  };

export const Input = ({ label, variant, className, ...props }: InputProps) => {
  return (
    <label>
      {label}
      <input
        {...props}
        type="text"
        className={inputVariants({ variant, className })}
      />
    </label>
  );
};
