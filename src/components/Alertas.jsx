import useReportes from "../hooks/useReportes";

import "../styles/NoticiasPasadas.css";

const NoticiasPasadas = () => {
  const { Alertas, loading } = useReportes();

  if (loading)
    return <p className="text-center">Cargando Notificaciones pasadas...</p>;

  if (Alertas.length === 0) {
    return (
      <div className="text-center alert alert-info mt-3">
        No hay Notificaciones pasadas disponibles.
      </div>
    );
  }

  return (
    <div className="news-pasadas-wrapper">
      <h2 className="text-center mb-3 text-white"> Alertas</h2>

      <div className="noticias-scroll">
        {Alertas.map((Alertas) => (
          <div key={Alertas.idReporte} className="card-old-news mb-2">
            <div className="card card-slide shadow-sm">
              <div className="card-header py-2">
                <h6 className="card-title text-primary mb-0">
                  Alertas sobre {Alertas.tipoReporte.descripcion}
                </h6>
              </div>
              <div className="card-body small-card-body py-2">
                <p className="card-text small mb-1">{Alertas.descripcion}</p>
              </div>
              <div className="card-footer text-end py-1">
                <small className="text-muted">
                  📅 {new Date(Alertas.fechaReporte).toLocaleString("es-CO")}
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
