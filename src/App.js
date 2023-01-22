import { Header } from './Header';
import { Navbar } from './Navbar';
import { ScoreBoard } from './ScoreBoard';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Header heading="Welcome" text="This is paragraph."></Header> */}
      <ScoreBoard></ScoreBoard>
    </>
  );
}

export default App;
