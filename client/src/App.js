// import "./App.css";
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/Home";
// import HotelInfo from "./pages/HotelInfo";
// import SearchResults from "./pages/SearchResults";
// import { HeaderComponent } from "./components/HeaderComponent";
// import { FooterComponent } from "./components/FooterComponent";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <HeaderComponent />
//         <Routes>
//           <Route index element={<HomePage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/hotelinfo" element={<HotelInfo />} />
//         </Routes>
//       <FooterComponent />
//       </BrowserRouter>

//     </>

import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import HotelInfo from "./pages/HotelInfo";
import Signup from "./pages/Signup";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Login from "./components/LoginFormComponent";
import OTP from "./pages/OTP";
import SearchResults from "./pages/SearchResults";
import ErrorScreen from "./pages/ErrorScreen";
import { WriteReview } from "./components/WriteReview";
import BookingInfoandBill from "./pages/BookingInfoandBill";
import MyBookings from "./pages/MyBookings";
import EmailUsContactUs from "./pages/EmailUsContactUs";
import CustomerSupport from "./pages/CustomerSupport";
import TermsofServicePage from "./pages/TermsofServicePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Favorites } from "./pages/Favorites";
import { ProtectedHotelInfo } from "./components/ProtectedHotelInfo";
import { ProtectedSearchResults } from "./components/ProtectedSearchResults";
import { ProtectedBookingInfoandBill } from "./components/ProtectedBookingInfoandBill";
import { Profile } from "./pages/Profile";
import { AllUsers } from "./pages/AllUsers";
import { useSelector } from "react-redux";

// #1E91B6 ✅ - Rudransh
// Toast notif ✅ - Rudransh
// TODO:  Individual Place -> Card Layout   - Sejal
// TODO: Hotel Info beautify - Sejal
// State Persistant in place search bar ✅ - Rudransh
// TODO: Place search bar -> search button inside it and reduce the width - Sejal
// TODO: Convert them into Protected Routes and change price based on the number of days stay - Rudransh
// Remove from favHotel list ✅ - Rudransh
// Hotel name and review ko flex krna h ✅ - Rudransh

//LocalStorage mein entered details enter krni h - Rudransh

function App() {
  const user = useSelector((state) => state.userFeature);

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* ✅*/}
        <Route
          path="/hotelinfo"
          element={<ProtectedHotelInfo Component={HotelInfo} />}
        />
        {/* ✅*/}
        <Route
          path="/searchResults"
          element={<ProtectedSearchResults Component={SearchResults} />}
        />
        {/* ✅*/}
        <Route path="/login" element={<Login />} /> {/* ✅*/}
        <Route path="/otp" element={<OTP />} />
        <Route path="/signup" element={<Signup />} />
        {/* ✅*/}
        <Route
          path="/bookingInfoandBill"
          element={
            <ProtectedBookingInfoandBill Component={BookingInfoandBill} />
          }
        />
        {/* ✅*/}
        <Route path="/mybookings" element={<MyBookings />} />
        {/* ✅*/}
        <Route path="/emailuscontactus" element={<EmailUsContactUs />} />
        {/* ✅*/}
        <Route path="/customersupport" element={<CustomerSupport />} />
        {/* <Route path="/writeReview" element={<WriteReview />} /> */}
        <Route path="/termsOfservice" element={<TermsofServicePage />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        {<Route path="/allUsers" element={<AllUsers />} />}
        {/* ✅*/}
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
