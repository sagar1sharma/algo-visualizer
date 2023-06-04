import Header from '../components/AltHeader';
import {useState, useEffect} from 'react';
import linearSearch from '../algorithms/linearsearch';
import binarySearch from '../algorithms/binarysearch';
import mergeSort from '../algorithms/mergesort';

function Searchpage(){
    const [arr, setArr] = useState([]);

    function generate(){
        let a = [];
        for(let i = 0; i < 100; i++){
            a.push(5+Math.floor(Math.random()*500));
        }
        setArr(a);
    }

    useEffect(() => {
        generate();
    }, []);

    function animation(animations){
        for(let i = 0; i<animations.length; ++i) {
            let type = animations[i].type;
            let arrBars = document.getElementsByClassName("number-box");
            if(type === "comp") {
                let barOneIdx = animations[i].indices;
                let color = animations[i].color;
                let barOneStyle = arrBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                },  i*25);
            }
            
        }
    }
    
    function linearSearchClicked(){
        let animations = linearSearch(arr, 100);
        animation(animations);
    }

    function binarySearchClicked(){
        let [preanimations, sortedArr] = mergeSort(arr);
        setArr(sortedArr);
        let animations = binarySearch(arr, 100);
        animation(animations);
    }

    return(
        <div>
            <Header onSubmit = {generate}/>
            <div className="mainpage">


            <div className="number-container">
                {arr.map((number, index) => (
                <div key={index} >
                <div className="number-box" style={{ height: number+'px' }} />
                </div>))}
            </div>

                <div className="card" style={{padding: "50px"}}>
                    <div className='mybutton' onClick={linearSearchClicked} >
                        <h2>Linear Search</h2>
                    </div>
                    
                    <div className='mybutton' onClick={binarySearchClicked}>
                        <h2>Binary Search</h2> 
                    </div>
                </div>

                <div style={{textAlign: "center", color: "lightBrown"}}>
                    <h2>Target is always 100 for reference</h2>
                </div>
            </div>
        </div>
    )
}

export default Searchpage;