import React from 'react';
import {bindActionCreators} from 'redux';
import {authentication} from '../redux/action';
import { connect } from 'react-redux';

class TopNavigation extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "app-nav-container-top">
                <nav className="navbar app-nav">
                    <a  href="https://dandiystudio.web.app" className="app-logo">
                        <img src={this.props.logo}/>
                    </a>
                    <p className="app-title">
                        DandiyStudio
                    </p>
                    <p className="app-title-sm">
                        Dandiy<br/>Studio
                    </p>
                    <div className="app-nav-top-item-right" style={{marginRight:'10px'}}>
                        <a className="button is-light">
                            <div >
                                <i className = 'fab fa-whatsapp'/>
                                &nbsp;Chat&nbsp;
                            </div>  
                        </a>
                    </div>
                    <div className="app-nav-top-item-right">
                        <a className="button is-primary" onClick={() => this.props.authentication(true)}>
                            <strong>Masuk</strong>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({authentication},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);