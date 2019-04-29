import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBBtn } from "mdbreact";

export class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapseID: ""
        }
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <div>
                <MDBNavbar color="blue-gradient" light expand="md">
                    <MDBContainer>
                    <MDBNavbarBrand>
                        <strong className="black-text">Particeep Studio</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active href={"#!"}>Acceuil</MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBBtn outline color={"elegant"}>Login</MDBBtn>
                            <MDBBtn outline color={"elegant"}>Register</MDBBtn>
                        </MDBNavbarNav>
                    </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        );
    }
}
