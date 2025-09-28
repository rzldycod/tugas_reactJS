import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import DefaultLayout from "./components/shared/layout/DefaultLayout";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;