import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import About from './components/About'

function App() {
  return (
    <div className="App">
      Coming Soon
      <About />
    </div>
  );
}

export default withAuthenticator(App,true);
