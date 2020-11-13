# Simple Todo List App

This app was created to learn about ReactJS.

##How it works

There's 3 components: 

* InputTask, that renders a form to capture the new tasks
* TaskItem, renders the item stored
* And Title, that spetacularly renders... an h1

**InputTask** is basically a text field and a submit button. The text typed updates the component _state_ via onInput event, and clicking in the button updates the component _prop_ via onSubmit event.
The _prop_ is used by parent **App** to push it to an array of tasks(for simplicity reasons, the tasks are stored in an array).
In addition to **InputTask**, **App** renders the task list in numerical order using a map method. Each iteration of the map calls the **TaskItem** component.
The **TaskItem** was created thinking about the delete task feature. Each iteration passes the array item to this component as its children, and the item id is passed via _prop_. **TaskItem** renders an li element, containing the task and a button to delete the task. When the button is clicked, the component tells to parent to remove the task passing the task id.
And **Title** just fucking renders a h1. Seriously.

