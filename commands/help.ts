export const genHelp = () => {
    console.log(`
    Usage: caviar [command] [options]
    
    Commands:
        generate [type] 
        help
    
    Options:
        project   generates a new project 
        plugin    generates a new plugin
        scene    generates a new scene
`);
}