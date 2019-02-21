//点击切换待办状态
export const toggleEvent = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const addTodo=text=>({
    type: 'ADD_TODO',
    text
})

//切换路由
export const changeRoute=id=>({
    type: 'CHANGE_ROUTE',
    id
})