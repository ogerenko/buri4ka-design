import "./NavBar.scss";

const headerContent = [
  {
    text: "about me",
    link: "#about-me",
  },
  {
    text: "portfolio",
    link: "#portfolio",
  },
  {
    text: "education",
    link: "#education",
  },
  {
    text: "contacts",
    link: "#contacts",
  },
];

export const NavBar = () => {
  return (
    <div className="nav-bar nav-bar__container">
      <div className="nav-bar__logo"></div>
      <ul className="nav-bar__content">
        {headerContent.map((el) => (
          <li key={el.text} className="nav-bar__item">
            <a className="nav-bar__link" href={el.link}>{el.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
