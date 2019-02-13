import React, { Component } from 'react'
import { Card } from 'antd';

class Screen extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Card
                    title="显示器" style={{ width: 300 }}>
                    <p>{this.props.sContent?this.props.sContent:'关机了'}</p>
                </Card>
            </div>
        )
    }
}

export default Screen;