import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';

class NewsList extends Component{
    state = {articles : [] };

    componentWillMount(){
        axios.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey={APIKEY_HERE}')
        .then(response => this.setState({articles: response.data.articles}));
    }

    renderNews(){
        return this.state.articles.map(news =>
            <NewsDetail key={news.title} news={news}/>
        );
    }

    render(){
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderNews()}
            </ScrollView>
        );
    }
}

export default NewsList;