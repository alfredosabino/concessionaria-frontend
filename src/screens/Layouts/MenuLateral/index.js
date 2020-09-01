import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStarHalfAlt, faTh, faFileInvoiceDollar, faDollarSign, faChartLine, faHandHoldingUsd, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


const MenuLateral = () => {

    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Dashboard
                    </NavText>
                </NavItem>
                <NavItem eventKey="avaliador">
                    <NavIcon>
                        <FontAwesomeIcon icon={faStarHalfAlt} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Avaliador
                    </NavText>
                </NavItem>
                <NavItem eventKey="canvas">
                    <NavIcon>
                        <FontAwesomeIcon icon={faTh} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Canvas
                    </NavText>
                </NavItem>
                <NavItem eventKey="planosdenegocios">
                    <NavIcon>
                        <FontAwesomeIcon icon={faFileInvoiceDollar} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Planos de Negócios
                    </NavText>
                </NavItem>
                <NavItem eventKey="gestaofinanceira">
                    <NavIcon>
                        <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Gestão Financeira
                    </NavText>
                </NavItem>
                <NavItem eventKey="escalabilidade">
                    <NavIcon>
                        <FontAwesomeIcon icon={faChartLine} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Escalabilidade
                    </NavText>
                </NavItem>
                <NavItem eventKey="investimentos">
                    <NavIcon>
                        <FontAwesomeIcon icon={faHandHoldingUsd} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Central de Investimentos
                    </NavText>
                </NavItem>
                <NavItem eventKey="startead">
                    <NavIcon>
                        <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Start EaD
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );

};

export default MenuLateral;