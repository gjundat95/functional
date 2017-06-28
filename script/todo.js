
const todo = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {
                    id: action.id,
                    text: action.text,
                    completed: false
                };
        case 'TOGGLE':
            if(state.id !== action.id){
                return state;
            }
            return Object.assign({}, state, {completed: !state.completed});
        default: 
            return state;    
    }
};

const todos = (state = [], action)=>{
    switch(action.type){
        case 'ADD':
            return[...state,todo(undefined, action)];
        case 'TOGGLE':
            return state.map(item => todo(item, action));
        default:
            return state;    
    }
};

const visibilityFilter = (
    state = 'Show_All',
    action
)=>{
    switch(action.type){
        case 'Set_Visibility_Filter':
            return action.filter;
        default:
            return state;    
    }
};


const { combineReducers } = Redux;
const TodoApp = combineReducers({
    todos,
    visibilityFilter
});

const { createStore } = Redux;
const store = createStore(TodoApp);

// Console Test App
console.log('init state');
console.log(store.getState());
console.log("--------------");

console.log('add to do');
store.dispatch({
    type: 'ADD',
    id: 0,
    text: 'Tinh Ngo',
});
store.dispatch({
    type: 'ADD',
    id: 1,
    text: 'Doan Tinh',
});
console.log(store.getState());
console.log("--------------");

console.log('toggle to do');
store.dispatch({
    type: 'TOGGLE',
    id: 0
});
console.log(store.getState());
console.log("--------------");

console.log('set visibility filter');
store.dispatch({
    type: 'Set_Visibility_Filter',
    filter: 'Show_Complete'
});
console.log(store.getState());
console.log("--------------");

const testAddTodo = ()=>{
    let stateBefore = [];
    let action = {
        type: 'ADD',
        id: 0,
        text: 'Learn Redux'
    };
    let stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: "Learn Redux",
            completed: false
        },
        {
            id: 1,
            text: "Go Shoping",
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: "Learn Redux",
            completed: false
        },
        {
            id: 1,
            text: "Go Shoping",
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);

};

testAddTodo();
testToggleTodo();

console.log('Test success');