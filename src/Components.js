import React from 'react'

export function Title() {
	return(
		<h1>ToDo List</h1>
 	);
}

export class TaskItem extends React.Component {
	editClicked = event => {
		this.props.handleEdit(this.props.id, "Editado");
	};

	deleteClicked = event => {
		this.props.handleDel(this.props.id);
	};

	render(){
		return(
			<li>
				{ this.props.children }
				<button type="button" 
					onClick={ this.editClicked } >Edit</button>
				<button type="button" 
					onClick={ this.deleteClicked } >Delete</button>
			</li>
		);
	}
}

export class InputTask extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			newOne: ""
		}
	}

	handleInput = event => {
		try{
			this.setState({
				newOne: event.target.value
			});
		}catch(error){
			console.log("Sorry, Error: "+error);
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		try{
			this.props.newTask(this.state.newOne);
		}catch(error){
			console.log("Sorry, Error: "+error);
		}
	}

	render(){
		return(
			<form className="inputTask" 
				onSubmit={this.handleSubmit}>
					<input name="taskField" 
						type="text" 
						onInput={this.handleInput} 
						placeholder="Enter new task..." />
					<button type="submit">New Task</button>
					<input type="reset" 
						defaultValue="Clear" />
			</form>
		);
	}
}
