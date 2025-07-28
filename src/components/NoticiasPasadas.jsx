import useNotificationsOld from "../hooks/useNotificationsOld";
import "../styles/NoticiasPasadas.css";

const NoticiasPasadas = () => {
  const { noticias, loading } = useNotificationsOld();

  if (loading)
    return <p className="text-center">Cargando noticias pasadas...</p>;

  if (noticias.length === 0) {
    return (
      <div className="text-center alert alert-info mt-3">
        No hay noticias pasadas disponibles.
      </div>
    );
  }

  return (
    <div className="news-pasadas-wrapper">
      <h2 className="text-center mb-3 text-white"> Noticias pasadas</h2>

      <div className="noticias-scroll">
        {noticias.map((noticia) => (
          <div key={noticia.idNotificacion} className="card-old-news mb-2">
            <div className="card card-slide shadow-sm">
              <div className="card-header py-2">
                <h6 className="card-title text-primary mb-0">
                  {noticia.titulo}
                </h6>
              </div>
              <div className="card-body small-card-body py-2">
                <p className="card-text small mb-1">{noticia.mensaje}</p>
              </div>
              <div className="card-footer text-end py-1">
                <small className="text-muted">
                  📅{" "}
                  {new Date(noticia.fechaNotificacion).toLocaleString("es-CO")}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasPasadas;
