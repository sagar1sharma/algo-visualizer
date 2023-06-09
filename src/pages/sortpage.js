import Header from "../components/AltHeader";
import { useState, useEffect } from "react";
import selectionSort from "../algorithms/selectionsort";
import insertionSort from "../algorithms/insertionsort";
import bubbleSort from "../algorithms/bubblesort";
import mergeSort from "../algorithms/mergesort";

function Sortpage() {
  const [arr, setArr] = useState([]);

  function generate() {
    let a = [];
    for (let i = 0; i < 100; i++) {
      a.push(5 + Math.floor(Math.random() * 500));
    }
    setArr(a);
  }

  useEffect(() => {
    generate();
  }, []);

  function animation(animations, sortedArr) {
    for (let i = 0; i < animations.length; ++i) {
      let type = animations[i].type;
      let arrBars = document.getElementsByClassName("number-box");
      if (type === "comp") {
        let [barOneIdx, barTwoIdx] = animations[i].indices;
        let color = animations[i].color;
        let barOneStyle = arrBars[barOneIdx].style;
        let barTwoStyle = arrBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        let [barIdx, newHeight] = animations[i].indices;
        let barStyle = arrBars[barIdx].style;
        setTimeout(() => {
          barStyle.height = newHeight + "px";
        }, i * 1);
      }
    }
    setTimeout(() => {
      setArr(sortedArr);
    }, animations.length * 1);
  }

  function mergeSortClicked() {
    let [animations, sortedArr] = mergeSort(arr);
    animation(animations, sortedArr);
  }

  function insertionSortClicked() {
    let [animations, sortedArr] = insertionSort(arr);
    animation(animations, sortedArr);
  }

  function bubbleSortClicked() {
    let [animations, sortedArr] = bubbleSort(arr);
    animation(animations, sortedArr);
  }

  function selectionSortClicked() {
    let [animations, sortedArr] = selectionSort(arr);
    animation(animations, sortedArr);
  }
  return (
    <div>
      <Header onSubmit={generate} />

      <div className="mainpage">
        <div className="number-container">
          {arr.map((number, index) => (
            <div key={index}>
              <div className="number-box" style={{ height: number + "px" }} />
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: "50px" }}>
          <div className="mybutton" onClick={mergeSortClicked}>
            <h2>Merge Sort</h2>
          </div>

          <div className="mybutton" onClick={insertionSortClicked}>
            <h2>Insertion Sort</h2>
          </div>

          <div className="mybutton" onClick={selectionSortClicked}>
            <h2>Selection Sort</h2>
          </div>

          <div className="mybutton" onClick={bubbleSortClicked}>
            <h2>Bubble Sort</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sortpage;
