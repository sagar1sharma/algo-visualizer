import Sort from '../images/pngwing 1.png';
import Logo from '../images/Logo.png';
import ArrayData from './sorting/arraydata';
import { Navigate, useNavigate } from 'react-router-dom';

function Sortpage(){
    const navigate = useNavigate();

    function quickSortClicked(){
        navigate('/sorting');
    }

    function insertionSortClicked(){
        navigate('/sorting');
    }

    function selectionSortClicked(){
        navigate('/sorting')
    }

    function bubbleSortClicked(){
        navigate('/sorting')
    }

    return (
        <div>
            <div className='my-header'>
                <img style = {{height: "43px", margin: "10px"}} className='' src={Logo} alt='App Logo' />
                <a href='https://google.com'><img style={{height: "43px", margin: "10px"}} src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="git-logo"></img></a>
            </div>
            
            <div className="mainpage">
                {/* <h3 style={{textAlign: "center", fontSize: "50px"}}>Sorting</h3> */}

                <ArrayData/>

                <div className="card" style={{padding: "50px"}}>
                    <div className='individualCard' onClick={quickSortClicked}>
                        <img src = {Sort} alt="quickSort" />
                        <h2>Quick Sort</h2>
                    </div>
                    
                    <div className='individualCard' onClick={insertionSortClicked}>
                        <img src={Sort} alt="insertionSort" />
                        <h2>Insertion Sort</h2> 
                    </div>
                    
                    <div className='individualCard' onClick={selectionSortClicked}>
                        <img src = {Sort} alt="slectionSort" />
                        <h2>Selection Sort</h2>
                    </div>

                    <div className='individualCard' onClick={bubbleSortClicked}>
                        <img src = {Sort} alt="bubblekSort" />
                        <h2>Bubble Sort</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sortpage;