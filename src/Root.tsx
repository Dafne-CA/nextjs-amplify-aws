import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import App from "./App";
import Job from "./Job";

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/App" />} />
        <Route path="/App" element={<App />} />
        <Route path="/Job" element={<Job/>} />
      </Routes>
    </Router>
  );
}

export default Root;
