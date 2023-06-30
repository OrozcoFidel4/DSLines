import './App.css'
import logoDs from './assets/images/DS-LINES2.png'

export function navbar() {
    return ( 
        
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <div className="container-fluid centrar">
          <a className="navbar-brand">
            <img src={logoDs} alt="Logo" className="m-3 logoDSnav" />
          </a>
        </div>
      </nav>
      
     );
}

export default navbar;