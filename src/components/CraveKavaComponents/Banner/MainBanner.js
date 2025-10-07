import { BNR_HOME_IMG1, FACEBOOK_ICON1, PINTEREST_ICON1, TWITTER_ICON1 } from '@/values/Constants/ImageConstants'
import Image from 'next/image'
import React from 'react'

export default function MainBanner() {
  return (
    <section className="homebanner-main-sec">
      {/* Banner image */}
      <div className="bnr-img-homebnr">
        <Image height={1000} width={2000} src={BNR_HOME_IMG1} alt="Banner" />
      </div>
      {/* Social link banner */}
      <div className="social-icons-homepagebanner">
        <a href="#"><Image height={500} width={500} src={FACEBOOK_ICON1} alt="Facebook" /></a>
        <a href="#"><Image height={500} width={500} src={PINTEREST_ICON1} alt="Pinterest" /></a>
        <a href="#"><Image height={500} width={500} src={TWITTER_ICON1} alt="Twitter" /></a>
      </div>
      <div className="container">
        <div className="homebnr-inr-sec">
          <div className="row">
            <div className="col-lg-6 col-md-9 col-sm-12">
              <div className="left-homebnr-heading-elevateinr">
                <h1>Elevate Your Mind, Energize Your Body</h1>
                <p>Experience the unique blend of kava and kratom for a balanced boost</p>
                <a href="#" className="cmn-shop-now-btn-one">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
