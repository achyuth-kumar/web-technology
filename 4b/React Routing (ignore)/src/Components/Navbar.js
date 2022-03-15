import React from "react";

import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
  return <div className="header">
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/announcements">Announcements</Link>
    <Link className="link" to="/registrations">Registrations</Link>
    <Link className="link" to="/contact">Contact</Link>
  </div>;
}
