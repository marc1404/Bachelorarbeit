import React from 'react';
import {browserHistory} from 'react-router';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import contacts from './contacts-mock';

export default class Contacts extends React.Component {
    
    render() {
        const listItems = contacts.map(contact => {
            const avatar = <Avatar>{contact.initials()}</Avatar>;
            const openContact = () => {
                browserHistory.push(`/contact/${contact.id}`)
            };

            return (
                <ListItem key={contact.id}
                          primaryText={contact.name}
                          leftAvatar={avatar}
                          onTouchStart={openContact}
                          onClick={openContact}
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

}