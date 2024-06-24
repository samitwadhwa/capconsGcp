import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        cardGradient1:
          "linear-gradient(149.83deg, #AB001F 10.88%, #9F0C85 44.96%, #9AA6AD 83.65%);",
        cardGradient2:
          "linear-gradient(144.25deg, #274A76 10.88%, #3A7D98 77.09%);",
        cardGradient3:
          "linear-gradient(147.09deg, #792316 10.68%, #A07078 45.24%, #92737C 58.24%, #448790 83.89%);",
        cardGradient4:
          "linear-gradient(147.26deg, #D5D5DA 13%, #B2C8D4 45.27%, #69A6C1 85.26%);",
        cardGradient5:
          "linear-gradient(147.26deg, #8B9EA5 13%, #BDAE90 45.27%, #BD8758 85.26%);",
        cardGradient6:
          "linear-gradient(147.26deg, #D1DCDC 13%, #E1EAE7 45.27%, #95CDD2 85.26%);",
        formimage:
          "url('https://s3-alpha-sig.figma.com/img/f9a3/52ae/9cca01dcc236aeaaae9f4f148230e0c9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWrPCHBCQerinpB6pxf6KK9pm0BVV5EFhudMKIqrTvUjAq3OoYALc4~KfRoExiBB~1uONcToivmQ63ODUor7ehFWhAjEOLFzTjYWqCJrZI8tgOCWu6zEPJVa5ugr7NQpFcLlnhTo6BjFLTRbz1zO~tR~Vj2dEn~3b6R915RramOFcC1t8rxXemMNXpJFxS2VoFtFQqRaCwYVzKIUAwCPaE~Wf3R5EmFQ~KBvMGNueyLKBbCQDigzkQ9oXxLv-FYYQnbapAeC59fq9EB0ZAriAtfgfqNC77ltLYoPTmtHyWtc~2u4e41pkmerEsicuWzJki-wdyGdBxHcxyuGcmxM-w__')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "18rem": "18rem",
        "25rem": "25rem",
        "20rem": "20rem",
        "16rem": "16rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
