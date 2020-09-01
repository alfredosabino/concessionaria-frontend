import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/ContaActions';
import { getFormData } from '../../helpers/form';

const Login = (props) => {
    const { login, conta } = props;

    if (conta) {
        return <Redirect to="/dashboard" />
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);
        login(data);
    };

    return (
        <div className="container h-100 pt-5">
            <div className="d-flex flex-column h-100 align-items-center">
                <h1 className="title text-primary">Login</h1>
                <form className="col-lg-8 border rounded p-5" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" name="senha" placeholder="Senha" required />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-block btn-round mt-3">Entrar</button>
                    </div>
                </form>
            </div>
            <div className="container text-center mt-5 pb-5">
                <div className="text-muted">Não tem cadastro?</div>
                <Link to="/auth/cadastro">Cadastre-se</Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        conta: state.conta.conta
    }
};

export default connect(mapStateToProps, { login })(Login);