/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Latest</h6>
              <h3>Blog Posts</h3>
              {/* <p>
                We provide company and finance service for startups and company
                business.
              </p> */}
              <Link href="blog-list/blog-list-light/">
                <a>
                  <span>More Blog Posts</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
          <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/3a.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>23</i> March 2022
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="https://medium.com/uv-labs/web3-should-i-use-infura-alchemy-or-run-a-node-5311a13d173">
                      <a className="tag">
                        <span>Medium</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="https://medium.com/uv-labs/web3-should-i-use-infura-alchemy-or-run-a-node-5311a13d173">
                      <a>
                      Web3: Should I use Infura / Alchemy or Run a Node?
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog/2a.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="https://medium.com/uv-labs/creating-and-deploying-your-first-smart-contract-466b4d4784e2">
                      <a className="date">
                        <span>
                          <i>28</i> March 2022
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="https://medium.com/uv-labs/creating-and-deploying-your-first-smart-contract-466b4d4784e2">
                      <a className="tag">
                        <span>Medium</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                      Creating and Deploying your first Smart Contract
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/1a.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a className="date">
                        <span>
                          <i>23</i> February 2020
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a className="tag">
                        <span>DEV</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a>
                      Flash Loans | Make profit in almost 14 secs.
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
      {/* <div className="line bottom left"></div> */}
    </section>
  );
};

export default Blogs2;
