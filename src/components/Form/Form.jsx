import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log(props)
    }
    handleSubmit(event){
        this.props.data.unshift(this.state)
        event.preventDefault()
    }
    handleFirstNameChange (event) {
        this.setState({firstName: event.target.value})
    }
    handleLastNameChange (event) {
        this.setState({lastName: event.target.value})
    }
    handleEmailChange (event) {
        this.setState({email: event.target.value})
    }
    handlePhoneChange (event) {
        this.setState({phone: event.target.value})
    }
    render() {
        return (
            <div className="form-container">
            <form className='form-body' onSubmit={this.handleSubmit}>
                <button className="form-close" onClick={this.props.onCloseHand}>X</button>
            <div className="form-group">
                <label>First Name</label>
                <input className="form-control" firstName={this.state.firstName} onChange={this.handleFirstNameChange}  placeholder="First Name"/>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input className="form-control" lastName={this.state.lastName} onChange={this.handleLastNameChange}  placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input  className="form-control" email={this.state.email} onChange={this.handleEmailChange} placeholder="Email address"/>
            </div>
            <div className="form-group">
                <label >Phone</label>
                <input className="form-control" phone={this.state.phone} onChange={this.handlePhoneChange}  placeholder="Phone"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}



export default Form