
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import hotspot from "../assets/hotspot.png";
import rsmLogo from "../assets/rsm.png";
import greatLearningLogo from "../assets/great.png";
import spinnyLogo from "../assets/spinny.png";
import grantThorntonLogo from "../assets/grant.png";
import collegeDekhoLogo from "../assets/college.png";
import wtwLogo from "../assets/wtw.png";
import veerji from "../assets/veerji.png";

const Clients = () => {

  const clients = [
    { name: "Hotspot", logo: hotspot },
    { name: "RSM", logo: rsmLogo },
    { name: "Great Learning", logo: greatLearningLogo },
    { name: "Spinny", logo: spinnyLogo },
    { name: "Grant Thornton", logo: grantThorntonLogo },
    { name: "CollegeDekho", logo: collegeDekhoLogo },
    { name: "Willis Towers Watson", logo: wtwLogo },
    { name: "Veerji", logo: veerji }
  ];

   return (
    <section id="clients" style={{ padding: "3rem 1rem" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "800",
          marginBottom: "2rem"
        }}
      >
        Our Clients
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        style={{ padding: "10px 0" }}
      >
        {clients.map((client, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={client.logo}
              alt={client.name}
              style={{
                width: "100%",
                maxWidth: "180px",     // ⭐ Bigger logos
                maxHeight: "90px",     // ⭐ Taller but still safe
                objectFit: "contain",  // ⭐ Never cropped
                transition: "transform .25s ease"
              }}
              className="client-logo"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .client-logo:hover {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

export default Clients;