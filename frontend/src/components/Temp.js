import React from 'react';

class Temp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
    }

    componentDidMount() {
        fetch(`/temperature/`, {
            "method": "GET",

        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.error("error", error)
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else if (!items) {
            return <div> Liste vide </div>
        } else {
            return (
                <div>
                    <p>
                        {items.temperature}
                    </p>
                    <p>
                        {items.humidity}
                    </p>
                </div>

            )

        }
    }
}

export default Temp;