const todo_list = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,{id:state.length,text:action.text,completed:false}
            ];
        case 'TOGGLE_TODO':
            return state.map(item=>(item.id===action.id?{...item,completed:!item.completed}:item));
        default:
            return [];

    }
}

export default todo_list