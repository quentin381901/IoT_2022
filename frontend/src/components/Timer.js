import React from 'react'


class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.day = this.state.date.getDay();
        this.tab_jour =  ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
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
            <div >
                <h1>{this.state.date.toLocaleTimeString()}
                    <br /> {this.tab_jour[this.day]}   {this.state.date.toLocaleDateString()}
                </h1>
            </div>
        )
    }
}

export default Timer