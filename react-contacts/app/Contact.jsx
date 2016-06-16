import React from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

export default class Contact extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader title="Marc Vornetran" avatar={<Avatar>MV</Avatar>}/>
                <CardText>
                    <div>Test</div>
                </CardText>
                <CardActions>
                    <FlatButton label="Back" secondary={true}/>
                    <RaisedButton label="Save" primary={true}/>
                </CardActions>
            </Card>
        );
    }

}