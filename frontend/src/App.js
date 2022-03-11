import "./App.css";
import Homepage from "./components/home/Homepage";
import Associatepage from "./pages/Associatepage";
import Associatelistpage from "./pages/Associatelistpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import Addhall from "./components/bookhall/Addhall";
import Bookinglist from "./components/bookinglist/Bookinglist";
import Updatehall from "./components/bookinglist/Updatehall";
import CalendarAdmin from "./components/calendar/CalendarAdmin";
import CalendarAssociate from "./components/calendar/CalendarAssociate";
import UpdateAssociate from "./components/associatelist/UpdateAssociate";
import NavbarAdmin from "./components/header/NavbarAdmin";
import NavbarHome from "./components/header/NavbarHome";
import NavbarAssociate from "./components/header/NavbarAssociate";
import React, { useState } from "react";
import AssociateListPageUser from "./pages/AssociatelistpageUser";
import Footer from "./components/footer/Footer";
import Regassociate from "./components/regassociate/Regassociate";
import DashboardAdmin from "./components/dashboardadmin/DashboardAdmin";
import DashboardAssociate from "./components/dashboardassociate/DashboardAssociate";

function App() {
  var [loggedin, setloggedin] = useState(0);
  var [loggedout, setloggedout] = useState(0);
  console.log("lin", loggedin);
  console.log("lout", loggedout);
  const setlogin = (l) => {
    setloggedin(l);
  };
  const setlogout = (l) => {
    setloggedout(l);
  };

  if (loggedin === 0) {
    return (
      // Landing Page Routers
      <Router>
        <div className="App">
          <NavbarHome setlogout={setlogout} />
          <Routes>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route
              path="/signin"
              element={<SignIn setlogin={setlogin} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  } else if (loggedin === 1) {
    return (
      // Associate Routers
      <Router>
        <div className="App">
          <NavbarAssociate setlogout={setlogout} />
          <Routes>
            <Route
              path="/dashboardassociate"
              element={<DashboardAssociate />}
            ></Route>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route
              path="/associatelist"
              element={<AssociateListPageUser />}
            ></Route>
            <Route
              path="/associatelist/:ictkid"
              element={<Associatepage />}
            ></Route>
            <Route path="/addhall" element={<Addhall />}></Route>
            <Route path="/bookinglist" element={<Bookinglist />}></Route>
            <Route path="/updatehall/:ictkid" element={<Updatehall />}></Route>
            <Route path="/viewcalender" element={<CalendarAssociate />}></Route>
            <Route
              path="/signin"
              element={<SignIn setlogin={setlogin} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  } else {
    return (
      // Admin Routers
      <Router>
        <div className="App">
          <NavbarAdmin setlogout={setlogout} />
          <Routes>
            <Route path="/dashboardadmin" element={<DashboardAdmin />}></Route>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route
              path="/updateassociate/:ictkidid"
              element={<UpdateAssociate />}
            ></Route>
            <Route
              path="/associatelist"
              element={<Associatelistpage />}
            ></Route>
            <Route
              path="/associatelist/:ictkidid"
              element={<Associatepage />}
            ></Route>
            <Route
              path="/signin"
              element={<SignIn setlogin={setlogin} />}
            ></Route>
            <Route path="/addassociate1" element={<Regassociate />}></Route>
            <Route path="/admincalendar" element={<CalendarAdmin />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
