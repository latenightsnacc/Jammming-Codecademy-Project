import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
    
    render(){
        console.log(`This is a props: ${this.props.tracks}`);
        return(
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                
            </div>
        );
    }
}

export default TrackList;