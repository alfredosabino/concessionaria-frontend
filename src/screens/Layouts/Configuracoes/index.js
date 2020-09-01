import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/ContaActions';
import { Link, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children, logout, conta }) => {

    if (!conta) {
        return <Redirect to="/auth/login" />
    };

    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <div className="layout">
            <div className="">
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="collapse navbar-collapse" id="navbarTogglerMenu">
                            <div className="navbar-brand mr-0"
                                style={{
                                    paddingBottom: '2px',
                                    paddingTop: '2px',
                                    paddingLeft: '0px'
                                }}>
                                <Link to="/dashboard">
                                    <img src='https://pt.freelogodesign.org/Content/img/logo-colors-meanings/logos-oranges/logo-fld04.svg' height="40" alt="logo" />
                                </Link>
                            </div>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <div className="nav-link text-secondary">
                                        Marcas
                                        </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <Link className="text-secondary" to="/carros">Carros</Link>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logoutHandler}>
                                    <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                                    </button>
                            </form>
                        </div>
                    </nav>
                    <div className="container-fluid">{children}</div>
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    return { conta: state.conta.conta };
}

export default connect(mapStateToProps, { logout })(Layout);