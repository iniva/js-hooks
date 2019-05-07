# JS Hooks <!-- omit in toc -->
Configurations and Scripts for hooks.

- [Usage](#usage)
  - [Considerations](#considerations)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)

## Usage

### Considerations
I use these hooks with `husky`, but you are free to integrate them with any trigger logic of your own an modify them as you please. This is just an implementation that I've been using and iterating across my projects. If you are not using `husky` simply modify whatever is useless for your implementation.

### Installation
There's no need to add this package as a dependency in your project. Simply run:
```sh
npx js-hooks
```
This will copy the `hooks` folder and the `.huskyrc` file to your project's root. Also, it will update your `package.json` to add the scripts and configurations needed for this to work.

### Available Scripts
Run as `yarn {script}` or `npm run {script}`
* **commit**
