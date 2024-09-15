import { ComponentPropsWithRef } from "react";
import { typographyVariants, TypographyVariants } from "./typographyVariants";

type TypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "span"
  | "label"
  | "div";

type TypographyProps<T extends TypographyTag> = React.ComponentProps<T> &
  TypographyVariants &
  ComponentPropsWithRef<T> & {
    variant?: "link" | "med_14" | "med_48_117";
    color?: "opasity" | "dark";
    tag?: TypographyTag;
    children: React.ReactNode;
    onClick?: () => void;
  };

export const Typography = <T extends TypographyTag = "p">({
  tag = "p",
  children,
  variant,
  className,
  color = "dark",
  onClick,
}: TypographyProps<T>) => {
  const Component = tag;
  return (
    <Component
      onClick={onClick}
      className={typographyVariants({ variant, color, className })}
    >
      {children}
    </Component>
  );
};
