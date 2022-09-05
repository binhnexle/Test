<<<<<<< HEAD
# Test
Render a bunch of articles

# Getting Started with Create React App
=======
# TEST
>>>>>>> 6204f21 (Render a bunch of articles with available API)

## 1.Installation

### 1.1. For Yarn (Highly Recommended)

### Yarn version 2

```
.yarn/cache and .pnp.* may be safely ignored, but you'll need to run yarn install to regenerate them between each branch switch - which would be optional otherwise, cf Zero-Installs.

.yarn/install-state.gz is an optimization file that you shouldn't ever have to commit. It simply stores the exact state of your project so that the next commands can boot without having to resolve your workspaces all over again.

.yarn/patches contain the patchfiles you've been generating with the yarn patch-commit command. You always want them in your repository, since they are necessary to install your dependencies.

.yarn/plugins and .yarn/releases contain the Yarn releases used in the current repository (as defined by yarn set version). You will want to keep them versioned (this prevents potential issues if, say, two engineers use different Yarn versions with different features).

.yarn/sdks contains the editor SDKs generated by PnPify. Whether to keep it in your repository or not is up to you; if you don't, you'll need to follow the editor procedure again on new clones. See Editor SDKs for more details.

.yarn/unplugged should likely always be ignored since they typically hold machine-specific build artifacts. Ignoring it might however prevent Zero-Installs from working (to prevent this, set enableScripts to false).

.yarn/versions is used by the version plugin to store the package release definitions. You will want to keep it within your repository.

yarn.lock should always be stored within your repository (even if you develop a library).

.yarnrc.yml (and its older counterpart, .yarnrc) are configuration files. They should always be stored in your project.
```

### Install yarn version 2

1. Install the Yarn global binary to its latest version:
   `npm install -g yarn`

2. Move into your project folder:
   `cd ~/path/to/project`

3. Run the following:
   `yarn set version berry`

### 1.2. For NPM

`npm install`

## 2.Running

### 2.1. For Yarn

`yarn start`

### 2.2. For NPM

`npm run start`

## 3.Folder Structure

```
|-- public/
| |-- index.html                            -> Main HTML
|-- src/
| | -- components                              
| |    | -- CardImage.js                    -> Component of show articles: UI,fetch API...  
| |  
| | -- constants
       | -- index.js                        -> Declare variables as constant 
| | -- views 
       | -- index.js                        -> Declare view page   

NOTE: Source code in master branch.
