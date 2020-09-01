import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import Layout from '../Layouts/Configuracoes';
import { canvaList, setCanvaToRemove } from '../../actions/CanvaActions';

const Canvas = ({ canvas, canvaCreate, canvaRemove, canvaToRemove, canvaList, setCanvaToRemove }) => {

    useEffect(() => {
        canvaList();
    }, [canvaList]);

    const cancelDelete = (e) => setCanvaToRemove(null);
    const confirmDelete = (e) => canvaRemove ? canvaRemove(canvaRemove) : null;

    return (
        <Layout>
            <div className="clearfix">
                <h2 className="float-left" style={{ color: '#24b9d8' }}>
                    <strong>Canvas Proposta de Valor</strong>
                </h2>
                <div className="float-right">
                    <Link to="/canvas/novo" className="btn btn-default rounded">
                        <FontAwesomeIcon icon={faPlus} /> Novo
                    </Link>
                </div>
            </div>
            <div className="row">
                {canvas && canvas.length ? canvas.map((canva) => {

                    const deleteClick = (e) => setCanvaToRemove(canvas);
                    const data = new Date(canva.createdAt).toLocaleDateString('pt-br');

                    return (
                        <div key={canva.id} className="pb-2 pt-2 pl-3 pr-3 d-flex justify-content-between" >
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={canva.image} alt={canva.label} height="200" />
                                <div className="text-right pr-3" style={{ fontSize: '24px' }}>
                                    <small className="text-muted">Ultima atulização {data}</small>
                                </div>
                                <div className="card-body p-0 pt-2">
                                    <h5 className="card-title text-center text-primary">{canva.label}</h5>
                                </div>
                                <div className="clearfix float-right pr-2">
                                    <Link to={`/canvas/editar/${canva.id}`} className="btn btn-outline-primary">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <button className="btn btn-danger" onClick={deleteClick}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }) : null}
            </div>

            {canvaToRemove ? (
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
        canvas: state.canvas.canva,
        canvaToRemove: state.canvas.canvaToRemove
    };
};

export default connect(mapStateToProps, { canvaList, setCanvaToRemove })(Canvas);