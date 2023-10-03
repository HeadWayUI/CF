import {Routes, Route } from 'react-router-dom'
import About from './app/pages/About';
import Home from './app/pages/Home'
import Donate from './app/pages/Donate';
import Gallery from './app/pages/Gallery';
import Blog from './app/pages/Blog';
import Conatct from './app/pages/Conatct';
import Login from './app/pages/Login';
import { useState } from "react";

import Topbar from "./admin/scenes/global/Topbar";
import Sidebar from "./admin/scenes/global/Sidebar";
import Dashboard from "./admin/scenes/dashboard";
import Team from "./admin/scenes/team";
import Invoices from "./admin/scenes/invoices";
import Contacts from "./admin/scenes/contacts";
import Bar from "./admin/scenes/bar";
import Form from "./admin/scenes/form";
import Line from "./admin/scenes/line";
import Pie from "./admin/scenes/pie";
import FAQ from "./admin/scenes/faq";
import Geography from "./admin/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./admin/scenes/calendar/calendar";




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/donate' element = {<Donate />} />
        <Route path = '/gallery' element = {<Gallery />} />
        <Route path = '/blog' element = {<Blog />} />
        <Route path = '/contact' element = {<Conatct />} />
        <Route path = '/login' element = {<Login />} />
      </Routes>

      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
}

export default App;
