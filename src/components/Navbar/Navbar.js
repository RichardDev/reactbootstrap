import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-personalizado" id="">
                <div className="container">
                    <a className="navbar-brand" href="index.html">                        
                    </a>
                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">                        
                        {/*<span className="navbar-toggler-icon"></span> */}
                        <i class="fas fa-chevron-circle-down navbar-toggler-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="about.html" className="nav-link">Início</a></li>
                            <li className="nav-item"><a href="places.html" className="nav-link">Adicionar</a></li>
                            <li className="nav-item"><a href="places.html" className="nav-link">Listar</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }

}

export default Navbar;