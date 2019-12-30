import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {authentication, authenticated} from '../redux/action';
import {socialSignIn} from '../firebase/Auth';
import {Link} from 'react-router-dom';
import * as Constants from '../Constants';

const GoogleLogo = require('../assets/icons/google.svg');
const FBLogo = require('../assets/icons/facebook.svg');

class Authentication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            needRegister: false
        }
    }

    authSwitching = ( isNeedRegister ) => {
        this.setState({needRegister : isNeedRegister});
    }

    handleSocialSign =  async (socialMedia) => {
        const reduxState = this.props;
        socialSignIn(socialMedia).then((userData) => {
            console.log('user data adalah = ' +JSON.stringify(userData));
            reduxState.authentication(false);
            reduxState.authenticated(userData.token, userData.user);
            console.log(JSON.stringify(reduxState.user));
        }).catch((error)=>{

            console.log(error.message);
        });

        // try{
        //     const userData = await socialSignIn(socialMedia);
        //     console.log(JSON.stringify(userData));
        //     this.props.authenticated(userData.token, userData.user);
        //     return true;
        // }catch(error){
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     console.log(`${errorCode} | ${errorMessage} | ${email} | ${credential}`);
        // }

        // socialSignIn(socialMedia).then(
        //     (token, user) => this.props.authenticated(token, user)
        // ).catch((error) => {
        //         // Handle Errors here.
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         // The email of the user's account used.
        //         var email = error.email;
        //         // The firebase.auth.AuthCredential type that was used.
        //         var credential = error.credential;
        //         console.log(`${errorCode} | ${errorMessage} | ${email} | ${credential}`);
        //     }
        // );
    }



    render(){
        const {needRegister} = this.state;
        return(
            <div className="app-container">
                {
                    needRegister ?
                    <Register authSwitching = {this.authSwitching}/>:
                    <Login authSwitching = {this.authSwitching} socialSign = {this.handleSocialSign}/>
                }
                <div className = 'app-mid'>
                    <a className = 'button is-info' onClick={()=>this.props.authentication(false)} >Ke halaman sebelumnya</a>
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
                            <SocialSignIn sign={'Masuk'} by = {this.props.socialSign}/>
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

const SocialSignIn = ({sign,by}) => (
    <div>
        <button onClick={()=>by(Constants.SIGN_IN_WITH_GOOGLE)} className="button is-fullwidth is-primary is-outlined app-social-sign"> 
            <i className='app-btn-img'>
                <img src={GoogleLogo} width='30px'/>
            </i>
            <p className='app-btn-txt'>{sign} dengan Google</p>
            
        </button>
        <button onClick={()=>by(Constants.SIGN_IN_WITH_FB)} className="button is-fullwidth is-primary is-outlined app-social-sign">
            <i className='app-btn-img'>
                <img src={FBLogo} width='30px'/>
            </i>
            <p className='app-btn-txt'>{sign} dengan Facebook</p>
        </button>
    </div>
)

const mapStateToProps = (state) =>{
    return{
        user : state.user,
        token : state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({authentication,authenticated},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Authentication);