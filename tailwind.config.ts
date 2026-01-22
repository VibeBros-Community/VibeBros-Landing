import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
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
                "baltic-blue": {
                    50: "#ecf3f9",
                    100: "#d8e7f3",
                    200: "#b2cfe6",
                    300: "#8bb8da",
                    400: "#65a0cd",
                    500: "#3e88c1",
                    600: "#326d9a",
                    700: "#255274",
                    800: "#19364d",
                    900: "#0c1b27",
                    950: "#09131b",
                },
                "cerulean": {
                    50: "#ecf4f8",
                    100: "#d9e8f2",
                    200: "#b4d2e4",
                    300: "#8ebbd7",
                    400: "#68a4ca",
                    500: "#428ebd",
                    600: "#357197",
                    700: "#285571",
                    800: "#1b394b",
                    900: "#0d1c26",
                    950: "#09141a",
                },
                "alabaster-grey": {
                    50: "#f2f3f1",
                    100: "#e6e8e3",
                    200: "#ccd0c8",
                    300: "#b3b9ac",
                    400: "#99a191",
                    500: "#808a75",
                    600: "#666e5e",
                    700: "#4d5346",
                    800: "#33372f",
                    900: "#1a1c17",
                    950: "#121310",
                },
                "yale-blue": {
                    50: "#eaf4fa",
                    100: "#d6eaf5",
                    200: "#add4eb",
                    300: "#84bfe1",
                    400: "#5baad7",
                    500: "#3294cd",
                    600: "#2877a4",
                    700: "#1e597b",
                    800: "#143b52",
                    900: "#0a1e29",
                    950: "#07151d",
                },
                "sky-blue": {
                    50: "#ecf6f9",
                    100: "#d8edf3",
                    200: "#b1dae7",
                    300: "#8bc8da",
                    400: "#64b5ce",
                    500: "#3da3c2",
                    600: "#31829b",
                    700: "#256274",
                    800: "#18414e",
                    900: "#0c2127",
                    950: "#09171b",
                },
            },
            fontFamily: {
                sans: ["var(--font-sans)", "sans-serif"],
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
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in-up": "fade-in-up 0.5s ease-out forwards",
                "float": "float 3s ease-in-out infinite",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
