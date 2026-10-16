// import React from 'react'

// function App() {
//   let style1 = {
//     height: "70px",
//     width: "100%",
//     border: "5px solid black",
//     backgroundColor: "white"
//   }
//   let style2 = { color: "blue", fontSize: "50px" }

//   return (
//     <div>
//       <h1 style={style1}>welcome to react js</h1>
//       <p style={style2}>react js used to create a usrinterfcae.</p>
//     </div>
//   )
// }

// export default App



// import { useState } from "react";
// import "./App.css";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Login from "./Login";
// import Password from "./Password";
// import Signup from "./Signup";
// import Contact from "./Contact";
// import Register from "./Register";

// function App() {
//     const [page, setPage] = useState("home");

//     return (
//         <div>
//             <Navbar setPage={setPage} />

//             {page === "home" && <Home />}
//             {page === "login" && <Login />}
//             {page === "password" && <Password />}
//             {page === "signup" && <Signup />}
//             {page === "contact" && <Contact />}
//             {page === "register" && <Register />}
//         </div>
//     );
// }

// export default App;








import React from 'react'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <div>
      <ProfileCard />
    </div>
  )
}

export default App






