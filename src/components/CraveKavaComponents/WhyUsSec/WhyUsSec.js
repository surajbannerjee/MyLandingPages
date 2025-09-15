import { WHY_CHOOSE_INR_IMG1 } from '@/values/Constants/ImageConstants'


export default function WhyUsSec() {
  return (
    <div id='why-choose-us'>
      {/* Why Choose Section */}
      <section className="why-choose-signature-mainsec">
        <div className="container">
          <div className="why-choose-signature-inr">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="left-img-choose-signature">
                  <img src={WHY_CHOOSE_INR_IMG1} alt="Why Choose" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="right-heading-choose-signature">
                  <h2>Why Choose Crave Kava</h2>
                  <h3>Discover the powerful benefits of our premium kava shot</h3>
                  <ul className="cmn-ul-whychoose-home">
                    <li>Promotes relaxation without drowsiness</li>
                    <li>Enhances mood and mental clarity</li>
                    <li>Supports natural energy levels</li>
                  </ul>
                  <a href="#" className="cmn-learnmore-btn-one">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Signature Shots Section */}
      <section className="our-signature-shots-main-sec">
        <div className="container">
          <div className="our-signature-shots-inner">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="right-heading-choose-signature">
                  <h2>Our Signature Shots</h2>
                  <h3>Crafted with care, our kava shots deliver a perfect balance of potency and flavor</h3>
                  <a href="#" className="cmn-learnmore-btn-one">Explore More</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="left-img-choose-signature">
                  <img src={WHY_CHOOSE_INR_IMG1} alt="Signature Shots" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
