import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './screens/Login';
import Cadastro from './screens/Cadastro'
import Dashboard from './screens/Dashboard';
import CanvasPV from './screens/Canvas';
import CanvasNovo from './screens/Canvas/Create';
import Carros from './screens/Carros';
import CarrosEdit from './screens/Carros/Edit';
import CarrosCreate from './screens/Carros/Create';

import { initConta } from './actions/ContaActions';

const App = ({ initConta }) => {

  useEffect(() => {
    initConta();
  }, [initConta]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/cadastro" component={Cadastro} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/canvas" component={CanvasPV} />
          <Route path="/canvas/novo" component={CanvasNovo} />
          <Route exact path="/carros" component={Carros} />
          <Route path='/carros/novo' component={CarrosCreate} />
          <Route path='/carros/editar/:id' component={CarrosEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return { conta: state.conta.conta };
};

export default connect(mapStateToProps, { initConta })(App);
