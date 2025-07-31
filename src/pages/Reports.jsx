import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Report.css";
import PageWrapper from "../components/PageWrapper";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import enviarReporte from "../hooks/reportRegister";

const Report = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    entidadReporta: {
      email: localStorage.getItem("username"),
    },
    tipoReporte: { idTipoReporte: "" },
    descripcion: "",
    fechaReporte: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "tipoReporte") {
      setFormData((prev) => ({
        ...prev,
        tipoReporte: { idTipoReporte: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enviarReporte(formData);
      alert("Reporte enviado con éxito");
      navigate("/");
    } catch (error) {
      alert("Hubo un problema al enviar el reporte");
    }
  };

  const serviceOptions = [
    { value: "", label: "Selecciona una opción", disabled: true },
    { value: "1", label: "Agua (Ecaas)" },
    { value: "2", label: "Luz (Enelar)" },
    { value: "3", label: "Internet" },
    { value: "4", label: "Gas" },
    { value: "5", label: "Robo" },
    { value: "6", label: "Accidente de Tránsito" },
  ];

  return (
    <PageWrapper>
      <div className="container-fluid report-container d-flex justify-content-center align-items-center py-5">
        <div className="report-form p-4">
          <h2 className="mb-4 tittle-card">Reportar un Problema</h2>
          <form onSubmit={handleSubmit}>
            <SelectInput
              label="Tipo de Servicio o Incidente"
              name="tipoReporte"
              value={formData.tipoReporte.idTipoReporte}
              onChange={handleChange}
              options={serviceOptions}
              required
            />

            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción del Problema
              </label>
              <textarea
                className="form-control"
                id="descripcion"
                name="descripcion"
                rows="4"
                value={formData.descripcion}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <TextInput
              label="Fecha del Reporte"
              name="fechaReporte"
              type="date"
              value={formData.fechaReporte}
              onChange={handleChange}
              required
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
