import React, { Component } from 'react';
import { Form, FormControl, Button } from  'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
	constructor() {
		super();
		this.state = {
			newDate: '',
			birthday: '1994-12-24',
			showStats: false
		};
	}

	changeBirthday() {
		console.log(this.state);
		let isNewDate = this.state.newDate ? true : false;
		this.setState({ 
			birthday: this.state.newDate,
			showStats: isNewDate
		});
	}
	render() {
		return (
			<div className="App">
				<Form inline>
				<h2>Enter your birthday!</h2>
				{' '}
				<FormControl 
					type="date"
					onChange={ event => this.setState({ newDate: event.target.value }) }
				>
				</FormControl>
				{' '}
				<Button onClick={() => this.changeBirthday()}>
					Submit
				</Button>
				{
					this.state.showStats ?
						<div className="fade age-stats">
							<AgeStats date={this.state.birthday}/>
						</div>
					:
						<div />
				}
				</Form>
			</div>
		)
	}
}

export default App;