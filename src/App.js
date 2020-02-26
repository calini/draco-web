import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

// Render the GitHubLogin?
function App() {
    return (
        <Router>
        </Router>
    );
}

export default App;

/* GitHub Login
// import GitHubLogin from 'react-github-login';
return (<GitHubLogin clientId="191ba85e49c54feb0697"
                 onSuccess={ (response) => console.log(response) }
                 onFailure={ (response) => console.error(response) }
                 redirectUri={"http://localhost:3000/oauth2/callback"}/>)
 */