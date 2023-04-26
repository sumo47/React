import React from 'react' //why we are importing React //* impr
import PropTypes from 'prop-types' //* impt


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">{props.about}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className={`form-control me-2 bg-${props.search} `} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                    <div className={`mx-3 form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.ChangeMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light mode</label>
                    </div>
                    <button className="btn btn-success m-2" onClick={props.GreenMode}>Green</button>
                    <button className="btn btn-danger" onClick={props.RedMode}>{`Red`}</button>
                </div>
            </div >
        </nav >
    )
}


Navbar.propType = {                                 // Rules to avoid error
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {                        //Default props
    title: "Set Title here",
    about: "Set about here"
}