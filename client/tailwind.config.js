import { Flowbite } from 'flowbite-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    Flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [Flowbite.plugins(),],
}

