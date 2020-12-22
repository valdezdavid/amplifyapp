import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Coming Soon
      </header>
    </div>
  );
}

export default withAuthenticator(App,true);
