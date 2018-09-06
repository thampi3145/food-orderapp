import React, { Component } from 'react';



export default class CONTACT extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
      handleSubmit(event) {
        let sammy = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"};
        alert(this.refs.topic.value);
        alert('A name was submitted'+sammy.first_name);
        event.preventDefault();
      }
    
      render() {
       
        return (
          <div>
</div>
        );
      }
}
