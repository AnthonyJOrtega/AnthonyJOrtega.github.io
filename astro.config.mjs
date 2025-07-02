import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  base: "/", // O usa /NOMBRE-DE-TU-REPO/ si NO estás usando un repo tipo usuario
});


//If you don't have vercel the configuration will be empty

//ej : export default defineConfig({});
