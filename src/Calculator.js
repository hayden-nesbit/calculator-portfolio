import React, {useState} from 'react'
import './Calculator.css'

function Calculator() {

    // const [number, setNumber] = useState([]);
    // const [view, setView] = useState("")

    const [numStr, setNumStr] = useState("0");
    const [display, setDisplay] = useState("0");
    const [operator, setOperator] = useState("");
    const [firstNum, setFirstNum] = useState("0");
    const [secondNum, setSecondNum] = useState("0");

    console.log({numStr})
    console.log({firstNum})
    console.log({operator})
    console.log({secondNum})
    console.log({display})
    
    
    let buttons = [
        "C", "", "%", "/",
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", "", ".", "="
    ]


    function calculate() {

        
      let setMath = operator === "x" ? firstNum * secondNum : 
                    operator === "+" ? +firstNum + +secondNum :
                    operator === "-" ? firstNum - secondNum :
                    operator === "/" ? firstNum / secondNum : null

       setDisplay(setMath.toString())
       setNumStr(setMath.toString())
       setFirstNum(setMath.toString())
       setSecondNum("0")
     
    
    //    setSecondNum(0)

    }

    function pushButton(item) {
        
        let operators = "+x/-=";
        let arr = []

        for (let i = 0; i < numStr.length; i++) {
            for (let j = 0; j < operators.length; j++) {
                if (numStr[i] === operators[j]) {
                    arr = numStr.split(operators[j])
                    setFirstNum(arr[0].toString())
                    setOperator(operators[j])
                    setSecondNum(arr[1].toString())
                    // setNumStr(arr[1])
                } 
            }
        }

        console.log(numStr)

        if (item === "C") {
            // clear()
            setDisplay("0");
            setFirstNum("0");
            setSecondNum("0");
            setOperator("");

        } else if (!(item === "=" ||
                item === "+" ||
                item === "-" ||
                item === "x" ||
                item === "/" ||
                item === "%") &&
            !operator) {
            if (numStr == "0") {
                setNumStr(item)
                setDisplay(item)
                setFirstNum(item)
            } else {
                setNumStr(numStr.concat(item)) 
                setDisplay(display.concat(item)) 
                setFirstNum(numStr.concat(item))
            }

        } else if (!(item === "=" || item === "+" || item === "-" || item === "x" || item === "/" || item === "%") && operator) {
            if (numStr == "0") {
                setNumStr(item)
                setDisplay(item)
                setSecondNum(item)
            } else {
                setNumStr(numStr.concat(item))
                setDisplay(numStr.concat(item)) 
                setSecondNum(numStr.concat(item))
            }


        } else if ((item === "=" || item === "+" || item === "-" || item === "x" || item === "/") && !operator) {
            setNumStr("0")
            setOperator(item)

        } else if ((item === "=" || item === "+" || item === "-" || item === "x" || item === "/") && operator) {
            if(item === "+" || item === "-" || item === "x" || item === "/") {
                setOperator(item)
                calculate()
            } else {
                setOperator("")
                setFirstNum(secondNum)
                calculate()

            }
        }

    }
    

    let board = buttons.map((item, index) => {
        return (
            <div id="buttons" key={index} className="col-3 border">
                <h3 className="mt-2" onClick={() => pushButton(item)}>{item}</h3>
            </div>
        )
    })

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-4 text-center">
                    <h1>Hello world!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-4 text-center">
                    <div className="row">
                        <div className="col border mb-3 text-right">
                            <h1 className="display-3">{display}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col border p-4">
                            <div id="buttonRow" className="row">
                                {board}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
