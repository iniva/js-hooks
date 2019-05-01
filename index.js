const fse = require('fs-extra');

// Copy Hooks Folder to Project Folder
const copyHooks = async (projectRoot) => {
    console.log('Copying hooks folder to your project');
    try {
        await fse.copy(`${__dirname}/hooks`, `${projectRoot}/hooks`)
        console.log('hooks folder copied');
    } catch (err) {
        console.error(err);
        process.exit();
    }

};

// Copy husky config
const copyHuskyConfig = async (projectRoot) => {
    console.log('Copying husky config to your project');
    try {
        await fse.copy(`${__dirname}/.huskyrc`, `${projectRoot}/.huskyrc`)
        console.log('.huskyrc copied');
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

// Update package.json config and scripts
const updatePackage = async(projectRoot) => {
    console.log('Updating package.json "config" and "scripts" in your project');
    const projectPck = require(`${projectRoot}/package.json`);

    if(!Object.keys(projectPck).includes('config')) {
        projectPck.config = {};
    }
    projectPck.config.commitizen = {
        path: 'cz-conventional-changelog'
    };

    if(!Object.keys(projectPck).includes('scripts')) {
        projectPck.scripts = {};
    }
    projectPck.scripts.commit = 'git-cz';

    try {
        await fse.writeJson(`${projectRoot}/package.json`, projectPck, { spaces: 2 })
        console.log('Added/Updated "config" property in your package.json');
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

const install = async () => {
    const projectRoot = process.cwd();

    await copyHooks(projectRoot);
    await copyHuskyConfig(projectRoot);
    await updatePackage(projectRoot);
}

install();