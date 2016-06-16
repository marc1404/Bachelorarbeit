import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class Contacts extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader title="All contacts"/>
                <CardText>
                    <List>
                        <ListItem primaryText="Marc Vornetran"
                                  leftAvatar={<Avatar>MV</Avatar>}
                        />
                    </List>
                </CardText>
            </Card>
        );
    }

}