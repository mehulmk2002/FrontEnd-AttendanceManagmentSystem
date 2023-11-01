
import { useEffect, useState } from 'react';
import './App.css';
import Attendance_inForm from './Attendance/Attendance_inForm';
import AdminLogin from './AdminLogin.js'
function App() {

  const [LoginFlag,setLoginFlag]=useState(false)

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userType = localStorage.getItem("userType");
    if (userName && userType=='admin') {
      setLoginFlag(true);
    }
    else if (userName && userType=='staff') {
      setLoginFlag(true);
    }
  }, [setLoginFlag]);



 

  return (
    <div className="App">
   
      {LoginFlag?<><Attendance_inForm LoginFlag={LoginFlag} setLoginFlag={setLoginFlag}  /></>:<AdminLogin LoginFlag={LoginFlag} setLoginFlag={setLoginFlag}/>}
    
    </div>
  );
}

export default App;
