const nav_config={
    menus:[{
        id:'n01',
        text:'评论',
        icon:'user',
        type:'item',
        route:'/home/comment'
    },{
        id:'n02',
        text:'测试',
        icon:'user',
        type:'item',
        route:'/home/haha'
    },{
        id:'n03',
        text:'父',
        icon:'user',
        type:'sub',
        subs:[
            {
                id:'n04',
                text:'子1',
                icon:'user',
                type:'item',
                route:'/home/haha'
            }
        ]
    }]
}
const nav = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_ROUTE':
            console.log('触发路由：'+action.id);
            
            break;
        default:
            console.log(nav_config)
            return nav_config;

    }
}

export default nav