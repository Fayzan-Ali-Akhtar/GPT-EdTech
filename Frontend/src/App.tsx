import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./test_comp/counter";
import Unpersisted_Counter from "./test_comp/unpersisted_ctr";
import NavbarComp from "./components/Navbar and Footer/Navbar";
import Footer from "./components/Navbar and Footer/Footer";
import SearchCourse from "./components/SearchCourses/SearchCourse";
import ExploreCourses from "./components/ExploreCourses/ExploreCourses";
import CourseOverviewPage from "./components/CourseOverviewPage";

function App() {
  return (
    <>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/" element={<ExploreCourses title="Explore Our Courses"/>} />
        <Route path="/ctr_test" element={<Counter />} />
        <Route path="/unpersisted_ctr_test" element={<Unpersisted_Counter />} />
        <Route path="/explore-courses" element={<ExploreCourses title="Explore Our Courses"/>} />
        <Route path="/dash-admin" element={<AdminDashboard />} />
        <Route path="/dash-student" element={<UserDashboard />} />
        <Route path="/search" element={<SearchCourse />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/course-overview" element={<CourseOverviewPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
