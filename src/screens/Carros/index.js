import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from '../Layouts/Configuracoes';
import { carroList, setCarroToRemove } from '../../actions/CarroActions';

const Carros = ({ carros, carroList, carroToRemove, carroRemove, setCarroToRemove }) => {

    useEffect(() => {
        carroList();
    }, [carroList]);


    const cancelDelete = (e) => setCarroToRemove(null);
    const confirmDelete = (e) => carroRemove ? carroRemove(carroRemove) : null;

    return (
        <Layout>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Carros</li>
                </ol>
            </nav>
            <div className="clearfix">
                <h4 className="float-left text-muted mt-4">
                    <strong>Todos os Carros</strong>
                </h4>
                <div className="float-right">
                    <Link to="/carros/novo" className="btn btn-default">Novo Carro</Link>
                </div>
            </div>
            <div className="row">
                {carros && carros.length ? carros.map((carro) => {

                    const valor = carro.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                    return (
                        <div key={carro.id} className="pb-2 pt-2 pl-3 pr-3 d-flex justify-content-center col-lg-3 col-md-4 col-sm-6 col-12" >
                            <Link to={`/carros/editar/${carro.id}`}>
                                <div className="card" style={{ width: '16rem' }}>
                                    <img className="card-img-top" src={carro.image} alt={carro.modelo} height="200" />
                                    <div className="card-body p-0 pt-2 pr-2 pl-2">
                                        <p className="card-title text-primary mb-0 text-uppercase font-weight-bold" style={{ fontSize: '14px' }}>{carro.marca} {carro.modelo}</p>
                                        <p className="card-text text-muted text-uppercase pb-0 mb-0" style={{ fontSize: '14px', height: '60px' }}>
                                            {carro.versao} {carro.portas} {carro.combustivel} {carro.cambio}
                                        </p>
                                        <div className="d-flex flex-column pb-0">
                                            <h4 className="font-weight-normal text-muted mb-1 mt-0">
                                                {valor}
                                            </h4>
                                            <div className="clearfix">
                                                <p className="text-muted float-left mb-2" style={{ fontSize: '14px' }}>{carro.ano}</p>
                                                <p className="text-muted float-right mb-2" style={{ fontSize: '14px' }}>{carro.quilometragem} km</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                }) : null}
            </div>

            {carroToRemove ? (
                <div className="alert alert-danger rounded float-center shadow-bold">
                    <h4 className="alert-heading">Confirmar Exclusão!</h4>
                    <p>Você tem certeza que deseja excluir, essa ação não terá retorno.</p>
                    <br />
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-light" onClick={cancelDelete}>Cancelar</button>
                        <button className="btn btn-danger" onClick={confirmDelete}>Excluir</button>
                    </div>
                </div>
            ) : null}

        </Layout >
    );
};

const mapStateToProps = (state) => {
    return {
        carros: state.carro.carros,
        carroToRemove: state.carro.carroToRemove
    };
};

export default connect(mapStateToProps, { carroList, setCarroToRemove })(Carros)