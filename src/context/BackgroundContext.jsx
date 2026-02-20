import { createContext, useState } from "react";

export const BackgroundContext = createContext();

function getInitialVisible() {
  const stored = localStorage.getItem("bg-visible");
  if (stored === "false") return false;
  return true;
}

export function BackgroundProvider({ children }) {
  const [visible, setVisible] = useState(getInitialVisible);

  const toggleVisible = () =>
    setVisible((prev) => {
      const next = !prev;
      localStorage.setItem("bg-visible", String(next));
      return next;
    });

  return (
    <BackgroundContext.Provider value={{ visible, toggleVisible }}>
      {children}
    </BackgroundContext.Provider>
  );
}
