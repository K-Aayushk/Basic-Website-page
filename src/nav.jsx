import './nav.css';
import Logo from './assets/react.svg';


function nav(){
    return (
        <div className="navbar-heading">
            <img src={Logo} alt="LOGO" />
            <h2 id='logo-heading-title'>POPO'S PAGE</h2>
            <div className="listitems-container">
                <ul className="list-items-ul">
                    <li className="listitems">HOME</li>
                    <li className="listitems">ABOUT</li>
                </ul>
            </div>
            <div className="input-container">
                <input type="text" placeholder='SEARCH HERE'/>
                <button type="button">ENTER</button>
            </div>

        </div>

    );
}

export default nav;


