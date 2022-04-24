import React, {PureComponent} from 'react';

class ScrollSpy extends PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
    }
    setRef(ref){
        this.ref = ref;
    }

    checkPosition(){
        if(this.ref.getBoundingClientRect().top < window.innerHeight){
            console.log('enter');
        }
        else{
            console.log('exit');
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.checkPosition);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkPosition);
    }
    render() {
        return (
            <div ref={this.ref}/>
        );
    }
}

ScrollSpy.propTypes = {};

export default ScrollSpy;