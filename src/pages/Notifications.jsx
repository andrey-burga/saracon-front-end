import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Report.css";
import PageWrapper from "../components/PageWrapper";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import reportRegister from "../hooks/reportRegister";

const Report = () => {
  const navigate = useNavigate();

  const [minFecha, setMinFecha] = useState("");

  useEffect(() => {
    const obtenerFechaLocal = () => {
      const hoy = new Date();
      hoy.setMinutes(hoy.getMinutes() - hoy.getTimezoneOffset());
      return hoy.toISOString().split("T")[0];
    };
    setMinFecha(obtenerFechaLocal());
  }, []);

  const [formData, setFormData] = useState({
    entidad: {
      email: localStorage.getItem("username"),
    },
    tipoNotificacion: "",
    mensaje: "",
    fechaVencimiento: "",
    titulo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reportRegister(formData);
      alert("Reporte enviado con éxito");
      navigate("/");
    } catch (error) {
      alert("Hubo un problema al enviar el reporte");
    }
  };

  const tipoNotificacionOptions = [
    { value: "", label: "Selecciona tipo de notificación", disabled: true },
    { value: "Mantenimiento", label: "Mantenimiento" },
    { value: "Corte", label: "Corte" },
    { value: "Cierre", label: "Cierre" },
    { value: "Otro", label: "Otro" },
  ];

  return (
    <PageWrapper>
      <div className="container-fluid report-container d-flex justify-content-center align-items-center py-5">
        <div className="report-form">
          <h2 className="mb-4 tittle-card">Registrar una notificación</h2>
          <form onSubmit={handleSubmit}>
            <SelectInput
              label="Tipo de Notificación"
              name="tipoNotificacion"
              options={tipoNotificacionOptions}
              value={formData.tipoNotificacion}
              onChange={handleChange}
              required
            />

            <TextInput
              label="Título de la notificación"
              name="titulo"
              type="text"
              value={formData.titulo}
              onChange={handleChange}
              required
            />

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">
                Descripción del Problema
              </label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <TextInput
              label="Fecha de Vencimiento"
              name="fechaVencimiento"
              type="datetime-local"
              value={formData.fechaVencimiento}
              onChange={handleChange}
              required
              min={minFecha}
            />

            <div className="d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn btn-secondary m-1"
                onClick={() => navigate(-1)}
              >
                Regresar
              </button>
              <button type="submit" className="btn btn-primary m-1">
                Enviar Reporte
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Report;
