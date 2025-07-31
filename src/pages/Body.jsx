import PageWrapper from "../components/PageWrapper";

import "../styles/Body.css";

import Carousel from "../components/Carousel";
import NoticiasPasadas from "../components/NoticiasPasadas";
import Alertas from "../components/Alertas";

const Body = () => {
  return (
    <PageWrapper>
      <div className="container-fluid general-body">
        <div className="alert-section">
          <Alertas />
        </div>
        <div className="content-section">
          <h2 className="text-center">Últimas Notificaciones</h2>
          <Carousel />
        </div>
        <div className="news-section">
          <NoticiasPasadas />
        </div>
      </div>
    </PageWrapper>
  );
};
export default Body;
