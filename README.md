# Techwondeo_ Frontend

## How to start the project 

1) Run `npm install` to download all packages

Facing any issue with dependencies ?

Fix -

1) Delete the dev dependencies from package.json
2) Run `npm install` to delete the react app
3) Run `npx sb init` to initialize the storybook on the project
4) And boom the project is working fine now.

2) Run `npm start` to run the react app on [http://localhost:3000](http://localhost:3000)

3) Run `npm run storybook` to run the storybook on localhost

## How the deployment is done

This project is using `CI CD` flow of `Netlify` to get hosted everytime. 

-> Every PR is checked based on it's headers and rules being defined.
-> A Preview of the same is created to show if the project would be working fine if hosted.
-> The master branch is connected to the hosting service and as any change is pushed. It gets deployed.

Cool right ?

## What are there on the project

1) The Project is using `storybook` for styling of each components
2) The file structure involves-

src
|-----components
      |-----------subComponent
                  |------Each Component
                         |----JSX file
                         |----CSS file
                         |----.stories.js file
      |-----------UI
                  |------Button
                  |------Typography
|-----pages
      |-----------Landing
                  |---------Home
