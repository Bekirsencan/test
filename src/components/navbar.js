import React from "react";

const NavbarComponent = () => {
  return (
    <div>
      <nav className="nav__container__actions">
        <ul>
          <li>
            <h1 activeClass="active" smooth spy to="contact">
              Blog.
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarComponent;
