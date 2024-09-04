import { Header } from "./components/Header";
import "./App.scss";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";
import { Education } from "./components/My-skills";
import { Contacts } from "./components/Contacts";
import { useState } from "react";
import classNames from "classnames";

export const App = () => {
  const [modalImage, setModalImage] = useState('');

  console.log(modalImage);

  return (
    <>
      <div className="container-bg">
        <div className={classNames('portfolio__modal', {'portfolio__modal--active': modalImage})} onClick={() => setModalImage('')}>
          <img className={classNames('modal__content', {'modal__content--active': modalImage})} src={modalImage} alt="project" />
        </div>
        <Header />
        <AboutMe />
        <Portfolio setModal={setModalImage} />
        <Education />
        <Contacts />

      </div>
    </>
  );
};
