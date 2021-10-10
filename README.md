# React Meme Generator

The capstone project of the 'Learn React for free' course on Scrimba. Like the [Todo List exercise](https://github.com/RhysMalyon/react-todo-list), my aim was to challenge myself to recreate the app without reference to the code I'd written on the platform itself, as well as build on some basic principles learned during the duration of the short course.

This final project was an opportunity to further explore state management, particularly in class-based components, while also pulling data from an API, assigning it to state, and creating error handlers based on the received data. In recent exercises and coding challenges it was highlighted that I didn't have any checks in place for data integrity, so I wanted to test out error catching and throwing custom errors.

## Current features

- Randomly generate meme based on user text input
- API data fetching and state assignment
- Error handling
- Conditional rendering based on error existence
- Sass for component-driven stylesheet structure

## Known issues

- Text is displayed as the user types. Ideally input will only be displayed once the form is submitted.
- Error handling for initial data handling works but if a user clicks 'Generate' when no data is present it crashes the app.

## Installation

In the project directory, you can run:

### `yarn install` / `npm install`

Install all necessary dependencies to be able to run the project.

### `yarn start` / `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
