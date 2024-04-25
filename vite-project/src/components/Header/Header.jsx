import React from "react";
import { useSelector } from "react-redux";
import Container from "../container/container";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogOut from "./LogOut";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  
  // useNavigate is used for redirect one page to another page
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      action: true,
    },
    {
      name: "Login",
      slug: "/login",
      action: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      action: !authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.action ? (
                <li key={item.name}>
                  <button
                    onClick={()=>navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogOut />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
