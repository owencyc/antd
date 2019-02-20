import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList=({list,toggleEvent})=>{
    return (
        <div>
            {console.log(list)}
            {
                
                list.map(item=>{
                    if(item.id%2==1){
                        return (<Todo key={item.id} text={item.text+'奇数'} completed={item.completed} onClick={()=>toggleEvent(item.id)}></Todo>
                        )
                    }else{
                       return  (
                    <Todo key={item.id} text={item.text+'偶数'} completed={item.completed} onClick={()=>toggleEvent(item.id)}></Todo>
                        )}
                        })
            }
        </div>
    );
}

TodoList.propTypes={
    list:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        completed:PropTypes.bool.isRequired,
        text:PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleEvent:PropTypes.func.isRequired
}

export default TodoList