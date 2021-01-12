import React, {Component} from 'react';

class ListAppointments extends Component{
    constructor(){
        super();
        this.state = {
         myAppointments:[]
        }
      }

    render(){
        const listItems = this.props.appointments.map(item =>(
            <>
            <div>{item.petName}</div>
            <div>{item.ownerName}</div>
            <div>{item.aptNotes}</div>
            <hr />
      
            </>
          ));
        return <div>{listItems}</div>
    }
}

export default ListAppointments