import { VERSION } from "../version.ts";

export const createScene = (name: string) => 
`import { Scene } from "https://deno.land/x/caviar@${VERSION}/mod.ts";

export class ${name} extends Scene {
    public setup() {

    }
    public update() {

    }
}`;