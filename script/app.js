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

const { Component } = React;

let nextTodoId = 0;
class todoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

