import React from "react"

const ComponentFour = (props) => {
    const firstName = 'Kevin';

    // Expensive function
    function expensiveOperation() {
        let input = 3
        let begin = performance.now();
        input *= 0.89 + 0.5;
        var start = new Date();
        while((new Date() - start) / 1000 < input);
        return "Result: " + Math.round(performance.now() - begin)
    }

    return (
        <div className="component-four">
            <p className="component-text">Component 4</p>
            {props.question === "Question 2" && props.lastNames.map((index) => (
                <div className="result" key={index}>{firstName} {index}</div>))}
            {props.question === "Question 3" &&      //todo: implement loading or waiting animation
                <div className="result">{expensiveOperation()}</div>} 
        </div>
    )
}

export default ComponentFour