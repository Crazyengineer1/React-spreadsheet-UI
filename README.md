Here react is used with tailwind and I have used react table to made the grid 
Here there are three main components - Header, Toolbar, Grid. All these three components are used in the "App.tsx" the grid component contains the actual spreadsheet and the footer

This project follows best practices for code style and type correctness using ESLint, Prettier, and TypeScript.

npm run lint :
Runs ESLint and Prettier to check for:

Potential bugs and code smells

Code style violations (indentation, quotes, semicolons, etc.)

Unused variables or imports

Inconsistent formatting

You can also auto-fix most issues with:
npm run lint -- --fix


npm run type-check :
Runs TypeScript's type checker to ensure:

Type correctness across the codebase

Proper use of interfaces, types, and props

Zero unexpected runtime errors caused by incorrect typing

This command uses tsc --noEmit, meaning it doesn't compile the project — it only checks for type safety.
