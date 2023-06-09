import Logo from '../images/Logo.png';
import {useNavigate} from 'react-router-dom';

function Header(props){
    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }

    return(
        <div>
            <div className='my-header'>
                <img onClick={handleClick} style = {{height: "43px", margin: "10px"}} className='' src={Logo} alt='App Logo' />
                <button onClick = {props.onSubmit} className='mybutton'>Generate New Array</button>
                <a href='https://github.com/sagar1sharma/algo-visualizer'><img style={{height: "43px", margin: "10px"}} src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='git-logo'></img></a>
            </div>
            
        </div>
    );
}

export default Header;