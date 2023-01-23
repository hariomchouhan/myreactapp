import { Header } from './Header';
import { Navbar } from './Navbar';
import { RegistrationForm } from './RegistrationForm';
import { ScoreBoard } from './ScoreBoard';
import { SignupForm } from './SignupForm';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Header heading="Welcome" text="This is paragraph."></Header> */}
      {/* <ScoreBoard></ScoreBoard> */}
      {/* <SignupForm></SignupForm> */}
      <RegistrationForm></RegistrationForm>
    </>
  );
}

export default App;
