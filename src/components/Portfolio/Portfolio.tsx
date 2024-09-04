import { useEffect, useRef, useState } from "react";
// import { useSwipe } from '../../hooks/useSwipe';

import { BlockBg } from "../Block-bg";
import "./Portfolio.scss";
import classNames from "classnames";

const slides = [
  {
    name: "project1",
    // bgColor: "blue",
    image: "./images/portfolio/portfolio-1.jpg",
    link: "/phones",
  },
  {
    name: "project2",
    // bgColor: "yellow",
    image: "./images/portfolio/portfolio-2.jpg",
    link: "/tablets",
  },
  {
    name: "project3",
    // bgColor: "orange",
    image: "./images/portfolio/portfolio-3.jpg",
    link: "/accessories",
  },
  {
    name: "project4",
    // bgColor: "red",
    image: "./img/banner-images/banner-accessories.png",
    link: "/accessories",
  },
  {
    name: "project5",
    bgColor: "purple",
    image: "./img/banner-images/banner-accessories.png",
    link: "/accessories",
  },
  {
    name: "project6",
    bgColor: "brown",
    image: "./img/banner-images/banner-accessories.png",
    link: "/accessories",
  },
];

type Props = {
  setModal: (link: string) => void;
};


export const Portfolio: React.FC<Props> = ({ setModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [paginationSlide, setPaginationSlide] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const width = container.scrollWidth;
        const newTranslate = Math.round(scrollLeft / (width / slides.length));
        setPaginationSlide(newTranslate);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <BlockBg title="portfolio" id="portfolio">
        <div className="portfolio">
          <div className="portfolio__window" ref={containerRef}>
            <div
              className="projects__container"
              style={{
                width: `calc(${slides.length} * ((100vw - 10vh) / 3))`,
              }}
            >
              {slides.map((el) => (
                <div
                  key={el.name}
                  className="project"
                  style={{ backgroundColor: `${el.bgColor}` }}
                  >
                  <img
                    className="project-image"
                    src={el.image}
                    alt={el.name}
                    onClick={() => setModal(el.image)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pagination">
            {slides.map((el, index) => {
              if (index !== 0 && index !== slides.length - 1) {
                return (
                  <div
                    key={el.name}
                    className={classNames("el", {
                      "el--active":
                        index === paginationSlide + 1,
                    })}
                  ></div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </BlockBg>
    </>
  );
};
