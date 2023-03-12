import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
    color?: string;
}

/*interface AppState {
    counter: number;
}*/

//Functional Component
/*const App = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>
}*/

//Component<P,S> : S is the State.
//When we do "state = { counter } we're overriding the S, so thatd fine.
//But in the constructor version, the S is an [], thats what it complains about!"
//Dont do both! We stay with the simpler version.
class App extends React.Component<AppProps /*, AppState*/> {
    state = { counter: 0 }; //works

    /*constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 };
    }*/

    onUp = (): void => {
        this.setState({counter: this.state.counter + 1})
    }
    onDown = (): void => {
        this.setState({counter: this.state.counter - 1})
    }
    render() {
        //return <div>TEST {this.props.color}</div>;
        return (
            <div>
                <button onClick={this.onUp}>+</button>
                {this.state.counter}
                <button onClick= {this.onDown}>-</button>
            </div>
        );
    }
}

//ReactDOM.render(<App />, document.querySelector('#root')); 
ReactDOM.render(<App color="green"/>, document.querySelector('#root')); 