import { VERSION } from "../version.ts";

export const createWorld = (
    name: string,
    title: string,
    width: number,
    height: number,
    resizable: boolean,
) => 
`import { World } from "https://deno.land/x/caviar@${VERSION}/mod.ts";
import { Boot } from './src/scenes/Boot.ts';

const ${name} = new World({
    title: "${title}",
    width: ${width},
    height: ${height},
    resizable: ${resizable},
}, [Boot]);
await ${name}.start();`;