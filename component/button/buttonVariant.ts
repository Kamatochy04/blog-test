import { cva, type VariantProps } from "class-variance-authority";

import style from "./button.module.scss";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: style.primary,
      secondary: style.secondary,
    },
  },
});
