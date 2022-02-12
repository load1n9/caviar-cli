import { genHelp } from "./commands/help.ts";
import { genPlugin } from "./commands/plugin.ts";
import { genProject } from "./commands/project.ts";
import { genScene } from "./commands/scene.ts";


switch(Deno.args[0]) {
    case "generate": {
        if (Deno.args[1] === "plugin") {
            await genPlugin();
        } else if (Deno.args[1] === "scene") {
            await genScene();
        } else {
            await genProject()
        }
        break;
    }
    default: {
        genHelp();
        break;
    }
}