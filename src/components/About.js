import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


function About() {
  return (
    <div>
      About shoe bot
    </div>
  );
}

export default withAuthenticator(About,true);
