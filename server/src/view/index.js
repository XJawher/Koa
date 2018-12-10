import React, {Component} from 'react';
import '../style/App.css';
import http from '../http/requests';

class App extends Component {

    /**
     * @param {post or get} param
     * 参数是 post 还是 get
     */
    test(param) {
        if (param === 'get') {
            http.testGet();
        } else {
            http.testPost('lipc');
        }
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.test.bind(this, 'get')}>get</button>
                </div>
                <div>
                    <button onClick={this.test.bind(this, 'post')}>post</button>
                </div>
            </div>
        );
    }
}

export default App;
