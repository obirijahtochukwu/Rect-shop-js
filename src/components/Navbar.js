import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
 render() {
  return (
   <Nav className="navbar fixed-top navbar-expand-sm navbar-dark px-sm-5">
    <Link to='/'>
     <i className="fa fa-phone navbar-brand" style={{fontSize:'30px'}}></i>
    </Link>
    <ul className="navbar-nav align-items-center" style={{fontSize:'25px'}}>
     <li className="nav-item ml-5">
      <Link to='/' className='nav-link'>
       products
      </Link>
     </li>
    </ul>
    <Link to='/cart' className='ml-auto'>
     <ButtonContainer>
      <span className="mr-2">
       <i className="fa fa-cart-plus" />
      </span>
      my cart
     </ButtonContainer>
    </Link>
   </Nav>
  )
 }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;