import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layouts/Configuracoes';

const Dashboard = () => {
    return (
        <Layout>
            <div>
                <Link to="/carros">
                    <button className="btn btn-default col-4 pt-5 pb-5" style={{ fontSize: '30px' }}>Carros</button>
                </Link>
            </div>
        </Layout>
    );
};

export default Dashboard;