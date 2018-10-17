const fs = require("fs");
const path = require("path");

const allExports = [];

for (let i = 0; i < 200; i++) {
    const outFile = path.join(__dirname, "packages/a/src", `a${i}.ts`);
    const outStr = `export const a${i} = ${i};`;
    allExports.push(`export * from "./a${i}";`);
    fs.writeFileSync(outFile, outStr);
}

fs.writeFileSync(path.join(__dirname, "packages/a/src/index.ts"), allExports.join("\n"));
console.log("done");