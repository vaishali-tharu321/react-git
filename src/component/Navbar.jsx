import { useState } from "react";

export function Navbar() {

  const [page, setPage] = useState("home");

  return (
    <div>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("services")}>Services</button>
      <button onClick={() => setPage("contact")}>Contact</button>

      {page === "home" && <h2>Home Page</h2>}
      {page === "about" && <h2>About Page</h2>}
      {page === "services" && <h2>Services Page</h2>}
      {page === "contact" && <h2>Contact Page</h2>}

    </div>
  );
}