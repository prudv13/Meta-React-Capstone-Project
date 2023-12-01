import LogoImg from '../assets/LogoImg.png'

const Nav = () => {

    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={LogoImg} alt='logo' width={200} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item navlink">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item navlink">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item navlink">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item navlink">
                    <a className="nav-link">Menu</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav;