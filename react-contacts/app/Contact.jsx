import React from 'react';
import {Link} from 'react-router';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import contacts from './contacts-mock';

export default class Contact extends React.Component {

    constructor() {
        super();

        this.state = {
            contact: null
        };
    }

    componentDidMount() {
        const contactId = this.props.params.id;
        const contact = contacts[contactId];

        this.setState({contact: contact});
    }

    handleChange(attribute, event) {
        this.state.contact[attribute] = event.target.value;

        this.forceUpdate();
    }

    render() {
        if (!this.state.contact) {
            return (
                <div></div>
            );
        }

        const avatar = <Avatar>{this.state.contact.initials()}</Avatar>;

        return (
            <Card>
                <CardHeader title={this.state.contact.name} avatar={avatar}/>
                <CardText>
                    <TextField floatingLabelText="Name"
                               value={this.state.contact.name}
                               onChange={this.handleChange.bind(this, 'name')}/>
                    <br/>
                    <TextField floatingLabelText="Age"
                               value={this.state.contact.age}
                               onChange={this.handleChange.bind(this, 'age')}/>
                    <br/>
                    <TextField floatingLabelText="Email"
                               value={this.state.contact.email}
                               onChange={this.handleChange.bind(this, 'email')}/>
                    <br/>
                    <TextField floatingLabelText="Phone"
                               value={this.state.contact.phone}
                               onChange={this.handleChange.bind(this, 'phone')}/>
                </CardText>
                <CardActions>
                    <Link to="/contacts">
                        <FlatButton label="Back" secondary={true}/>
                    </Link>
                </CardActions>
            </Card>
        );
    }

}