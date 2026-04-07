import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    server: {
        host: '0.0.0.0', // importante pro setup remoto
        port: 3000,
        open: false, // evita erro do xdg-open
        allowedHosts: [
            'lnm-engenharia-website.dev.local',
            'www.lnm-engenharia-website.dev.local'
        ],
    },
});