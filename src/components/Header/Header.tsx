import { useEffect, useState } from "react";
import { NavBar } from "../NavBar";
import "./Header.scss";
import classNames from "classnames";

const servicesData = [
  { id: 1, name: "Developing brand style" },
  { id: 2, name: "Visuals for social media" },
  { id: 3, name: "Creating stories" },
  { id: 4, name: "Developing marketing creatives" },
  { id: 5, name: "Creating posters, business cards, certificates, etc." },
];

export const Header = () => {
  // const [currentService, setCurrentService] = useState(1);
  const [slidesOrder, setSlidesOrder] = useState([
    servicesData.length - 1,
    0,
    1,
  ]);

  const [isHoverServices, setIsHoverServices] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handelMoveSlides = () => {
    setSlidesOrder((prev) => {
      const lastIndex = servicesData.length - 1;

      return prev.map((x) => {
        if (x === lastIndex) {
          return 0;
        }

        return x + 1;
      });
    });
  };

  useEffect(() => {
    if (!isHoverServices && !intervalId) {
      const id = setInterval(() => {
        handelMoveSlides();
      }, 3000);
      setIntervalId(id);
    } else if (intervalId && isHoverServices) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    // const intervalId = setInterval(() => {
    //   handelMoveSlides();
    // }, 4000);

    // return () => clearInterval(intervalId);
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHoverServices, intervalId]);

  return (
    <div className="header">
      {/* <button onClick={handelMoveSlides}>move</button> */}
      <div className="header__inside-container">
        <NavBar />
        <div className="header__overlay"></div>
        <div className="header__title header__title--left">your</div>
        <div className="header__title header__title--right">designer</div>
        <div className="header__subtitle">burika marina</div>
        <div
          className="header__services"
          // onMouseEnter={() => setIsHoverServices(true)}
          // onMouseLeave={() => setIsHoverServices(false)}
        >
          <div className="services__top">
            <div className="services__number">{`[ 0${
              slidesOrder[1] + 1
            } ]`}</div>
            <div
              className={classNames("services__value", {
                "services__value--hover": isHoverServices,
              })}
            >
              {isHoverServices
                ? servicesData.map((el) => (
                    <div className="services__item--hover">{el.name}</div>
                  ))
                : servicesData.map((el, index) => (
                    <div
                      key={el.id}
                      className={classNames("services__item", {
                        "services__item--active": index === slidesOrder[1],
                        "services__item--prev": index === slidesOrder[0],
                        "services__item--next": index === slidesOrder[2],
                      })}
                    >
                      {el.name}
                    </div>
                  ))}
            </div>
          </div>

          <div className="services__bottom">
            <div className="services__pagination">
              {servicesData.map((el, index) => (
                <div
                  key={el.id}
                  className={classNames("pagination-item", {
                    "pagination-item--active": slidesOrder[1] === index,
                  })}
                ></div>
              ))}
            </div>
            <div
              className="services__view-all"
              onMouseEnter={() => setIsHoverServices(true)}
              onMouseLeave={() => setIsHoverServices(false)}
            >
              view all services
            </div>
          </div>

          {/* <div className="pagination__container">
            <div className="pagination__number">{`[ 0${
              slidesOrder[1] + 1
            } ]`}</div>
            <div className="pagination__items">
              {servicesData.map((el, index) => (
                <div
                  key={el.id}
                  className={classNames("pagination-item", {
                    "pagination-item--active": slidesOrder[1] === index,
                  })}
                ></div>
              ))}
            </div>
          </div>

          <div className="services__container">
            <div
              className={classNames("services__value", {
                "services__value--hover": isHoverServices,
              })}
            >
              {isHoverServices
                ? servicesData.map((el) => (
                    <div className="services__item--hover">{el.name}</div>
                  ))
                : servicesData.map((el, index) => (
                    <div
                      key={el.id}
                      className={classNames("services__item", {
                        "services__item--active": index === slidesOrder[1],
                        "services__item--prev": index === slidesOrder[0],
                        "services__item--next": index === slidesOrder[2],
                      })}
                    >
                      {el.name}
                    </div>
                  ))}
            </div>
            <div
              className="services__view-all"
              onMouseEnter={() => setIsHoverServices(true)}
              onMouseLeave={() => setIsHoverServices(false)}
            >
              view all =^
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
