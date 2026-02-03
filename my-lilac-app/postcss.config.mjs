/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // This uses the new package
    autoprefixer: {},
  },
};

export default config;