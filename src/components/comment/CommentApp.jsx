import React, { Component } from 'react'
import { Card } from 'antd';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    // static defaultProps = {
    //     c_list: [{
    //         author:'owenc',
    //         content:'沙发！！！！！！！'
    //     }]
    //   }

    constructor(props) {
        super(props);
        this.state = {
            c_list: [{
                author: 'owenc',
                content: '沙发！！！！！！！'
            }],
            content: '',
            submitting: false
        };
    }

    handleChange(e) {

        this.setState({ content: e.target.value });
    }

    handleSubmit() {
        this.setState({
            submitting: true,
        });
        setTimeout(() => {
            this.setState({
                c_list: [{
                    author: 'owenc',
                    content: this.state.content
                }, ...this.state.c_list],
                content: '',
                submitting: false
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>评论列表</h1>
                <CommentInput onChange={this.handleChange.bind(this)} load={this.state.submitting} model={this.state.content} onSubmit={this.handleSubmit.bind(this)} />
                <CommentList c_list={this.state.c_list} />
            </div>
        )
    }
}

export default CommentApp;