
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Components/AdminDashboard/Sidebar";
import MainContent from "./Components/AdminDashboard/MainContent";
import Drivers from "./Components/AdminDashboard/Drivers/Drivers";
import Regions from "./Components/AdminDashboard/Regions/Regions";
import Message from "./Components/AdminDashboard/Message/Message";

const AppAdmin = () => {
    return (
        <Container dir="rtl">
            <Sidebar />
            <ToastContainer />
            <Routes>

                <Route path="/dashboard" element={<MainContent />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/regions" element={<Regions />} />
                <Route path="/message" element={<Message />} />
                {/*<Route path="/users" element={<Users />} />
                <Route path="/students" element={<Student/>} />
                <Route path="/services" element={<Services />} />
                <Route
                    path="/category_courses"
                    element={<Category_Courses />}
                />
                <Route path="/courses" element={<Courses />} />*/}
            </Routes>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  height: 95%;



  background: #072a7b;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default AppAdmin;
