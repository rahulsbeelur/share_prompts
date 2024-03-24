import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        screens: {
            desktop: {
                min: process.env.NEXT_PUBLIC_BLOG_PAGE_PRESENT === 'on' ? '1111px' : '1078px'
            },
            tablet: {
                max: process.env.NEXT_PUBLIC_BLOG_PAGE_PRESENT === 'on' ? '1111px' : '1078px',
                min: process.env.NEXT_PUBLIC_BLOG_PAGE_PRESENT === 'on' ? '717px' : '700px'
            },
            mobile: { max: process.env.NEXT_PUBLIC_BLOG_PAGE_PRESENT === 'on' ? '717px' : '700px' }
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: []
};
export default config;
