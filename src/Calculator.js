import React, {useState} from 'react'
import './Calculator.css'

function Calculator() {

    const [number, setNumber] = useState([]);

    console.log(number) 
    
    let buttons = [
        "", "", "%", "/",
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", "", ".", "="
    ]

    function pushButton(item) {
        console.log(item)
        number.length > 0 ? 
        setNumber(number.concat(item) )
        :
        setNumber(item)

        // checkId.length > 0 ?
        //     setCheckId(checkId.concat(newCheck))
        //     :
        //     setCheckId(newCheck)
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
                        <div className="col border mb-3">
                            <h3>View</h3>
                            <h3>View</h3>
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
