/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-bg-1': "url('/images/bg-1.jpeg')",
        'img-bg-2': "url('/images/bg-2.jpeg')",
        'img-bg-3': "url('/images/bg-3.jpeg')",
        'img-bg-4': "url('/images/bg-4.jpeg')",
        'img-bg-5': "url('/images/bg-5.jpeg')",
        'img-bg-6': "url('/images/bg-6.jpeg')",
        'img-bg-7': "url('/images/bg-7.jpeg')",
        'img-bg-8': "url('/images/bg-8.jpeg')",
        'img-bg-9': "url('/images/bg-9.jpeg')",
        'img-bg-10': "url('/images/bg-10.jpeg')",
      },
    },
  },
  plugins: [],
};
