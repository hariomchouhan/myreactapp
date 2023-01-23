import { Header } from './Header';
import { Navbar } from './Navbar';
import { RegistrationForm } from './RegistrationForm';
import { ScoreBoard } from './ScoreBoard';
import { SignupForm } from './SignupForm';
import { UsersData } from './UsersData';
import { UsersList } from './UsersList';
import { UsersTable } from './UsersTable';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Header heading="Welcome" text="This is paragraph."></Header> */}
      {/* <ScoreBoard></ScoreBoard> */}
      {/* <SignupForm></SignupForm> */}
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <UsersList></UsersList> */}
      {/* <UsersData></UsersData> */}
      <UsersTable></UsersTable>
    </>
  );
}

export default App;
