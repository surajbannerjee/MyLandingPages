import Image from "next/image";

export default function HomeBanner() {
    return (
        <section className="homepage-banner-main-sec">
            <div className="bnr-sec-home">
                <Image height={500} width={800} src="/images/luxeInteriorsImages/homebnr-img1.png" alt="" />
            </div>
            <div className="container">
                <div className="homepage-bnr-inrsec">
                    <div className="row">
                        <div className="col-lg-6 col-md-9 col-sm-12">
                            <h1>Transform Your Space with Exquisite <strong className="interiorDecor">Interior Decor</strong></h1>
                            <p>Discover unique and stylish decor pieces to elevate your home.</p>
                            <div className="cmn-homebnr-btn-sec">
                                <a href="#" className="cmn-homebnr-btn-one">Shop Now</a>
                                <a href="#" className="cmn-homebnr-btn-two">Explore Collections<Image height={24} width={24} src="/images/luxeInteriorsImages/right-arrow-icon.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}