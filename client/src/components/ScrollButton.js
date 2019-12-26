import React from 'react';

class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0,
          scrollTopAvailable: false
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), "0");
      this.setState({ intervalId: intervalId });
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScroll);
    };
    
    listenScroll  = (event) => {
       if(window.scrollY > 200 ){
           if(!this.state.scrollTopAvailable){
                this.setState({scrollTopAvailable: true});
           }
       }else{
           if(this.state.scrollTopAvailable){
                this.setState({scrollTopAvailable: false});
           }
       }
    };
    
    render () {
        if( this.state.scrollTopAvailable){
            return (
                <button title='Back to top' className='scroll' 
                    onClick={ () => { this.scrollToTop(); }}>
                    <span className='fas fa-chevron-up'></span>
                </button>
            );
        }
        return null;
    }
} 

  export default ScrollButton;