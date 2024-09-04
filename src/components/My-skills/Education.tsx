import { BlockBg } from "../Block-bg";
import "./Education.scss";

const educationList = [
  {
    name: "BAZILIK school (SMM INTENSIVE)",
    year: 2017,
  },
  {
    name: "Alight motion",
    year: 2020,
  },
  {
    name: "KAVA SCHOOL \"Design and rule\"",
    year: 2023,
  },
  {
    name: "Visual Maker",
    year: 2023,
  },
  {
    name: "FIGMA advanced",
    year: 2024,
  },
];

export const Education = () => {
  return (
    <BlockBg title="education" id="education">
      <div className="education">
        <ul className="education__list">
          {educationList.map((el) => (
            <li className="education__item" key={el.name}>
              <div className="ed-item__icon"></div>
              <div className="ed-item__info">
                <div className="ed-item__info-name">{el.name}</div>
                <div className="ed-item__info-year">{el.year}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="skills__container">
          <div className="skills__title">my skills</div>
          <ul className="skills__list">
            <li className="sk-list__item">well-observed</li>
            <li className="sk-list__item">creativity</li>
            <li className="sk-list__item">literacy</li>
            <li className="sk-list__item">sticking to deadlines</li>
          </ul>
        </div>
      </div>
    </BlockBg>
  );
};
