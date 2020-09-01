import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../Layouts/Configuracoes';
import { getFormData } from '../../../helpers/form';
import { canvaCreate } from '../../../actions/CanvaActions';
import { Redirect, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const CanvasNovo = ({ canva, canvaCreate }) => {

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);
        canvaCreate(data);
    };

    if (canva) {
        return <Redirect to="/canvas/propostavalor" />
    };

    return (
        <Layout>
            <div className="clearfix">
                <h2 className="float-left" style={{ color: '#24b9d8' }}>
                    <strong>Novo Canvas</strong>
                </h2>
                <div className="float-right">
                    <Link to="/canvas/propostavalor" className="btn btn-primary rounded">
                        <FontAwesomeIcon icon={faUndoAlt} /> Voltar
                </Link>
                </div>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" name="label" />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="text" className="form-control" name="image" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Criar</button>
                    </div>
                </form>
            </div>
        </Layout>
    );

};

const mapStateToProps = (state) => {
    return { canvas: state.canvas.canva };
};

export default connect(mapStateToProps, { canvaCreate })(CanvasNovo)