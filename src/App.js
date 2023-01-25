import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { RegistrationForm } from "./components/RegistrationForm";
import { ScoreBoard } from "./components/ScoreBoard";
import { UsersData } from "./components/UsersData";
import { UsersList } from "./components/UsersList";
import { UsersTable } from "./components/UsersTable";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ScoreBoard/>}/>
        <Route path="/signup" element={<RegistrationForm/>}/>
        <Route path="/users-data" element={<UsersData/>}/>
        <Route path="/users-list" element={<UsersList/>}/>
        <Route path="/users-table" element={<UsersTable/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
