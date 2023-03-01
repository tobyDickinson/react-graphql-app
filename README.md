# Notes App

## Getting Started

### Pre-requisistes

- Node 16
- npm 8

### Quick Start

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm start
```

3. Explore the web page!

## Repository Structure

- `public` - Static files used by web server
- `src`
  - `components` - React components rendered to pages
  - `menus` - Menu react components
  - `pages` - Main react page components navigatable via menus
  - `repository` - Data layer to connect to graphql

## General Comments and Next Steps

- `src/App.tsx` is the root of the application and should be the first place to look when navigating the repo.

- The app uses react-router to render different pages via the Navbar.

- Many files were automatically generated using `react-scripts` which was used to set up the repo.

- The repo contains some todos, particularly around refactoring some components.

- I excluded testing as I ran out of time but I would want better tests for this before progressing.

- There also seems to be a better pattern for data access via the `ApolloProvider` [component](https://www.apollographql.com/docs/react/get-started/#step-4-connect-your-client-to-react). Given more time I would look to refactor the repository layer to use this instead.