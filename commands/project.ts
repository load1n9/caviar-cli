import {
  Confirm,
  Input,
  Number,
} from "https://deno.land/x/cliffy@v0.20.1/prompt/mod.ts";

import { createWorld } from "../structs/World.ts";
import { createScene } from "../structs/Scene.ts";

export const genProject = async () => {
  const name: string = await Input.prompt({
    message: "Project name: ",
  });
  const title: string = await Input.prompt({
    message: "Window title: ",
  });
  const width: number = await Number.prompt({
    message: "Window width: ",
  });
  const height: number = await Number.prompt({
    message: "Window height: ",
  });
  const resizable: boolean = await Confirm.prompt({
    message: "Window resizable: ",
  });
  const boot: string = createScene(name);
  const content = createWorld(name, title, width, height, resizable);
  await Deno.mkdir(`./${name}/src/scenes`, { recursive: true });
  await Deno.writeTextFile(`./${name}/src/scenes/Boot.ts`, boot);
  await Deno.writeTextFile(`./${name}/main.ts`, content);
};
