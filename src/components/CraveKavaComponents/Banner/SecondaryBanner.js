import { MOMENT_BNR_IMG } from '@/values/Constants/ImageConstants'
import React from 'react'

export default function SecondaryBanner() {
  return (
    <section className="moment-crave-cava-main-sec">
    <div className="container">
      <div className="moment-crave-cava-inner-sec">
        <div className="bnr-img-moment-crave">
          <img src={MOMENT_BNR_IMG} alt="Moment Crave Kava" />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-9 col-sm-12">
            <div className="moment-crave-cava-inner-left-head">
              <h2>Elevate Your Moment with Crave Kava</h2>
              <a href="#" className="cmn-shopnow-btn-two">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
