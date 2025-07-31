import { useState } from "react";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import useRegisterUser from "../hooks/useRegisterUser.js";

const { register } = useRegisterUser();
import { useNavigate } from "react-router-dom";

import "../styles/Register.css";

const entityOptions = [
  { value: "", label: "-- Selecciona un tipo --", disabled: true },
  { value: "1", label: "Persona Natural" },
  { value: "2", label: "Empresa" },
];

const identificationOptions = [
  { value: "", label: "-- Selecciona un tipo --", disabled: true },
  { value: "CedulaCiudadania", label: "Cédula de ciudadanía" },
  { value: "TarjetaIdentidad", label: "Tarjeta de identidad" },
  { value: "CedulaExtranjeria", label: "Cédula de extranjería" },
  { value: "Pasaporte", label: "Pasaporte" },
];

const genderOptions = [
  { value: "", label: "-- Selecciona un tipo --", disabled: true },
  { value: "M", label: "Masculino" },
  { value: "F", label: "Femenino" },
  { value: "O", label: "Otro" },
];

const Register = () => {
  const navigate = useNavigate();

  const [entityType, setEntityType] = useState("1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    document: "",
    docType: "",
    birthDate: "",
    gender: "",
    nit: "",
    businessName: "",
    sector: "",
    constitutionDate: "",
    password: "",
    direccion: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      return setError("Completa los campos obligatorios");
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return setError("Correo inválido");
    }
    if (formData.password.length < 6) {
      return setError("La contraseña debe tener al menos 6 caracteres");
    }
    if (entityType === "1") {
      if (formData.gender === "" || formData.docType === "") {
        return setError("Seleccione todos los campos");
      }
      if (!formData.gender || !formData.docType) {
        return setError("Seleccione todos los campos");
      }
    }
    // Opcional: valida antes de enviar
    if (!entityType) {
      console.log(entityType);
      return setError("Por favor selecciona un tipo de entidad.");
    }
    const payload = {
      entidad: {
        tipoEntidad: {
          idTipoEntidad: Number(entityType), // o parseInt, si prefieres
        },
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone,
        password: formData.password,
        direccion: formData.direccion,
      },
      personaNatural:
        entityType === "1"
          ? {
              documentoIdentidad: formData.document,
              tipoDocumento: formData.docType,
              fechaNacimiento: formData.birthDate || null,
              genero: formData.gender || null,
            }
          : null,
      empresa:
        entityType === "2"
          ? {
              nit: formData.nit,
              razonSocial: formData.businessName,
              sector: formData.sector || null,
              fechaConstitucion: formData.constitutionDate || null,
            }
          : null,
    };
    console.log("Payload a enviar:", payload);

    const result = await register(payload);
    if (result.success) {
      setSuccess("Registro exitoso");

      setTimeout(() => {
        navigate("/login"); // Redirige al login luego de 2 segundos
      }, 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <section className="register-container  ">
      <div className="register-card card">
        <div className="tittle-card text-center mb-4">
          <h2 className="text-center mb-4">Regístrate en Saravena Reportes</h2>
        </div>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        {success && (
          <div className="alert alert-success text-center">{success}</div>
        )}

        <form className="register-form" onSubmit={handleSubmit}>
          <SelectInput
            label="Tipo de Entidad"
            name="entityType"
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
            options={entityOptions}
          />

          <TextInput
            label="Nombre"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {entityType === "1" && (
            <>
              <SelectInput
                label="Tipo de identificación"
                name="docType"
                value={formData.docType}
                onChange={handleChange}
                options={identificationOptions}
              />

              <TextInput
                label="Numero de documento"
                name="document"
                value={formData.document}
                onChange={handleChange}
                required
              />
            </>
          )}
          {entityType === "2" && (
            <>
              <TextInput
                label="NIT"
                name="nit"
                value={formData.nit}
                onChange={handleChange}
                required
              />

              <TextInput
                label="Razón Social"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
              <TextInput
                label="Sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
              />
            </>
          )}

          <TextInput
            label="Correo"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <TextInput
            label="Teléfono"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <TextInput
            label="Direccion"
            name="direccion"
            type="text"
            value={formData.direccion}
            onChange={handleChange}
            required
          />

          {entityType === "1" && (
            <>
              <SelectInput
                label="Genero"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                options={genderOptions}
              />

              <TextInput
                label="fecha de nacimiento"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                type="date"
                required
              />
            </>
          )}

          {entityType === "2" && (
            <>
              <TextInput
                label="Fecha de Constitución"
                name="constitutionDate"
                type="date"
                value={formData.constitutionDate}
                onChange={handleChange}
              />
            </>
          )}

          <TextInput
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>

        <p className="text-center mt-3">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </div>
    </section>
  );
};

export default Register;
