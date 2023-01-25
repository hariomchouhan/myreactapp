import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { RegistrationForm } from "./components/RegistrationForm";
import { ScoreBoard } from "./components/ScoreBoard";
import { UsersData } from "./components/UsersData";
import { UsersList } from "./components/UsersList";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigationbar></Navigationbar>
      <Routes>
        <Route path="/" element={<ScoreBoard/>}/>
        <Route path="/signup" element={<RegistrationForm/>}/>
        <Route path="/users-data" element={<UsersData/>}/>
        <Route path="/users-list" element={<UsersList/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
