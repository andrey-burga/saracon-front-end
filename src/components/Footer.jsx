import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start ">
      <div className="container p-2 pb-0 ">
        <form action="">
          <div className="col-auto mb-2 mb-md-0">
            <p className="pt-2 text-start text-white">
              <strong>Recibe nuestro boletín </strong>
            </p>
          </div>

          <div className="row footer-row-inline">
            <div className="col-md-3 col-10 mb-4 mb-md-0 tex">
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form5Example22"
                  className="form-control"
                  placeholder="Correo electrónico"
                />
              </div>
            </div>

            <div className="col-auto mb-4 mb-md-0">
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-primary mb-4"
              >
                Subscribete
              </button>
            </div>

            {/** 
              <div className="text-center ">
                <span className="text-white" style={{ fontSize: "14px" }}>
                  &copy; 2020 Copyright: Santiago Acevedo
                </span>
              </div>
            */}
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
