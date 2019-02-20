//点击切换待办状态
export const toggleEvent = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const addTodo=text=>({
    type: 'ADD_TODO',
    text
})