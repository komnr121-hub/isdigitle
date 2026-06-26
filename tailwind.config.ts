import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary palette
        obsidian: '#0A0A0F',
        'deep-space': '#0D0D1A',
        'void': '#060608',
        // Accent
        'electric': '#6C63FF',
        'electric-dim': '#4D46CC',
        'electric-glow': '#8B85FF',
        'plasma': '#00D4FF',
        'plasma-dim': '#0099BB',
        // Neutrals
        'ash': '#1A1A2E',
        'slate-night': '#16213E',
        'mist': '#8892A4',
        'silver': '#C4CDD6',
        'snow': '#F0F4F8',
        // Gold accent
        'gold': '#F4C542',
        'gold-dim': '#C99C2A',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-body)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'electric-gradient': 'linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0F 0%, #0D0D1A 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(108,99,255,0.08) 0%, rgba(0,212,255,0.04) 100%)',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(108,99,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.1) 0%, transparent 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px rgba(108,99,255,0.3), 0 0 20px rgba(108,99,255,0.1)' },
          'to': { boxShadow: '0 0 20px rgba(108,99,255,0.6), 0 0 40px rgba(108,99,255,0.2)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'electric': '0 0 30px rgba(108,99,255,0.3)',
        'plasma': '0 0 30px rgba(0,212,255,0.3)',
        'card': '0 4px 40px rgba(0,0,0,0.4)',
        'glow-sm': '0 0 10px rgba(108,99,255,0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
export default config
