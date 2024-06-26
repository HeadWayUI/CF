import { Routes, Route } from 'react-router-dom'
import About from './app/pages/About';
import Home from './app/pages/Home'
import Donate from './app/pages/Donate';
import Gallery from './app/pages/Gallery';
import Blog from './app/pages/Blog';
import Conatct from './app/pages/Conatct';
import Login from './app/authentication/Login';
import Registration from './app/authentication/Registration';
import Sidebar from './app/pages/sidebar/Sidebar';
import Navbar from './admin/admincomponents/navbar/Navbar';
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
import Button from './app/pages/Button';
import Sponsors from './admin/adminpages/sponsors/Sponsors';
import Trainers from './admin/adminpages/trainers/Trainers';
import Clients from './admin/adminpages/clients/Clients';
import Adminline from './admin/adminpages/line/Adminline';
import Trainers1 from './sponsor/sponsorpages/trainers/Trainers';
import Studentview from './admin/admincomponents/datatable/student/Studentview';
import AdminQuery from './admin/adminpages/query/AdminQuery';
import Forgottenpassword from './app/authentication/Forgottenpassword';
import Studentcreate from './admin/admincomponents/datatable/student/Studentcreate';
import Adminprofile from './admin/adminpages/profile/Adminprofile';


function App() {

  return (
    <div>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Conatct />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/sidenav' element={<Sidebar />} />
        <Route path='/nav' element={<Navbar />} />
        <Route path='/allinterns' element={<Allstudents />} />
        <Route path='/alltrainers' element={<Alltrainers />} />
        <Route path='/alltechnology' element={<Alltechnology />} />
        <Route path='/allclients' element={<Allclients />} />
        <Route path='/alldonars' element={<Allfunders />} />
        <Route path='/fund' element={<Funds />} />
        <Route path='/forgottenpassword' element={<Forgottenpassword />} />
        
        {/* admin routes */}
        <Route path="admin" element={<Homee />} />
        <Route path="learners">
          <Route index element={<List />} />
          <Route path=":studentId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs} title="Add New User" />}/>   
        </Route>
        <Route path="adminlearner">
              <Route index element={<List />} />
              <Route path=":sponsorId" element={<Single />} />    
        </Route>
        <Route path='pie' element={<Adminpie />} />
        <Route path='linechart' element={<Adminline />} />
        <Route path='barchart' element={<Adminbar />} />
        <Route path='button' element={<Button />} />
        <Route path='sponsorlist' element={<Sponsors />} />
        <Route path='trainerslist' element={<Trainers />} />
        <Route path='clientslist' element={<Clients />} />
        <Route path='querylist' element={<AdminQuery />} />
        <Route path='sread/:studentId' element={<Studentview />} />
        <Route path='screate' element={<Studentcreate />} />
        <Route path='profile' element={<Adminprofile />} />

        
       



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
            <Route path="trainers" element={<Trainers1 />}  />
      </Routes>
    </div>
  );
}

export default App;
