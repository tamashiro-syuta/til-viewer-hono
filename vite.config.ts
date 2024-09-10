// import ssg from "@hono/vite-ssg";
// import { defineConfig } from "vite";

// const entry = "src/index.tsx";

// export default defineConfig({
//   plugins: [ssg({ entry })],
// });

import { defineConfig } from "vite";
import ssg from "@hono/vite-ssg"; // 追加
import devServer from "@hono/vite-dev-server";

const entry = "src/index.tsx";

export default defineConfig(() => {
  return {
    plugins: [devServer({ entry }), ssg({ entry })], // ssg({entry})を追加
  };
});
