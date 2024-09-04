import "./Contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="contacts__title">contacts</div>

      <ul className="contacts__list">
        <li className="contacts__item">
          <div className="item__icon item__icon--telegram"></div>

          <a
            href="https://t.me/buri4ka"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__item--link"
          >
            telegram
          </a>
        </li>
        <li className="contacts__item">
          <div className="item__icon item__icon--instagram"></div>

          <a
            href="https://www.instagram.com/buri4ka/"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__item--link"
          >
            instagram
          </a>
        </li>
        <li className="contacts__item">
          <div className="item__icon item__icon--behance"></div>
          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__item--link"
          >
            behance
          </a>
        </li>
      </ul>
    </div>
  );
};
