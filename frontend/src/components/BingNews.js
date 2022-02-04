import React from 'react';

class BingNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=France&count=2&freshness=Day&textFormat=Raw&safeSearch=Off`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": 'a2442ecbacmshc2159a813e198d5p13bf66jsn2a646d63ec7b',
                "x-bingapis-sdk": "true",
                "accept-language": "fr"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.value
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else if (!items) {
            return <div> Liste vide </div>
        }
        else {
            return (
                <ul>
                    {items.map((item => (
                        <li key={item.name} className="item">
                            {item.image &&
                                <img className="thumbnail"
                                    alt=""
                                    src={item.image?.thumbnail?.contentUrl}
                                />
                            }

                            <h2 className="title">
                                <a href={item.url}>{item.name}</a>
                            </h2>

                            <p className="description">
                                {item.description}
                            </p>

                            <div>

                                {item.category &&
                                    <span>{item.category}</span>
                                }
                            </div>
                        </li>

                    )))}

                </ul>
            )

        }
    }
}
export default BingNews;