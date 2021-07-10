import React, { useContext, useState, useEffect } from "react";

let init = {};
export const Context = React.createContext(init);

export default function ContextHome({ children }) {
  const [dark, setDark] = useState(false);

  const [lang, setLang] = useState("en");

  function darkMode() {
    setDark(!dark);
  }

  return (
    <Context.Provider value={{ dark, darkMode, lang, setLang }}>
      {children}
    </Context.Provider>
  );
}
