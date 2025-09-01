import { fontWeight } from "../typography/fontWeight";
import { lineHeight } from "../typography/lineHeight";
import { fontSize } from "../typography/fontSize";
import { letterSpacing } from "../typography/letterSpacing";

export const textStyles = {
  headlines: {
    h1: {
      desktop: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[56],
        lineHeight: lineHeight[62],
      },
      tablet: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[48],
        lineHeight: lineHeight[56],
      },
      mobile: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[40],
        lineHeight: lineHeight[48],
      },
    },
    h2: {
      desktop: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[48],
        lineHeight: lineHeight[56],
      },
      tablet: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[40],
        lineHeight: lineHeight[48],
      },
      mobile: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[34],
        lineHeight: lineHeight[42],
      },
    },
    h3: {
      desktop: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[40],
        lineHeight: lineHeight[48],
      },
      tablet: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[32],
        lineHeight: lineHeight[40],
      },
      mobile: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[26],
        lineHeight: lineHeight[34],
      },
    },
    subTitle1: {
      desktop: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[32],
        lineHeight: lineHeight[40],
      },
      tablet: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[24],
        lineHeight: lineHeight[32],
      },
      mobile: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[22],
        lineHeight: lineHeight[30],
      },
    },
    subTitle2: {
      desktop: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[24],
        lineHeight: lineHeight[30],
      },
      tablet: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[20],
        lineHeight: lineHeight[28],
      },
      mobile: {
        fontWeight: fontWeight.extraBold,
        fontSize: fontSize[20],
        lineHeight: lineHeight[28],
      },
    },
  },
  text: {
    XS: {
      regular: {
        fontWeight: fontWeight.regular,
        fontSize: fontSize[12],
        lineHeight: lineHeight[16],
      },
      bold: {
        fontWeight: fontWeight.bold,
        fontSize: fontSize[12],
        lineHeight: lineHeight[16],
      },
    },
    S: {
      regular: {
        fontWeight: fontWeight.regular,
        fontSize: fontSize[14],
        lineHeight: lineHeight[18],
      },
      bold: {
        fontWeight: fontWeight.bold,
        fontSize: fontSize[14],
        lineHeight: lineHeight[18],
      },
    },
    M: {
      regular: {
        fontWeight: fontWeight.regular,
        fontSize: fontSize[16],
        lineHeight: lineHeight[20],
      },
      bold: {
        fontWeight: fontWeight.bold,
        fontSize: fontSize[16],
        lineHeight: lineHeight[20],
      },
    },
    L: {
      regular: {
        fontWeight: fontWeight.regular,
        fontSize: fontSize[18],
        lineHeight: lineHeight[24],
      },
      bold: {
        fontWeight: fontWeight.bold,
        fontSize: fontSize[18],
        lineHeight: lineHeight[24],
      },
    },
  },
  btn: {
    S: {
      fontWeight: fontWeight.extraBold,
      fontSize: fontSize[14],
      lineHeight: lineHeight[16],
      letterSpacing: letterSpacing.wide,
    },
    M: {
      fontWeight: fontWeight.extraBold,
      fontSize: fontSize[16],
      lineHeight: lineHeight[18],
      letterSpacing: letterSpacing.wide,
    },
    L: {
      fontWeight: fontWeight.extraBold,
      fontSize: fontSize[18],
      lineHeight: lineHeight[20],
      letterSpacing: letterSpacing.wide,
    },
  },
};
