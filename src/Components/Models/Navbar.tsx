
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar_custom">
      <div className="container-fluid">

        <p className="navbar-brand">The road</p>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p className="nav-link" aria-current="page">Explora</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" aria-current="page">Productos</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" aria-current="page">Para Desarrolladores</p>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p className="nav-link" aria-current="page">Inicia Sesión</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" aria-current="page">Unete</p>
            </li>
          </ul>
        </div>

        <div className="offcanvas-lg offcanvas-start d-lg-none" tabIndex={-1} id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">The road</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <p className="nav-link" aria-current="page">Explora</p>
                    </li>
                    <li className="nav-item">
                    <p className="nav-link" aria-current="page">Productos</p>
                    </li>
                    <li className="nav-item">
                    <p className="nav-link" aria-current="page">Para Desarrolladores</p>
                    </li>
                    <li className="nav-item">
                    <p className="nav-link" aria-current="page">Inicia Sesión</p>
                    </li>
                    <li className="nav-item">
                    <p className="nav-link" aria-current="page">Unete</p>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
