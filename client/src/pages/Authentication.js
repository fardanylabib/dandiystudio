import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {authentication} from '../redux/action';

const GoogleLogo = require('../assets/icons/google.svg');
const FBLogo = require('../assets/icons/facebook.svg');

class Authentication extends React.Component{
    constructor(){
        super();
        this.state = {
            needRegister: false
        }
    }

    authSwitching = ( isNeedRegister ) => {
        this.setState({needRegister : isNeedRegister});
    }

    render(){
        const {needRegister} = this.state;
        return(
            <div className="app-container">
                {
                    needRegister ?
                    <Register authSwitching = {this.authSwitching}/>:
                    <Login authSwitching = {this.authSwitching}/>
                }
                <div className = 'app-mid'>
                    <a className = 'button is-info' onClick={()=>this.props.authentication(false)} style={{textAlign:'right'}}>Ke halaman sebelumnya</a>
                </div>
            </div>
        )
    }
}

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //login form
        return(
            <div className='app-content-padded'>
                <div className="app-hero">
                    <section className="hero is-info">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    Senang berjumpa lagi dengan Anda :)
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='app-content '>
                    <div className='app-narrow'>
                        <div className='app-mid'>
                            <h2 className="subtitle">
                                Masuk dengan sekali klik
                            </h2>
                            <SocialSignIn sign={'Masuk'}/>
                            {/* <div className="is-divider" data-content="atau"></div> */}
                            <Divider content='atau'/>
                            <label>Masuk dengan email & password Anda</label>
                        </div>
                        <label className='help'>Username atau email</label>
                        <input className="input" type="text" placeholder="username/email Anda"/>
                        <label className='help'>Password</label>
                        <input className="input" type="password" placeholder="password Anda"/>
                        <div className='app-mid'>
                            <button className="button is-fullwidth is-primary is-outlined" >Sign In</button>
                        </div>
                        <a className='help'>Lupa password?</a>
                        <div className='app-mid'>
                            <a onClick={() => this.props.authSwitching(true)}>Buat akun baru</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //REGISTRATION form
        return(
            <div className='app-content-padded'>
                <div className="app-hero">
                    <section className="hero is-info">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    Desain berkualitas, harga terjangkau, dekat dengan Anda
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='app-content'>
                    <div className='app-narrow'>
                        <div className='app-mid'>
                            <SocialSignIn sign={'Daftar'}/>
                            {/* <div className="is-divider" data-content="atau"></div> */}
                            <Divider content='atau'/>
                            <label>Daftar dengan email & password</label>
                        </div>
                        <label className='help'>Username atau email</label>
                        <input className="input" type="text" placeholder="username/email"/>
                        <label className='help'>Password</label>
                        <input className="input" type="password" placeholder="password"/>
                        <div className='app-mid'>
                            <button className="button is-fullwidth is-primary is-outlined" >Register</button>
                        </div>
                        <div className='app-mid'>
                            <a onClick={() => this.props.authSwitching(false)}>Sudah punya akun?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const Divider = ({content}) => (
    <div className = 'divider'>
        <div className = 'div-line-h'>
            <hr/>
        </div>
        <div  className = 'div-content help'>
            {content}
        </div>
        <div className = 'div-line-h'>
            <hr/>
        </div>
    </div>
)

const SocialSignIn = ({sign}) => (
    <div>
        <button className="button is-fullwidth is-primary is-outlined app-social-sign"> 
            <i className='app-btn-img'>
                <img src={GoogleLogo} width='30px'/>
            </i>
            <p className='app-btn-txt'>{sign} dengan Google</p>
            
        </button>
        <button className="button is-fullwidth is-primary is-outlined app-social-sign">
            <i className='app-btn-img'>
                <img src={FBLogo} width='30px'/>
            </i>
            <p className='app-btn-txt'>{sign} dengan Facebook</p>
        </button>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({authentication},dispatch);
}

export default connect(null,mapDispatchToProps)(Authentication);