import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        
        <nav className="navbar navbar-expand-lg  navbar_principal">
            <div className="container-fluid">
                <div>
                    <img src="../logo.jpg" className="logo rounded-circle" alt="Logo" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse acordeon " id="navbarSupportedContent">
                   <Link to= "/" className='nombre_tienda'><h1>Ciasola</h1></Link>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                            </a>
                            <ul className="dropdown-menu navbar_principal ">
                            <li><Link  className="dropdown-item" to="/category/zarcillos" >Zarcillos</Link></li>
                            <li><Link  className="dropdown-item" to="/category/anillo" >Anillos</Link></li>
                            <li><Link  className="dropdown-item" to="/category/lentes" >Lentes</Link></li>
                            <li><Link  className="dropdown-item" to="/category/cadena" >Cadenas</Link></li>

                            </ul>
                        </li>
                        
                        </ul>

                    </div>
                

            </div>
            <Link to= {"/cart"}>
             <CartWidget/>
            </Link>
      </nav>


   
           

     
    );

}

export default Navbar;