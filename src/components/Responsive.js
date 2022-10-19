import { css } from 'styled-components'


export const breakpointMap = {
  xs: 370,
  sm: 576,
  md: 650,
  lg: 828,
  xl: 1200,
  xxl: 2000,
}

const breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`)

const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
}

export const Responsive = {
  xs: {
    standard: (args) => css`
      ${mediaQueries.xs} {
        ${css(args)};
      }
    `,
  },
  sm: {
    standard: (args) => css`
      ${mediaQueries.sm} {
        ${css(args)};
      }
    `,
  },
  md: {
    standard: (args) => css`
      ${mediaQueries.md} {
        ${css(args)};
      }
    `,
  },
  lg: {
    standard: (args) => css`
      ${mediaQueries.lg} {
        ${css(args)};
      }
    `,
  },
  xl: {
    standard: (args) => css`
      ${mediaQueries.xl} {
        ${css(args)};
      }
    `,
  },
  xxl: {
    standard: (args) => css`
      ${mediaQueries.xxl} {
        ${css(args)};
      }
    `,
  },
  nav: {
    standard: (args) => css`
      ${mediaQueries.nav} {
        ${css(args)};
      }
    `,
  },
}
