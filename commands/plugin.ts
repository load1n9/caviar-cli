import { Input } from "https://deno.land/x/cliffy@v0.20.1/prompt/mod.ts";
export const genPlugin = async () => {
  const name: string = await Input.prompt({
    message: "Plugin name: ",
  });
  const content = 
`import { World, Plugin } from 'https://deno.land/x/caviar/mod.ts';

export class ${name} extends Plugin {
    constructor(world: World) {
        super(world);
    }
}`;
  try {
    await Deno.mkdir("src/plugins", { recursive: true });
    // deno-lint-ignore no-empty
  } catch  {}
  await Deno.writeTextFile(`./src/plugins/${name}.ts`, content);
};
