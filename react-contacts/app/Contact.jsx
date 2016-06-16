import React from 'react';
import {Link} from 'react-router';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import contacts from './contacts-mock';

export default class Contact extends React.Component {

    contact() {
        return contacts[this.props.params.id];
    }

    render() {
        return (
            <Card>
                <CardHeader title={this.contact().name} avatar={<Avatar>{this.contact().initials()}</Avatar>}/>
                <CardText>
                    <div>Test</div>
                </CardText>
                <CardActions>
                    <Link to="/contacts">
                        <FlatButton label="Back" secondary={true}/>
                    </Link>
                    <RaisedButton label="Save" primary={true}/>
                </CardActions>
            </Card>
        );
    }

}