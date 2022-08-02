import React from "react";
import './todoForm.css'

function TodoForm(props) {
    const [value, setValue] = React.useState('todo')
    const { addTodo } = props

    // When we detect a change in our input field
    // we want to update our input field's value
    function handleChange(event) {
        setValue(event.target.value)
    }

    // When we detect a submission, using the enter key
    // we want to take the input field's value and send it to it's parent
    function handleSubmit(event) {
        event.preventDefault()
        console.log("I'm going to submit: ", value)
        props.addTodo(value)
        // addTodo(newTodo)
        setValue("")

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="Text" 
            //placeholder="Add Todo..." 
            onChange={handleChange}
            value={value}
            />
            {/* <input type="text" placeholder="Add Todo..." /> */}
        </form>
    );
}

export default TodoForm;