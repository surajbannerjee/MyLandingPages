import { CAVA_REFRESH_CARDS_IMG1, CAVA_REFRESH_CARDS_IMG2, DISCO_CRAVE_CARDS_IMG1, DISCO_CRAVE_CARDS_IMG2 } from '@/values/Constants/ImageConstants';
import Image from 'next/image';


export default function DiscoveryBoxSec() {
  const products1 = [
    {
      img: DISCO_CRAVE_CARDS_IMG1,
      text: "Energize Kava Boost",
    },
    {
      img: DISCO_CRAVE_CARDS_IMG2,
      text: "Calm Kava Serenity",
    },
    {
      img: DISCO_CRAVE_CARDS_IMG1,
      text: "Focus Kava Clarity",
    },
  ];
  return (
    <section className="discover-crave-main-sec" id="products">
      <div className="container">
        <div className="discover-crave-innner-sec">
          <div className="cmn-discover-crave-heading">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9 col-sm-12">
                <h2>Discover Your Crave</h2>
                <p>
                  Choose from our selection of premium kava with kratom shots,
                  crafted for those who seek more
                </p>
              </div>
            </div>
          </div>
          <div className="discover-crave-cards-inr">
            <div className="row">
              {products1.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="cmn-cards-disco-crave">
                    <figure>
                      <Image height={1000} width={2000} src={item.img} alt="Energize Kava Boost" />
                    </figure>
                    <h3>{item.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Crave Cava Section */}
        <div className="carve-cava-refresh-inr">
          <div className="row">
            {[
              {

                img: CAVA_REFRESH_CARDS_IMG1,
                text: "Revive Kava Refresh",
              },
              {
                img: CAVA_REFRESH_CARDS_IMG2,
                text: "Revive Kava Refresh",
              },
            ].map((item, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                <div className="cmn-cards-cava-refresh-crave">
                  <figure>
                    <Image height={1000} width={2000} src={item.img} alt="Revive Kava Refresh" />
                  </figure>
                  <h3>{item.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
