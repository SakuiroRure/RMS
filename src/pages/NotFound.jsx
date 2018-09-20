import React from 'react';
import img from '../assets/404.png';


class NotFound extends React.Component {
    state = {
        animated: ''
    };
    componentDidMount(){
        
    }
    enter = () => {
        this.setState({animated: 'hinge'})
    };
    render() {
        return (
            <div className="center" style={{height: '300px', marginTop: '60px', overflow: 'hidden'}}>
                <img src={img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
            </div>
        )
    }
}

export default NotFound;