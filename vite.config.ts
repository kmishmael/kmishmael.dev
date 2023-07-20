import solid from "solid-start/vite";
import vercel from 'solid-start-vercel'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    solid({
      adapter: vercel(
        {
          prerender: {
            expiration: 60,
            bypassToken: "87734ad8259d67c3c11747d3e4e112d0",
          },
        }
      ),
    })],
});
