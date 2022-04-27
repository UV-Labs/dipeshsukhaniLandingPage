/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
              Recent Blockchain Dapps <br /> 
              </h3> 
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
            </div>
          </div>

          <div className="gallery full-width">

          <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Timeswap</h6>
                  <p>Fully decentralized AMM based money market protocol on Ethereum. It is a non-custodial, immutable, censorship-resistant, peer-to-pool protocol which works without oracles or liqduidators.</p>
                </div>
                <Link href={`https://timeswap.io/`}>
                  <a target="_blank" className="rota">
                    <img src="/img/portfolio/freelancer/6.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                <span>
                    Blockchain
                  </span>
                </div>
              </div>
            </div>

          <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Halo DAO</h6>
                  <p>HaloDAO Protocol is a decentralised application platform designed to provide stablecoins optimised swaps between each other and against other crypto assets via an automated market maker. It also has the function of enabling stablecoin lending markets.</p>
                </div>
                <Link href={`https://www.halodao.com/`}>
                  <a target="_blank" className="rota">
                    <img src="/img/portfolio/freelancer/4.png" alt="image" />
                    <div className="item-img-overlay"></div>  
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    Blockchain
                  </span> 
                </div>
              </div>
            </div>


            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Enso Finance</h6>
                  <p>Create social metastrategies with batch asset purchasing, yield farming, liquidity mining, tolerance band rebalancing, restructuring, flash swaps, collateralization, and arbitrage.</p>
                </div>
                <Link href={`https://www.enso.finance/`}>
                  <a target="_blank" className="rota">
                    <img src="/img/portfolio/freelancer/1.png" alt="image" />
                    <div className="item-img-overlay"></div>  
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    Blockchain
                  </span> 
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Zapper</h6>
                  <p>Fintech platform that manages all DeFi assets from one simple interface. It levels the playing field for decentralized finance newcomers and the most advanced investors by providing shortcuts to enter DeFi lending, automated yield farming, and liquidity provisions</p>
                </div>
                <Link href={`https://zapper.fi//`}>
                  <a target="_blank" className="rota">
                    <img src="/img/portfolio/freelancer/7.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                <span>
                    Blockchain
                  </span> 
                </div>
              </div>
            </div>


 
            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>1exchange</h6>
                  <p>1exchange is a global private securities exchange designed to help private companies raise capital and facilitate secondary trading. 1X is an investee of Singapore Exchange and is among the world&apos;s first regulated private securities exchanges.</p>
                </div>
                <Link href={`https://www.1x.exchange/`}>
                  <a target="_blank" className="rota">
                    <img src="/img/portfolio/freelancer/8.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                <span>
                    Blockchain
                  </span>
                </div>
              </div>
            </div>


            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Volmex Labs</h6>
                  <p>Shares the vision of an open, non-custodial decentralized finance ecosystem, offering their volatility indexes calculations and a series of smart contracts which can be interacted with from their website/app.</p>
                </div>
                <Link href={`https://volmex.finance/`}>
                  <a target="_blank" className="rota">
                    <img src="/img/portfolio/freelancer/2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                <span>
                    Blockchain
                  </span> 
                </div>
              </div>
            </div>

            

          

            {/* <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">App</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Creative</Link>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
