import React from 'react';
import {Link} from 'react-router';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import contacts from './contacts-mock';

export default class Contacts extends React.Component {

    render() {
        const listItems = contacts.map(contact => {
            const link = <Link to={`/contact/${contact.id}`}>{contact.name}</Link>;
            const avatar = <Avatar>{this.initials(contact.name)}</Avatar>;

            return (
                <ListItem key={contact.id}
                          primaryText={link}
                          leftAvatar={avatar}
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