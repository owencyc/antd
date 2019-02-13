import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';



class CommentInput extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form.Item>
                    <Input.TextArea rows={4} onChange={this.props.onChange} value={this.props.model} />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        loading={this.props.load}
                        onClick={this.props.onSubmit}
                        type="primary"
                    >
                        Add Comment
                    </Button>
                </Form.Item>
            </div>
        )
    }
}

export default CommentInput;