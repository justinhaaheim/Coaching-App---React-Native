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

My common git commands:

+ `git add -Av` - When run in the root of the git project, this adds all files to the next commit.
+ `git checkout <branch>` - Switch to branch...
+ `git checkout -b <branch>` - Create branch <branch> and switch to it.
+ `git merge <branch>` - Merges <branch> into current branch.
+ `git push`
+ `git pull`

#### "Saving changes"

Typical steps to take at the end of making some changes:

```
> git add -Av
> git commit -m <commit text>
> git pull --rebase
> git push
```

Here's the dump from doing this the last time:

```
➜  empower-app git:(master) ✗ git add -Av
add 'docs/REFERENCE.md'
➜  empower-app git:(master) ✗ git commit -m "Ref update"
[master efadb10] Ref update
 1 file changed, 15 insertions(+), 1 deletion(-)
➜  empower-app git:(master) git pull --rebase
Current branch master is up to date.
➜  empower-app git:(master) git push
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 633 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/justinhaaheim/empower-app.git
   facfb47..efadb10  master -> master
```

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

#### git pull

The `git pull` I usually want is `git pull --rebase`.

It's possible to set that as the default for git using this command:

`git config --global pull.rebase true`

See: https://coderwall.com/p/tnoiug/rebase-by-default-when-doing-git-pull

#### git errors

If you ever get this error:

```
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: fatal error in commit_refs
To https://github.com/justinhaaheim/empower-app.git
 ! [remote rejected] reference-update -> reference-update (failure)
error: failed to push some refs to 'https://github.com/justinhaaheim/empower-app.git'
```

It's quite possible you forgot to do `git pull --rebase`. Try that, and *then* `git push`.


### react-native

#### issues

It seems there is an issue where react-native looks for packages in the home directory instead of the project's directory.

**Sometimes this error occurs simply because you do not have the package installed. First look for the package/try installing it with `npm install --save <package>`.**

The commonly recommended way of "resetting" this is to do:

1. Delete the node_modules folder - rm -rf node_modules && npm install
2. Reset packager cache - rm -fr $TMPDIR/react-* or node_modules/react-native/packager/packager.sh --reset-cache
3. Clear watchman watches - watchman watch-del-all
4. ??? Recreate the project from scratch ???

See: https://github.com/facebook/react-native/issues/4968

#### react-native upgrade

I installed react-native-git-upgrade, so now instead of `react-native upgrade` I should run `react-native-git-upgrade`. Apparently this is advantageous.

I originally tried installing this with `yarn global add react-native-git-upgrade`, but it didn't seem to install into any current PATH. After using npm it installed fine.

```
You should consider using the new upgrade tool based on Git. It makes upgrades easier by resolving most conflicts automatically.
To use it:
- Go back to the old version of React Native
- Run "npm install -g react-native-git-upgrade"
- Run "react-native-git-upgrade"
See https://facebook.github.io/react-native/docs/upgrading.html
```
