import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";
import PageLayout from "./components/PageLayout";
import Dashboard from "./pages/Admin/AdminDashboard";
import Users from "./pages/Admin/ManageUsers";
import Exams from "./pages/Admin/ManageExams";
import Questions from "./pages/Admin/QuestionBank";
import Results from "./pages/Admin/ManageResults";
// import FeedbackResponse from "./pages/Admin/FeedbackResponse";
import CandidateDashboard from "./pages/Candidate/CandidateDashboard";
import CameraMic from "./pages/Candidate/Camera-mic";
import QuizInterface from "./pages/Candidate/QuizInterface";
import Feedback from "./pages/Candidate/Feedback";
import Run from "./pages/Candidate/Run";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<PageLayout><Dashboard /></PageLayout>} />
        <Route path="/users" element={<PageLayout><Users /></PageLayout>} />
        <Route path="/exams" element={<PageLayout><Exams /></PageLayout>} />
        <Route path="/questions" element={<PageLayout><Questions /></PageLayout>} />
        <Route path="/results" element={<PageLayout><Results /></PageLayout>} />
        {/* <Route path="/Feedback Response" element={<PageLayout><FeedbackResponse /></PageLayout>} /> */}
        
        <Route path="/quiz" element={<QuizInterface />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
        <Route path="/camera" element={<CameraMic />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/submit" element={<Feedback />} />
        <Route path="/run" element={<Run />} />
      </Routes>
    </Router>
  );
}


export default App;

