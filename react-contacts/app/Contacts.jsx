import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import contacts from './contacts-mock';

export default class Contacts extends React.Component {

    render() {
        const listItems = contacts.map(contact => {
            return (
                <ListItem key={contact.id}
                          primaryText={contact.name}
                          leftAvatar={<Avatar>{this.initials(contact.name)}</Avatar>}
                />
            );
        });
        
        return (
            <Card>
                <CardHeader title="All contacts"/>
                <CardText>
                    <List>
                        {listItems}
                    </List>
                </CardText>
            </Card>
        );
    }

    initials(name) {
        return name.split(' ').map(part => {
            return part.charAt(0);
        }).join('');
    }

}