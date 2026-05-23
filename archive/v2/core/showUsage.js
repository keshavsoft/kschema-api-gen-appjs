/*
KSchema CLI – Entry Flow

1. Read user input from terminal (parseInput)
2. If no command → show usage (first-time user safety)
3. If help flags → show usage (quick guidance)
4. Resolve command dynamically (no hardcoding logic)
5. If command not found → inform + guide back to usage
6. Execute command with parsed input

Goal:
- Zero confusion for user
- Single source of truth (showUsage)
- Easy to extend (just add commands, no core changes)
*/

export default function showUsage(version) {
    const g = "\x1b[32m";
    const y = "\x1b[33m";
    const c = "\x1b[36m";
    const gray = "\x1b[90m";
    const r = "\x1b[0m";

    console.log(`
${c}🚀 KSchema CLI v${version}${r}

${y}Usage:${r}
  ${g}npx @keshavsoft/kschema-api-gen${r} <command> [options]

${y}Commands:${r}
  ${g}StartEndPoint${r}     Initialize a new folder and files
  ${g}express${r}           Initialize a new express project
  ${g}tally${r}             Initialize a new tally project
  ${g}generate-samples${r}  Generate sample schema files

${y}Examples:${r}
  ${gray}npx @keshavsoft/kschema-api-gen StartEndPoint${r}
  ${gray}npx @keshavsoft/kschema-cli test users${r}

${y}Tip:${r}
  ${gray}npm i -g @keshavsoft/kschema-api-gen${r}
`);
}