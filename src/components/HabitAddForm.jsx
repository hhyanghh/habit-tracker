import React, { Component, memo } from 'react';


const HabitAddForm = memo(props => {
	const formRef = React.createRef();
	const inputRef = React.createRef();


	const onSubmit = event => {
		event.preventDefault();
		// console.log('submit!');
		// console.log(this.inputRef.current.value);
		const name = this.inputRef.current.value;
		name && this.props.onAdd(name);
		// this.inputRef.current.value = '';
		formRef.current.reset();
	}

	return (
			<form ref={formRef} className="add-form" onSubmit={onSubmit}>
				<input ref={inputRef} type="text" className="add-input" placeholder='habit을 입력하세요' />
				<button className="add-button">Add</button>
			</form>
		);
})

export default HabitAddForm;