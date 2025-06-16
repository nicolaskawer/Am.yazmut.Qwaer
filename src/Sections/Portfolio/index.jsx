import React, { useState } from "react";
import "./portfolio.css";
import { portfolio } from "../../data";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { useAccessibility } from "../../accessibility";
const Portfolio = () => {
  useAccessibility();
  const [isClick, setClick] = useState(false);
  const [page, setPage] = useState();
  const [index, setIndex] = useState(0);
  const [collec, setCollec] = useState();
  const [indexState, setIndexState] = useState(0);

  function getTheProtfoliyo(e, i) {
    if (e) {
      console.log(e, i);
      setClick(!isClick);
      setIndexState(0);
      setPage({ pageinfo: e, index: i });
      setCollec({ collecInfo: e.collections, i: 0 });
      console.log("here", page);
    } else {
      setClick(false);
    }
  }
  function goForwrrd(p) {
    if (p.pageinfo.length <= p.i) {
      setPage({ pageinfo: p.pageinfo.collections[0], index: 0 });
      return;
    }

    setPage({ pageinfo: portfolio[index], index: index + 1 });
  }

  function goFront(i) {
    if (page.pageinfo.collections.length <= i - 1) setIndexState(0);
    setIndexState(i + 1);
  }

  return (
    <section id="portfolio">
      <div className="section__header">
        <h3 className="sub__heading">יצירת חללים, בניית חלומות </h3>
        <p className="description">
          חקור את הפורטפוליו שלנו כדי לראות כיצד אנו הופכים חזונות לחללים
          איכותיים ומעוררי השראה, מבתי יוקרה ועד מבנים מסחריים.
        </p>

        <div className="portfolio__container">
          {portfolio.map((item, i) => (
            <div
              onClick={() => {
                getTheProtfoliyo(item, i);
              }}
              className="flex portfolio"
              key={i}
            >
              <div className="image__container">
                <img src={item.image} alt="" />
              </div>
              <div className="details">
                <h4 className="title">{item.title}</h4>
                <p className="line__clamp__2 description">{item.description}</p>
                <div className="flex date__category">
                  <p className="date">{item.date}</p>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isClick ? (
        <div className="screen">
          <div className="squer">
            <img
              className="img"
              src={page.pageinfo.collections[indexState]}
              alt=""
            />
            <FaArrowRight
              onClick={() => {
                goFront(indexState);
              }}
            >
              קדימה
            </FaArrowRight>

            <button>
              <FaArrowLeft /> חזור
            </button>
            <button>
              <FaTimes /> סגור
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Portfolio;
