import { Input } from "https://deno.land/x/cliffy@v0.20.1/prompt/mod.ts";
import { createScene } from "../structs/Scene.ts";
export const genScene = async () => {
  const name: string = await Input.prompt({
    message: "Scene name: ",
  });
  const content = createScene(name);
  await Deno.writeTextFile(`./src/plugins/${name}.ts`, content);
};
