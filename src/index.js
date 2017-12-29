import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//youtube api key
const API_KEY = 'AIzaSyBaPjpX3WbRayfJWrhBFi5N4LnPrvA5HEw';

//new component to produce html
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('kendo');
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term: term},
        (videos)=>{
            this.setState(
                {videos:videos,
                 selectedVideo:videos[0]
                });
            console.log('searched' + term);
        });
    }

    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect = {selectedVideo=>this.setState({selectedVideo})}                
                videos = {this.state.videos} />
            </div>
        );
    }
}
//take this component's generated html and put it on the page(in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));