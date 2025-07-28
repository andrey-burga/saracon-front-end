 
import PageWrapper from "../components/PageWrapper";

import "../styles/Body.css";

import Carousel from "../components/Carousel";
import NoticiasPasadas from "../components/NoticiasPasadas";

const Body = () => {
  return (
    <PageWrapper>
      <div className="container-fluid general-body">
        <div className="alert-section">
          <h2 className="text-center">Alertas</h2>
          <p>
            Aquí puedes ver las últimas alertas y notificaciones importantes.
          </p>
        </div>
        <div className="content-section">
          <h2 className="text-center">Últimas Noticias</h2>
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
