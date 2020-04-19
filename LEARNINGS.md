## Executables

This package is meant to be an executable. Naming it `@eyadkobatte/card` meant that when we do `npx @eyadkobatte/card`, npm will try to find card.js to execute. To overcome this, we have to specify the executable path in `package.json` using the `bin` field. Adding the `bin` field meant npm will then execute the file given in the `bin` path.

We also have to specify to the shell what the runtime environment would be. So adding a shebang to your node file tells the shell that this is a nodejs executable. So add this to the top of your node.js file `#!/usr/bin/env node`.

## ANSI colors

How colors work in terminals.
[This SO Answer](https://stackoverflow.com/a/41407246/5909625) helped me to understand how [chalk](https://www.npmjs.com/package/chalk) works and I basically replicated what it does using my own strings. This was only done to understand how terminal accepts strings and colors
