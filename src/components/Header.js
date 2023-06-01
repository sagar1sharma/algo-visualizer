import Logo from '../images/Logo.png';

function Header(){
    return(
        <div>
            <div className='my-header'>
                <img style = {{height: "43px", margin: "10px"}} className='' src={Logo} alt='App Logo' />
                <a href='https://google.com'><img style={{height: "43px", margin: "10px"}} src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'></img></a>
            </div>
            
        </div>
    );
}

export default Header;