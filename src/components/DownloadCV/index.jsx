/* eslint-disable @next/next/no-img-element */
import React from "react";


const DownloadCV = () => { 
  return (
    <section className="clients section-padding" style={{background: '#f5f5f5'}}>

      
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign md-mb50">
            <div className="sec-head mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                
              </h6>
              <h3 className="wow mb-20 color-font">Download CV</h3>
             
            </div>
          </div>
          <div className="col-lg-8" style={{display: "flex",justifyContent: "space-evenly"}}>
            <div>
              <div className="row bord" style={{ padding: '20px 30px', marginTop: '-20px'}}>
              <button
                              type="submit"
                              className="nb butn bord curve mt-30"
                            >
                              <span style={{letterSpacing: '3px', fontSize: '30px'}}><a target="_blank" rel="noreferrer" href="https://shorturl.at/nsvwI" title="" download>DOWNLOAD</a></span>
                            </button>
              </div>
              <div className="row">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;
