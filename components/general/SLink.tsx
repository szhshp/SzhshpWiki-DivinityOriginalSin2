/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { globalLinkStyle } from "styles/theme";
import clsx from "clsx";
import { useRouter } from "next/router";

export interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  href?: NextLinkProps["href"];
}

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;
const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>((props, ref) => {
  const {
    to,
    linkAs,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    locale,
    ...other
  } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextLinkComposed.displayName = "SLink";

/**
 * @name SLink
 * @description A styled version of the Next.js Link component
 * @see https://nextjs.org/docs/#with-link
 */
export const SLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const {
      activeClassName = "active",
      as: linkAs,
      className: classNameProps,
      href,
      noLinkStyle,
      role, // Link don't have roles.
      ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx(classNameProps, {
      [activeClassName]: router.pathname === pathname && activeClassName,
    });

    const isExternal =
      typeof href === "string" &&
      (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

    if (isExternal) {
      if (noLinkStyle) {
        return (
          <a
            className={className}
            href={href as string}
            ref={ref as any}
            sx={globalLinkStyle}
            {...other}
          />
        );
      }

      return (
        <MuiLink
          underline="none"
          className={className}
          sx={globalLinkStyle}
          href={href as string}
          ref={ref}
          {...other}
        />
      );
    }

    if (noLinkStyle) {
      return (
        <NextLinkComposed
          className={className}
          sx={globalLinkStyle}
          ref={ref as any}
          to={href}
          {...other}
        />
      );
    }

    return (
      <MuiLink
        underline="none"
        component={NextLinkComposed}
        linkAs={linkAs}
        sx={globalLinkStyle}
        className={className}
        ref={ref}
        to={href}
        {...other}
      />
    );
  }
);
