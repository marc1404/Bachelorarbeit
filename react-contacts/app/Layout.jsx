import React from 'react';
import AppBar from 'material-ui/AppBar';
import Contacts from './Contacts';

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <AppBar title="React Contacts" showMenuIconButton={false}/>
                <Contacts />
            </div>
        );
    }

}