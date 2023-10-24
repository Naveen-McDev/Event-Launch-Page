// creating a framwork array - read only
export const frameworks = [
  "react",
  "chrome",
  "qwik",
  "mobile",
  "tailwind",
  "desktop",
  "vue",
  "safari",
  "svelte",
] as const;

// creating a type Framework
export type Framework = (typeof frameworks)[number];
