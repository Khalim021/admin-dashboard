import { ColorModeContext, useMode} from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import TopBar from "./main/global/TopBar";
import Dashboard from "./main/dashboard/Dashboard";
import Sidebar from "./main/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Team from "./main/team/Team";
import Contacts from "./main/contacts/Contacts";
import Invoices from "./main/invoices/Invoices"
import Form from "./main/form/Form";
import Calendar from "./main/calendar/Calendar";
import Faq from "./main/faq/Faq";
import Bar from "./main/barchart/Bar";
import Pie from "./main/piechart/Pie";
import Line from "./main/linegraph/Line";
import WorldMap from "./main/geo/WorldMap";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/barchart" element={<Bar />} />
              <Route path="/piechart" element={<Pie />} />
              <Route path="/linegraph" element={<Line />} />
              <Route path="/worldmap" element={<WorldMap />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;





