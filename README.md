# Typescript + es6 React boilerplate
This repo has the purpose of showing how to setup a react project boilerplate that uses both ES6 and TYPESCRIPT.
I am currently working on a react project completely written in javascript, my team and I wanted to experiment and 
perhaps migrate to typescript, but since the code is already in production and contain tens of thousands of lines, it
would be unsiwise to switch everything at once.

This setup is an example of how to make both typescript and es6 javascript to coexist in the same environment.

## Running the project
```
npm install;
npm run build;
npm start;
```

`npm run build;` will use webpack lint, test and bundle the files into a build folder.
`npm start` will fire a very simple `express` server to provide the content in a default port.

## Bundling
It uses a simple [webpack](https://webpack.js.org/) configuration to bundle a set of static files (index.html and javascript chunks), babel is used to transpile es6 whereas
typescript compiler via ts-loader is used to transpile typescript.

### Where is it setup?
Mostly `webpack.config.js`, but also `.babelrc` and `tsconfig.json`

## Linting
[ESLint](https://www.npmjs.com/package/eslint) is configured to extend some well adopted rules, such as airbnb rules, as well as some
others defined in .eslintrc file. The core typescrict static validations are performed by the compiler itself and they would fail during the
transpiling process, but [TSLint](https://www.npmjs.com/package/tslint) is also setup to run extend validations (such as styling and maintainability).
That being said, if you are using vscode (which I strongly recommend you to do), you get static validations for both es6 and typescript if
you install the EXTENSIONS [ESLint](https://github.com/Microsoft/vscode-eslint) and [TSLint](https://github.com/Microsoft/vscode-tslint).
PS: Some TSLint rules require the compiler type checker, so they will not show in the editor, but they will fail during npm lint script.

### Where is it setup?
`.eslintrc`, `tslint.json` and we may say that also: `tsconfig.json`

## Testing
[Jest](https://facebook.github.io/jest/) is the testing framework of choice, again it is used for testing both typescript and javascript files,
both vanilla and jsx (react) content. in order for jest to be able to understand both languages, we need to use preprocessors, for typescript we use
a third party packaged called `ts-jest` and for es6 there is a file called `es6-preprocessor` in the root dir. 
PS: Notice that we wouldn't have to define this es6-preprocessor file we we weren't working with the typescript preprocessor.

### Coverage
By running `npm run build` or simply `npm run test` you get a coverage report in `coverage/lcov-report/index.html`, check it out, there is
also a coverage threshold.

### Where is it setup?
`jest.config.json`
