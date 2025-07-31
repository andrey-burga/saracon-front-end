import useNotifications from "../hooks/useNotifications.js";
import Card from "../components/Card";

import Slider from "react-slick";

const Carousel = () => {
  const { notifications, loading } = useNotifications();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  if (loading) return <p className="text-center">Cargando alertas...</p>;
  if (notifications.length === 0) {
    return (
      <div className="text-center mt-4">
        <p className="alert alert-info">No hay notificaciones pendientes.</p>
      </div>
    );
  }
  if (notifications.length === 1) {
    const n = notifications[0];
    return <Card title={n.titulo} content={n.mensaje} />;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <Slider {...settings}>
          {notifications.map((notif) => (
            <Card
              key={notif.idNotificacion}
              title={notif.titulo}
              content={notif.mensaje}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
