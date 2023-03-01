import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContentHolder from "./components/ContentHolder";
import Navbar from "./components/Navbar";
import CreateNotePage from "./pages/CreateNote";
import ViewNotesPage from "./pages/ViewNotes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentHolder>
        <Routes>
          <Route path="/create-note/" element={<CreateNotePage />} />
          <Route path="/view-notes/" element={<ViewNotesPage />} />
        </Routes>
      </ContentHolder>
    </div>
  );
}

export default App;
