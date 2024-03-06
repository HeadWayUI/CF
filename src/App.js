import { Routes, Route } from 'react-router-dom'
import About from './app/pages/About';
import Home from './app/pages/Home'
import Donate from './app/pages/Donate';
import Gallery from './app/pages/Gallery';
import Blog from './app/pages/Blog';
import Conatct from './app/pages/Conatct';
import Login from './app/pages/login/Login'
import Sidebar from './app/pages/sidebar/Sidebar'
import Navbar from './admin/admincomponents/navbar/Navbar'
import Signup from './app/pages/login/Signup';
import { productInputs, userInputs } from "./formSource";

// import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";

import Sponsorpayments from './sponsor/sponsorpages/payments/Sponsorpayments'
import Sponsorhome from './sponsor/sponsorpages/home/Sponsorhome';
import Sponsorlist from './sponsor/sponsorpages/list/Sponsorlist';
// import Sponsornew from './sponsor/sponsorpages/new/Sponsornew';
import Sponsorsingle from './sponsor/sponsorpages/single/Sponsorsingle';
import Sponsorpiechart from "./sponsor/sponsorpages/pie/Sponsorpiechart";
import Sponsorbarchart from "./sponsor/sponsorpages/bar/Sponsorbarchart";
import Sponsorfunds from "./sponsor/sponsorpages/funds/Sponsorfunds";
import Homee from "./admin/adminpages/home/Home";
import React from "react";
import List from "./admin/adminpages/list/List";
import Single from "./admin/adminpages/single/Single";
import New from "./admin/adminpages/new/New"
import Allstudents from './app/pages/Allstudents';
import Alltrainers from './app/pages/Alltrainers';
import Alltechnology from './app/pages/Alltechnology';
import Allclients from './app/pages/Allclients';
import Allfunders from './app/pages/Allfunders';
import Funds from './app/pages/Funds';
// import Pie from './admin/adminpages/pie/Adminpie';
// import Bar from './admin/adminpages/bar/Adminbar';
import Adminbar from './admin/adminpages/bar/Adminbar';
import Adminpie from './admin/adminpages/pie/Adminpie';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Conatct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sidenav' element={<Sidebar />} />
        <Route path='/nav' element={<Navbar />} />
        <Route path='/allinterns' element={<Allstudents />} />
        <Route path='/alltrainers' element={<Alltrainers />} />
        <Route path='/alltechnology' element={<Alltechnology />} />
        <Route path='/allclients' element={<Allclients />} />
        <Route path='/alldonars' element={<Allfunders />} />
        <Route path='/fund' element={<Funds />} />
        
        {/* admin routes */}
        <Route path="admin" element={<Homee />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs} title="Add New User" />}/>   
        </Route>
        <Route path="adminlearner">
              <Route index element={<List />} />
              <Route path=":productId" element={<Sponsorsingle />} />    
        </Route>
        <Route path='pie' element={<Adminpie />} />
        <Route path='bar' element={<Adminbar />} />


        {/* sponsoradmin routes */}
        <Route path="sponsoradmin">
            <Route index element={<Sponsorhome />} />
            <Route path="sponsoradmin" element={<Sponsorhome />} />
          </Route>
            <Route path="learner">
              <Route index element={<Sponsorlist />} />
              <Route path=":learnerId" element={<Sponsorsingle />} />
            </Route>
            <Route path="sponsorpayments" element={<Sponsorpayments />}  />
            <Route path="sponsorpie" element={<Sponsorpiechart />}  />
            <Route path="sponsorbar" element={<Sponsorbarchart />}  />
            <Route path="funds" element={<Sponsorfunds />}  />
      </Routes>
    </div>
  );
}

export default App;
