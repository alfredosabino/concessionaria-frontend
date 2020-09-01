import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { cadastro } from '../../actions/ContaActions';
import { getFormData } from '../../helpers/form';

const Cadastro = (props) => {
    const { cadastro, conta } = props;
    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);
        cadastro(data);
    };

    if (conta) {
        return <Redirect to="/dashboard" />
    };

    return (
        <div className="container h-100 pt-5">
            <div className="d-flex flex-column h-100 align-items-center">
                <h1 className="title text-primary">Cadastro</h1>
                <form className="col-lg-10 border rounded p-5" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control" name="nome" placeholder="Nome Completo" required />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" className="form-control" name="senha" placeholder="Senha" required />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Confirmação de Senha</label>
                                <input type="password" className="form-control" name="confirmacao_senha" placeholder="Confirmação de Senha" required />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                        <button className="btn btn-primary btn-block btn-round mt-3">Cadastrar</button>
                    </div>
                </form>
            </div>
            <div className="container text-center pt-5 pb-5">
                <div className="text-muted">Já possuo cadastro?</div>
                <Link to="/auth/login">Fazer Login</Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        conta: state.conta.conta
    }
}

export default connect(mapStateToProps, { cadastro })(Cadastro);