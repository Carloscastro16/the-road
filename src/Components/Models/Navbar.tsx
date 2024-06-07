
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar_custom">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">The road</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Explora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Para Desarrolladores</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Inicia Sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Unete</a>
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
                    <a className="nav-link" aria-current="page" href="#">Explora</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Para Desarrolladores</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Inicia Sesión</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Unete</a>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
