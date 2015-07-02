# ReactJS Boilerplate for TypeScript

TypeScript will official support JSX. Currently you will need to manually compile the typescript compiler
from the master branch or use the nightly typescript npm package.

You can install using the following command line. This will not override the default typescript compiler.
You can continue to use the default compiler use `tsc`. For nightly typescript compiler use `ntsc`.

```bash
npm install -g ntypescript
```

## Compiling tsx to js

```bash
cd src
ntsc
```

If you want to watch for file changes use `ntsc -w`.

## Starting the http-server

From the root type the following.

```bash
npm install -g http-server
http-server
```

Browse http://localhost:8080
