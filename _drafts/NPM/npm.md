
#What?



# How?

## Use

[install command](https://docs.npmjs.com/cli/install)

    npm install [-g] <package_name> --[param]

* Local install (default): puts stuff in ./node_modules of the current package root.
* Global install (with -g): puts stuff in /usr/local or wherever node is installed.
* Install it locally if you're going to require() it.
* Install it globally if you're going to run it on the command line.
* If you need both, then install it in both places, or use npm link.

>When in global mode, executables are linked into {prefix}/bin on Unix, or directly into {prefix} on Windows.When in local mode, executables are linked into ./node_modules/.bin so that they can be made available to scripts run through npm. (For example, so that a test runner will be in the path when you run npm test.) On install, npm will symlink that file into prefix/bin for global installs, or ./node_modules/.bin/ for local installs.

## Create

If there is no description field in the package.json, npm uses the first line of the README.md or README instead. The description helps people find your package on npm search, so it's definitely useful to make a custom description in the package.json to make your package more discoverable.

    [package.json describe](https://docs.npmjs.com/files/package.json)

### "bin"

    "bin" : { "myapp" : "./cli.js" }
    "bin" : "./cli.js" // default command is package name
    "bin" : "./path/to/cli" 

>So, when you install myapp, it'll create a symlink from the cli.js script to /usr/local/bin/myapp.To use this, supply a bin field in your package.json which is a map of command name to local file name. 

## Publish/Update

    npm publish
    // After updating the version number, you can npm publish again.
    npm version <update_type> // patch, minor, or major 

>This command will change the version number in package.json. Note that this will also add a tag with this release number to your git repository if you have one.

## Remark

  1. version

  * If a project is going to be shared with others, it should start at 1.0.0, though some projects on npm don't follow this rule.
  * Patch releases: 1.0 or 1.0.x or ~1.0.4 / Bug fixes and other minor changes: Patch release, increment the last number, e.g. 1.0.1
  * Minor releases: 1 or 1.x or ^1.0.4 / New features which don't break existing features: Minor release, increment the middle number, e.g. 1.1.0
  * Major releases: * or x / Changes which break backwards compatibility: Major release, increment the first number, e.g. 2.0.0
