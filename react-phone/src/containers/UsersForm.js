import { Component } from "react";
import { addUser } from "../actions/users"
import { connect } from 'react-redux'

class UsersForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add({ name: this.state.name, phone: this.state.phone })
        this.setState({ name: '', phone: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleInputChange} value={this.state.name} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="phone" name="phone" rows="2" onChange={this.handleInputChange} value={this.state.phone}></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    add: (name, phone) => dispatch(addUser( name, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(UsersForm)