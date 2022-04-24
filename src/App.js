import React, {Component} from 'react';
// import NewCounter from "./03/NewCounter";
import './App.css';
import './sass/materialize.scss'

class App extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className='nav-wrapper'>
                        <div>
                            두잇! 리액트 시작하기
                        </div>
                    </div>
                </nav>
                <h1>머터리얼 CSS</h1>
            </>
        );
    }
}

export default App;