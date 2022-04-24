import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class TodoList extends PureComponent {
    render() {
        const todoList =[{taskName:"빨래하기", finished:false},{taskName: "공부하기", finished: true}];
        return (
            <div>
                {todoList.map(todo=>(<div key={todo.taskName}>{todo.taskName}</div>))}
            </div>
        );
    }
}

TodoList.propTypes = {};

export default TodoList;