import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../actions';
import {Link} from 'react-router-dom';
class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderAdmin(stream){
        return (
            <div className="right floated content">
                <Link to = {`/edit/${stream.id}`} className="ui button primary">Edit</Link>
                <Link to = {`/delete/${stream.id}`}className="ui button negative">Delete</Link>
            </div>
        );
    }
    renderCreate(){
        return(
            <div style={{textAlign:'right'}}>
                <Link to="/new" className="ui button primary"> Create Stream</Link>
            </div>
        )
    }
    renderList(){
        // console.log('streams ',this.props.streamss);
        return this.props.streamss.map(stream=>{
            // console.log(stream.id);
            return(
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content"> 
                    {stream.title}
                    <div className="description">
                    {stream.description}
                    </div>
                    </div>
                </div>
            
            );
        })
    }
    render(){
        return (<div>
        <h2>streams</h2>
        <div className="ui called list">
            {this.renderList()}
        </div>
            {this.renderCreate()}
    </div>);
    }
}
const mapStateToProps=(state)=>{
    // console.log('state from map', state);
    return {streamss:Object.values(state.streams)};
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);