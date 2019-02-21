import React, { Component } from 'react'
import { Comment ,Avatar,Tooltip,Button} from 'antd';
import moment from 'moment';
import { Link ,Route} from 'react-router-dom';
//函数定义组件
function CommentItem(props) {
    return (
        <div>
            <Comment
        author={props.author}
        avatar={(
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        )}
        content={(
          <p>{props.content}</p>
        )}
        datetime={(
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        )}
      />
        </div>
    );
}

class CommentList extends Component {
    

    render() {
        return (
            <div>
                <div>评论</div>
                {this.props.c_list.map((item)=>{
                    return (
                        <CommentItem author={item.author} content={item.content}/>
                    );
                })}
                <Button type="primary" >
        <Link to="/test">move to test</Link>
                        
                    </Button>
                
            </div>
        )
    }
}

export default CommentList;