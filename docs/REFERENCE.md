# Reference Materials

Reference materials & notes made during the creation of this app.

### Flow
See: https://medium.com/react-native-training/getting-started-with-react-native-and-flow-d40f55746809

> Using the Flow server
> For a large project, you probably only want Flow to recheck files incrementally when they change. Flow uses a client/server architecture which allows you to start a Flow server that will run in the background and type check files as they change.

Flow installed locally with `yarn add flow-bin@0.38.0 --dev`

Edited *package.json* scripts with the following lines:

```
"flow": "node_modules/.bin/flow",
"flow-stop": "node_modules/.bin/flow stop",
```

Now the flow server can be started with `npm run flow` and stopped with `npm run flow-stop`.


### GitHub / git

#### git add

`git add` does not add empty directories. There's an excellent discussion of this on stack exchange: http://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository/21422128#21422128

The solution I chose to use is to add a `.keep` file in each directory with `touch .keep`. In the future, it'd be nice to automate this, as I see directory structure being an important part of the project even if there's nothing in there yet.

Here's a dump of my command line interactions that led to this:
```
➜  app git:(restructuring) git status
On branch restructuring
Your branch is up-to-date with 'origin/restructuring'.
nothing to commit, working tree clean
➜  app git:(restructuring) git add -vn .
➜  app git:(restructuring) git add .
➜  app git:(restructuring) git status
On branch restructuring
Your branch is up-to-date with 'origin/restructuring'.
nothing to commit, working tree clean
➜  app git:(restructuring) touch images/.keep
➜  app git:(restructuring) ✗ touch lib/.gitkeep
➜  app git:(restructuring) ✗ git add -Avn
add 'app/images/.keep'
add 'app/lib/.gitkeep'
➜  app git:(restructuring) ✗ touch routes/.keep
➜  app git:(restructuring) ✗ touch scenes/.keep
➜  app git:(restructuring) ✗ git add -Avn
add 'app/images/.keep'
add 'app/lib/.gitkeep'
add 'app/routes/.keep'
add 'app/scenes/.keep'
➜  app git:(restructuring) ✗ cd ..
➜  empower-app git:(restructuring) ✗ git add -vn
Nothing specified, nothing added.
Maybe you wanted to say 'git add .'?
➜  empower-app git:(restructuring) ✗ git add -vn .
add 'app/images/.keep'
add 'app/lib/.gitkeep'
add 'app/routes/.keep'
add 'app/scenes/.keep'
➜  empower-app git:(restructuring) ✗ git add -vn *
The following paths are ignored by one of your .gitignore files:
node_modules
Use -f if you really want to add them.
add 'app/images/.keep'
add 'app/lib/.gitkeep'
add 'app/routes/.keep'
add 'app/scenes/.keep'
➜  empower-app git:(restructuring) ✗ git add -uvn
➜  empower-app git:(restructuring) ✗ git add -uvn .
➜  empower-app git:(restructuring) ✗ git add -Avn
add 'app/images/.keep'
add 'app/lib/.gitkeep'
add 'app/routes/.keep'
add 'app/scenes/.keep'
➜  empower-app git:(restructuring) ✗ git add -Av
add 'app/images/.keep'
add 'app/lib/.gitkeep'
add 'app/routes/.keep'
add 'app/scenes/.keep'
```

That final command indeed adds the images, lib, routes and scenes directories (and their .keep files). I tried one `.gitkeep` file to confirm that it is not treated differently.

#### git push

I believe this `git push` command binds the local branch to the remote branch, rather than treating them as two separate branches (even if they have the same name).

```
➜  empower-app git:(restructuring) git push --set-upstream origin restructuring
...
To https://github.com/justinhaaheim/empower-app.git
 * [new branch]      restructuring -> restructuring
Branch restructuring set up to track remote branch restructuring from origin.
```
