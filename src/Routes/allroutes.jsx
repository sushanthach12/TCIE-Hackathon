import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import AddBeds from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddBeds";
import AddAdmin from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Admin";
import AddAmbulance from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Ambulance";
import AddDoctor from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Doctor";
import AddNurse from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Nurse";
import BedsRooms from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Beds_Rooms";
import CheckPayment from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Check_Payment";
import AllReport from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/AllReport";
import CheckAppointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Check_Appointment";
import DischargeandCreateSlip from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Discharge_and_Create_Slip";
import DoctorProfile from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Doctor_Profile";
import PatientDetails from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Patient_Details";
import AddPatient from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Add_Patient";
import BookAppointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Book_Appointment";
import NurseProfile from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Nurse_Profile";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} />
        <Route path="/addoctor" element={<AddDoctor />} />
        <Route path="/addambulance" element={<AddAmbulance />} />
        <Route path="/addnurse" element={<AddNurse />} />
        <Route path="/rooms" element={<BedsRooms />} />
        <Route path="/admin" element={<AddAdmin />} />
        <Route path="/addbeds" element={<AddBeds />} />
        ******************** Doctor Part *************************
        <Route path="/reports" element={<AllReport />} />
        <Route path="/checkappointment" element={<CheckAppointment />} />
        <Route path="/createslip" element={<DischargeandCreateSlip />} />
        <Route path="/patientdetails" element={<PatientDetails />} />
        <Route path="/doctorprofile" element={<DoctorProfile />} />
        ******************** Nurse Part *************************
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/nurseprofile" element={<NurseProfile />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
