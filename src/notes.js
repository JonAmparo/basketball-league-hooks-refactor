// 1. Team.js + TeamLogo.js

// 1a. When rendering the url teams/(insert animal here) -- my functional component renders null, then it renders the id.

// 1b. Also, it doesn't display my loading component when I select a team.

// 2. DynamicImport.js + App.js !!!!

// 1a. Error: Event likely a bug
// Load is the prop that is brought down throw app.js onto DynamicImport
// Destructered into 'load' then, ran into useEffect at load() to set state to our component

// 3. Passing props or location & match is better?

// 4. Clean up Articles
// import unsubscribeTeamsArticles

// useEffect
//     return () => {
//   console.log(`Cleaning up Effect for TeamsArticles`);
//   unsubscribeTeamsArticles(match.params.teamId);
// };

// Api.js
// export function unsubscribeTeamsArticles(teamId) {
//     return clearTimeout(generateTeamsArticles(teamId));
//   }
