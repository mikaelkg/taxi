import React from 'react'
import {render} from 'react-dom'

class MyForm extends React.Component {
	  constructor() {
		      super();
		      this.handleSubmit = this.handleSubmit.bind(this);
		    }

	  handleSubmit(event) {
		      event.preventDefault();
		      const data = new FormData(event.target);
		      
		      fetch('http://127.0.0.1:8000/test', {
			            method: 'POST',
			            body: data,
			          })
		    .then(function(response) {
			        alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
			        alert(response.status); // 200

			        return response.json();
			       })
		    .then(function(user) {
			        alert(user.name); // iliakan
			      })
		    .catch( alert )
		    }

	  render() {
		      return (
			            <form onSubmit={this.handleSubmit}>
			              <label htmlFor="time">Enter time</label>
			              <input id="time" name="time" type="text" />

			              <label htmlFor="point_A">Enter point A</label>
			              <input id="point_A" name="point_A" type="text" />

			              <label htmlFor="point_B">Enter point B</label>
			              <input id="point_B" name="point_B" type="text" />

			              <button>Send data!</button>
			            </form>
			          );
		    }
}
render(<MyForm/>, document.getElementById('root'))
