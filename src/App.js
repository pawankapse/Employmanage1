
import Navbar from "./Component/Navbar";
import Signup from "./Component/Signup";
import Login from "./Component/login";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Component/welcome";
import { AuthProvider, useAuth } from "./Component/AuthContaxt";
import MainNavBar from "./Component/MainNavBar";
import EmployeeForm from "./Component/EmpForm";
import ViewAllEmp from "./Component/ViewAllEmploy";
function AppContaint() {
  const { isLoggedIn } = useAuth();
   return (
    <div>
      {isLoggedIn ? <MainNavBar /> : <Navbar />}
      {/* <Navbar/> */}
      <Routes>
        
        {isLoggedIn ? (
          <Route path="/" element={<Welcome />}></Route>
        ) : (
          <Route path="/" element={<Home />}></Route>
        )}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        {/* <Route path="/" element={<Home/>}></Route>  */}
<Route path="/addemp" element={<EmployeeForm />}></Route>
        <Route path="/view" element={<ViewAllEmp />}></Route>
        
      </Routes>
    </div>
  );
}
function App() {
  return (
   

    <AuthProvider>
      <AppContaint />
    </AuthProvider>

 
  );
}

export default App;

