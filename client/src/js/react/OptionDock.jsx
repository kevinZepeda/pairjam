var React = require('react');
var Dock = require('./Dock.jsx');

var OptionDock = React.createClass({
    getInitialState: function() {
        return {};
    },

    handleThemeChange: function (event) {
        console.log('clicked');
        this.props.changeTheme(event.target.checked);

    },

    render: function() {
        var peers = this.props.peers;
        var listItems = [
            <li key='lightTheme'>
                Light theme?
                <input type="checkbox" /*checked={this.props.lightTheme}*/ onChange={this.handleThemeChange} />
            </li>,
            <li key='gitPatch'>
                Download Git patch
                <button className='icon-download' onClick={this.props.savePatch} />
            </li>
        ];

        return (
            <Dock
                classList='optionDock'
                icon='icon-settings'
                openDock={this.props.openDock}
                visibleDock={this.props.visibleDock}
                name='option' >
                {listItems}
            </Dock>
        );
    }
});

module.exports = OptionDock;