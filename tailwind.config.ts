/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                xs: [
                    '0.6rem',
                    {
                        lineHeight: '0.8rem'
                    }
                ],
                sm: [
                    '0.7rem',
                    {
                        lineHeight: '1.05rem'
                    }
                ],
                base: [
                    '0.9rem',
                    {
                        lineHeight: '1.35rem'
                    }
                ],
                lg: [
                    '1rem',
                    {
                        lineHeight: '1.45rem'
                    }
                ],
                xl: [
                    '1.2rem',
                    {
                        lineHeight: '1.75rem'
                    }
                ],
                '2xl': [
                    '1.4rem',
                    {
                        lineHeight: '1.8rem'
                    }
                ]
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                status: {
                    active: {
                        DEFAULT: 'hsl(var(--active-green))',
                        foreground: 'hsl(var(--active-green-foreground))'
                    },
                    inactive: {
                        DEFAULT: 'hsl(var(--inactive-red))',
                        foreground: 'hsl(var(--inactive-red-foreground))'
                    },
                    caution: {
                        DEFAULT: 'hsl(var(--caution))',
                        foreground: 'hsl(var(--caution-foreground))'
                    }
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            scrollbar: {
                hide: {
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    '&': {
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none'
                    }
                }
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                bubbleRise: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(-100%)', opacity: '1' },
                },
                lightRay: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                bounceCustom: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-40px)' },
                },
                rise: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            animation: {
                float: 'float 4s ease-in-out infinite',
                bubble: 'bubbleRise 10s linear infinite',
                ray: 'lightRay 30s linear infinite',
                'bounce-custom': 'bounceCustom 2s ease-in-out infinite',
                'rise-slow': 'rise 1.5s ease-out forwards',
            },
            zIndex: {
                '-10': '-10',
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100'
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            opacity: {
                '15': '0.15'
            }

        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],

};
export default config;
