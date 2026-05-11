import "./Navbar.css";

const navList = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "Packages",
    path: "/",
  },

  {
    label: "Tours",
    path: "/",
  },

  {
    label: "About Us",
    path: "/",
  },

  {
    label: "Contact",
    path: "/",
  },
];

export const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-list">
            {navList.map((item) => (
              <li className="nav-item" key={item.label}>
                <a className="nav-link" href={item.path}>{item.label}</a>
              </li>
            ))}
        </ul>
    </nav>
  )
}