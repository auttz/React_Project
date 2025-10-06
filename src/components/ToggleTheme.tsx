import { useState } from "react";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const pageStyle: React.CSSProperties = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a", // 👈
    color: theme === "light" ? "#000000" : "#ffffff", // 👈
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div style={pageStyle}>
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme} className="btn btn-primary">
        Switch Theme
      </button>
    </div>
  );
}
export default ToggleTheme;
