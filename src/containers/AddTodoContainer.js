import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {
    Form, Input, Button,
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};



const AddTodo = ({ dispatch }) => {
    let input;


    return (
        <div>
            <Form onSubmit={e => {
                e.preventDefault()
                console.log(input);
                //antd 封装了，所以和原生的抓取value不太一样
                if (!input.input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.input.value))
                input.value = ''
            }}>
                <Form.Item
                    {...formItemLayout}
                    label="todo"
                    help="The information is being validated..."
                >
                    <Input placeholder="what todo" id="validating" ref={node => input = node} />
                </Form.Item>
                <Form.Item {...formItemLayout}>
                    <Button type="primary" htmlType="submit">
                        新增
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default connect()(AddTodo)
