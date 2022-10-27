function WelcomeFunction(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.timerID = null;
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleString() }.</h2>
            </div>
        );
    }
}

class Incrementer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {number: props.start};
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(() => this.increment(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    increment() {
        this.setState((prevState, props) => ({
            number: prevState.number + props.step
        }));
    }

    render() {
        return (
            <div>
                <h1>Incrementer : {this.state.number}</h1>
            </div>
        );
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

class CountClick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    decrement() {
        this.setState((prevState, props) => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        );
    }
}

function Home() {
    return (
        <div>
            <Welcome name="Sara" />
            <Clock />
            <Incrementer start={0} step={10}/>
            <Incrementer start={1000} />
            <CountClick />
        </div>
    );
}

const element = <Home />;

ReactDOM.render(
    element,
    document.getElementById('app')
);
