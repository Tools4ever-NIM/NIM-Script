# NIM-Script

NIM-Script is a very basic [node](https://nodejs.org/) project to develop, test and debug your [NIM](https://docs.nimsuite.com) script functions right within Microsoft Visual Code
You can find detailed documentation in the [Wiki](https://github.com/Tools4ever-NIM/NIM-Script/wiki) a short summary is found below.

## Installation

First install [Visual Code](https://code.visualstudio.com/download)

Next install the latest 18.x release of [node](https://nodejs.org/en/about/previous-releases#looking-for-latest-release-of-a-version-branch)

Open the project folder in Visual Code and run `npm i`` in a terminal window

```bash
npm i
```

## Usage

Start NIM and download the nim references file, place this nim.ts file in the src directory.

Create a config.json (according to the options in the config.sample.json file)

In the script.ts you can write your own script functions, some examples are provided.
Use the build task to build the output files to be able to debug your code.
Place calls to your script functions inside main.ts
Now run the project to execute the function in main.ts which in turn will execute your script functions.
