import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ff6a00",
                "background-light": "#f8f7f5",
                "background-dark": "#120d0a",
            },
            fontFamily: {
                heading: ["var(--font-bebas)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            backgroundImage: {
                "basketball-texture": "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
