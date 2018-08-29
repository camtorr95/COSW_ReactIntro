import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        const myTodoList = this.props.items;
		const renderTodoList = myTodoList.map((todo, i) =>
			<Todo key={'todo_'+i} {...todo}/>
		);
		
		return (
			<ul>{renderTodoList}</ul>
		);
    }

}