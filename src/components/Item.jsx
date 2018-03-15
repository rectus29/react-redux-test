const React = require("react");

class Item extends React.Component {
    render() {
        return <li>
            {this.props.content}
            <a onClick={this.props.deleteItem}>
                Supprimer
            </a>
        </li>;
    }
}
module.exports = Item;