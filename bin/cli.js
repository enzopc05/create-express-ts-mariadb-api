#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command=>{
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (error) {
        console.log(error);
        return false;
    }
    return true; 
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Romeo-Giorgio/create-express-ts-mariadb-api.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning rerpository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log("Congratulations ! You are ready. Follow the following command to start");
console.log(`cd ${repoName} && npm run dev`);