import React from 'react'
import { Title, TaskItem, InputTask } from './Components'

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newTask: "",
			tasksList: []
		}
	}

	setTasksList = () => {
		this.setState({
			tasksList: [...this.state.tasksList, this.state.newTask]
		});
	}

	setNewTask = (update) => {
		this.setState({
			newTask: update
		}, this.setTasksList);
	}

	delTask = id => {
		this.setState({
			tasksList: this.state.tasksList.filter((task, index) => {
				return index !== id;
			})
		});
	}

	render(){
		return (
			<div className="App">
				<Title />

			  	<ol>{ this.state.tasksList.map((task, index) => 
					<TaskItem id={ index } 
						handleDel={ this.delTask } >
							{ task }
					</TaskItem>
				) }</ol>

				<InputTask newTask={ this.setNewTask } />
			</div>
		)
	}
}

