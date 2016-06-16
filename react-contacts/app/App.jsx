import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <AppBar title="React Contacts" showMenuIconButton={false}/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }

}