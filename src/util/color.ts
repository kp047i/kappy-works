export const COLOR = {
  primary: "#4BB676",
  secondary: "#B6724B",
  main: "#3E4240",
  blackAlpha50: "rgba(0, 0, 0, 0.04)",
  blackAlpha100: "rgba(0, 0, 0, 0.06)",
  blackAlpha200: "rgba(0, 0, 0, 0.08)",
  blackAlpha300: "rgba(0, 0, 0, 0.16)",
  blackAlpha400: "rgba(0, 0, 0, 0.24)",
  blackAlpha500: "rgba(0, 0, 0, 0.36)",
  blackAlpha600: "rgba(0, 0, 0, 0.48)",
  blackAlpha700: "rgba(0, 0, 0, 0.64)",
  blackAlpha800: "rgba(0, 0, 0, 0.8)",
  blackAlpha900: "rgba(0, 0, 0, 0.92)",
} as const;

export type ColorKey = keyof typeof COLOR;

export const getColor = (key: ColorKey) => {
  return COLOR[key];
};
