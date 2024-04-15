module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Georgia", "serif"],
            },
            boxShadow: {
                neon: "0 0 10px #888, 0 0 20px #888, 0 0 30px #888, 0 0 40px #888",
            },
        },
    },
    variants: {},
    plugins: [],
};
