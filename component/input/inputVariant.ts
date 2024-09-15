import { cva, type VariantProps } from "class-variance-authority";

import style from "./input.module.scss";

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputVariants = cva("", {
  variants: {
    variant: {
      default: style.default,
    },
  },
});
