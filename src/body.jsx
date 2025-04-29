import './body.css';

function body(){
    return(
        <div className="body-container">
            <div className="namelogin">
                <h3>FULL NAME:</h3>
                <input type="text" placeholder='ENTER NAME'/>
                <h3>EMAIL:</h3>
                <input type="text" placeholder='ENTER E-MAIL'/>
                <h3>PHONE NUMBER:</h3>
                <input type="text" placeholder='ENTER PHONE NUMBER'/>
                <button type="button">LOGIN</button>
                <button type="button">SIGNUP</button>
            </div>
        </div>

    );
}

export default body;
