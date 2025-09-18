import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(
        //     {
        //     safelist: [
        //         "text-[black]",
        //         "text-[white]",
        //         "bg-[red]",
        //         "bg-[blue]",
        //         "bg-[grey]",
        //         "rounded-[8px]",
        //         "rounded-[20px]",
        //     ],
        // }
        ),
    ],
})
