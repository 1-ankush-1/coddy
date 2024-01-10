import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import { Select, MenuItem, Box } from "@mui/material";
import { I18nContext, setLanguage } from "./Translate/translate";
import AppRoutes from "./routes";

const App = () => {
  const [lang, setLang] = useState("en");

  const handleLangChange = (event: any) => {
    const newLang = event.target.value;
    setLang(newLang);
    setLanguage(newLang);
  };

  return (
    <BrowserRouter>
      <I18nContext.Provider value={{ lang, t: i18next.t.bind(i18next) }}>
        <AppRoutes />
        <Box
        className="selectlanguageBox"
          sx={{
            right: { md: "60px", xs: "20px" },
          }}
        >
          <Select value={lang} onChange={handleLangChange}>
            <MenuItem value="hi">भाषा</MenuItem>
            <MenuItem value="tam">மொழி</MenuItem>
            <MenuItem value="en">LANG</MenuItem>
          </Select>
        </Box>
      </I18nContext.Provider>
    </BrowserRouter>
  );
};

export default App;
