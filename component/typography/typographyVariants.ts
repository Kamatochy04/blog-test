import { cva, type VariantProps } from "class-variance-authority";

import styles from "./typography.module.scss";

export type TypographyVariants = VariantProps<typeof typographyVariants>;

export const typographyVariants = cva(styles.text, {
  variants: {
    variant: {
      link: styles.link,
      med_14: styles.med_14,
      med_48_117: styles.med_48_117,
    },
    color: {
      opasity: styles.opasity,
      dark: styles.dark,
    },
  },
});
