import React, { useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../Layouts/Configuracoes';
import FormGroup from '../../../component/FormGroup';
import Img from '../../../component/Img';
import Title from '../../../component/Title';

import { carroGet, carroUpdate, carroClear } from '../../../actions/CarroActions';
import { getFormData } from '../../../helpers/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

const CarrosEdit = ({ carro, carroGet, carroUpdate, carroClear }) => {
    const { id } = useParams();

    useEffect(() => {
        carroGet(id);

        return () => {
            carroClear();
        };
    }, [id, carroGet, carroClear]);

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);
        carroUpdate(id, data);
    };

    return (
        <Layout>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/carros">Carros</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Editar</li>
                </ol>
            </nav>
            <div className="clearfix">
                <h4 className="float-left text-muted mt-4 d-flex align-items-center">
                    <strong>
                        Editar Carro <Title
                            name="marca" data={carro} value="marca"
                        /> <Title
                            name="modelo" data={carro} value="modelo"
                        /> <Title
                            name="versao" data={carro} value="versao"
                        /> <span className="text-default"> </span> <span className="text-uppercase"><Title
                            name="combustivel" data={carro} value="combustivel"
                        /></span> <span className="text-default">-</span> <Title
                            name="ano" data={carro} value="ano"
                        />
                    </strong>
                </h4>
                <div className="float-right d-flex align-items-center">
                    <Link to="/carros" className="btn btn-primary">
                        <FontAwesomeIcon icon={faUndoAlt} /> Voltar
                    </Link>
                </div>
            </div>
            <div className="container-fluid">
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-3">
                            <Img src="image" alt="image" data={carro} />
                            <FormGroup name="image" data={carro} type="text" />
                        </div>
                        <div className="col border rounded p-4">
                            <div className="row">
                                <div className="col">
                                    <FormGroup label="Tipo" name="tipo" data={carro} type="text" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Marca" name="marca" data={carro} type="text" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Modelo" name="modelo" data={carro} type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormGroup label="Versao" name="versao" data={carro} type="text" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Cambio" name="cambio" data={carro} type="text" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Carroceria" name="carroceria" data={carro} type="text" />
                                </div>
                                <div className="col-2">
                                    <FormGroup label="Porta" name="portas" data={carro} type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormGroup label="Combustivel" name="combustivel" data={carro} type="text" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Cor" name="cor" data={carro} type="text" />
                                </div>
                                <div className="col-2">
                                    <FormGroup label="Ano" name="ano" data={carro} type="text" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Placa" name="placa" data={carro} type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormGroup label="Quilometragem" name="quilometragem" data={carro} type="text" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Preco" name="preco" data={carro} type="number" />
                                </div>
                                <div className="col">
                                    <FormGroup label="Conclusao" name="conclusao" data={carro} type="text" />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-default float-right">
                                    <FontAwesomeIcon icon={faCheck} /> Atualizar
                        </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return { carro: state.carro.carro }
};

export default connect(mapStateToProps, { carroGet, carroUpdate, carroClear })(CarrosEdit)