# Techwondeo_ Frontend

Hello Coder 👋

## How to start the project 

1) Run `npm install` to download all packages 👍

Facing any issue with dependencies ? 👇

Here's one Fix -

1) Delete the dev dependencies from package.json
2) Run `npm install` to delete the react app
3) Run `npx sb init` to initialize the storybook on the project
4) And boom the project is working fine now.

2) Run `npm start` to run the react app on [http://localhost:3000](http://localhost:3000) 👈

3) Run `npm run storybook` to run the storybook on localhost

## How the deployment is done

This project is using `CI CD` flow of `Netlify` to get hosted everytime. 😎

-> Every PR is checked based on it's headers and rules being defined.
<br>
-> A Preview of the same is created to show if the project would be working fine if hosted. 👌
<br>
-> The master branch is connected to the hosting service and as any change is pushed. It gets deployed.
<br>
-> Here's the link - [https://techwondoefrontend.netlify.app/](https://techwondoefrontend.netlify.app/)

Cool right ?

## What are there on the project

1) The Project is using `storybook` for styling of each components
<br>
2) The file structure involves-
<br>
<br>
src
<br>
&nbsp;|-----components
<br>
&nbsp;      &nbsp;|-----------subComponent
      <br>
&nbsp;      &nbsp;            &nbsp;|------Each Component
                  <br>
&nbsp;      &nbsp;            &nbsp;       &nbsp;|----JSX file
                         <br>
&nbsp;      &nbsp;            &nbsp;       &nbsp;|----CSS file
                         <br>
&nbsp;      &nbsp;            &nbsp;       &nbsp;|----.stories.js file
                         <br>
&nbsp;&nbsp;      |-----------UI
      <br>
&nbsp;       &nbsp;           |------Button
                  <br>
&nbsp;       &nbsp;           |------Typography
                  <br>
&nbsp;|-----pages
<br>
&nbsp;      &nbsp;|-----------Landing
      <br>
&nbsp;      &nbsp;            &nbsp;|---------Home
                  <br>

2) Eslint and Prettier are configured on the project
3) Themeing is done with 2 colours primary and secondary
4) Page is hosted on Netlify
5) Each section and subsections are distributed for every page.


That's all.

Hope I haven't bored too much.

Happy coding ! 😊
