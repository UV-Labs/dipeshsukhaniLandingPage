/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                Recent Blockchain Dapps
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                {/* <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".brand">Branding</span>
                <span data-filter=".web">Mobile App</span>
                <span data-filter=".graphic">Creative</span> */}
              </div>
            </div>
          )}

          <div className="gallery full-width">
          <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://timeswap.io/`}>
                  <a rel="noreferrer" target="_blank" href="https://timeswap.io/" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/9.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Timeswap Labs</h6>
                <span>
                Smart Contract Developer
                </span>
              </div>
            </div>


            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://www.halodao.com/`}>
                  <a rel="noreferrer" target="_blank" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/4.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Halo DAO</h6>
                <span>
                Advised/Rendered services
                </span>
              </div>
            </div>


            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://www.enso.finance/`}>
                  <a rel="noreferrer" target="_blank" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Enso Finance</h6>
                <span>
                Advised/Rendered services
                  
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://www.agunity.com/`}>
                  <a rel="noreferrer" target="_blank" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/3.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>AgUnity</h6>
                <span>
                Advised/Rendered services
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://www.1x.exchange/`}>
                  <a rel="noreferrer" target="_blank" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/7.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>1exchange</h6>
                <span>
                Blockchain and Project Team Lead
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://volmex.finance/`}>
                  <a rel="noreferrer" target="_blank"  className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Volmex Finance</h6>
                <span>
                Advised/Rendered services
                </span>
              </div>
            </div>
            

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://www.infuzex.in`}>
                  <a rel="noreferrer" target="_blank" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/5.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>InfuzeX Ventures</h6>
                <span>
                  Advised/Rendered services
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://consensys.net/academy/`}>
                  <a rel="noreferrer" target="_blank" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/6.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Consensys Academy</h6>
                <span>
                Mentor | Blockchain Bootcamp
                </span>
              </div>
            </div>

            

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`https://zapper.fi/`}>
                  <a rel="noreferrer" target="_blank" className="imago wow">
                    <img className="workimg" src="/img/portfolio/portfolio/1/8.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Zapper</h6>
                <span>
                Founding Team Member
                </span>
              </div>
            </div>


           

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
