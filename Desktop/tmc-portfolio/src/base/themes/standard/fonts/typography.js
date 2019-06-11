import { css } from 'styled-components'

import fonts from './fonts'
import fontSizes from './fontSizes'
import mediaQueries from '../layout/breakpoints'

const typography = {
  // Headings
  headingXXLarge: css`
    ${fonts.headingLight};
    line-height: 1.2;
    ${fontSizes.size6};
    
    ${mediaQueries.md} {
      ${fontSizes.size7};
    };
  `,
  headingXLarge: css`
    ${fonts.headingLight};
    ${fontSizes.size4};
    line-height: 1.2;

    ${mediaQueries.md} {
      ${fontSizes.size5};
    };
  `,
  headingLarge: css`
    ${fonts.headingLight};
    ${fontSizes.size3};
    line-height: 1.3;

    ${mediaQueries.md} {
      ${fontSizes.size4};
    };
  `,
  headingMedium: css`
    ${fonts.headingLight};
    ${fontSizes.size2};
    line-height: 1.3;

    ${mediaQueries.md} {
      ${fontSizes.size3};
    };
  `,
  headingSmall: css`
    ${fonts.headingRegular};
    ${fontSizes.size1};
    line-height: 1.3;

    ${mediaQueries.md} {
      ${fontSizes.size2};
    };
  `,
  headingXSmall: css`
    ${fonts.headingRegular};
    ${fontSizes.size1};
    line-height: 1.3;
  `,
  headingXXSmall: css`
    ${fonts.headingRegular};
    ${fontSizes.size0};
    letter-spacing: 1px;
    line-height: 1.4;
    text-transform: uppercase;
  `,

  // Body
  bodyLarge: css`
    ${fonts.primaryRegular};
    ${fontSizes.size1};
    line-height: 1.6;

    ${mediaQueries.md} {
      ${fontSizes.size2};
    };
  `,
  body: css`
    ${fonts.primaryRegular};
    ${fontSizes.size0p5};
    line-height: 1.6;

    ${mediaQueries.md} {
      ${fontSizes.size1};
    };
  `,
  bodySmall: css`
    ${fonts.primaryRegular};
    ${fontSizes.size0};

    ${mediaQueries.md} {
      ${fontSizes.size0p5};
    };
  `,
  finePrint: css`
    ${fonts.primaryRegular};
    ${fontSizes.size0};
    line-height: 1.6;
  `,
};

export default typography