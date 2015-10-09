# Typescript Visual Studio GulpFile

Example gulpfile that works with Visual Studios typescript build step with gulp

* Uses the sourcemaps generated by Visual Studio

* Bundles together packages automatically

* Updates debug-page automatically

I use the ASP.NET 5 "empty" project type instead of the "HTML Typescript Project" because it automatically adds all files to the project, automatically hides node_modules, neatly puts together .ts files with their .js files, and is easy to expand into a website if needed.

Note that I didn't use Karma for testing b/c with karma you need to add a karma config file as well as another extension to get sourcemaps working, and we're using browser sync so I just ended up using jasmine specrunner here since it's easier / one less server we need to have running.

### Steps to integrate into an existing project:

1. Copy over parts of the gulpfile you want

2. Edit "auto-pack-files" to choose the files you want to pack

3. add the needed packages to your packages.json and run "npm install"

4. Ensure sourcemaps are enabled in your tsconfig.json file


### Steps to import a package once everything is set up (for example, Q):

1. npm install q

2. tsd install q

3. in your code, import with "import Q = require("q")"



_You might have to add a "/// <reference path="../typings/q/q.d.ts" />" .d.ts reference if visual studio doesn't detect the definition file (it usually does, it just takes a couple seconds.)_

_If you get a "Cannot find name 'require'" error, add "declare var require;" somewhere in your code._
