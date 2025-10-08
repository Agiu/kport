/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
safelist: [
  'dark:via-red-600',
  'dark:to-red-600',
  'dark:from-red-600',
  'dark:via-blue-600',
  'dark:to-blue-600',
  'dark:from-blue-600',
  'dark:via-zinc-950',
  'dark:to-zinc-950',
  'dark:from-zinc-950',
  'dark:bg-red-950',
  'dark:via-green-500',
  'dark:to-green-500',
  'dark:from-green-500',
  'dark:bg-neutral-800',
  'dark:via-rose-500',
  'dark:to-rose-500',
  'dark:from-rose-500',
],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
