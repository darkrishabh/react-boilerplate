var GlobalLoader = {
    load: function () {
        /**
         * Global Imports
         */
        window._ = require('lodash');
        window.React = require('react/addons');
        window.Superagent = require('superagent');

        window.Backbone = require("backbone");
        /**
         * Router Imports
         */

        window.Router = require('react-router'); // React Router
        window.Route = Router.Route;
        window.DefaultRoute = Router.DefaultRoute;
        window.Link = Router.Link;
        window.RouteHandler = Router.RouteHandler;
        window.NotFoundRoute = Router.NotFoundRoute;

        /**
         * UI Definitions
         */

        window.RB = require("react-bootstrap"); // React Bootstrap
        window.Button = RB.Button;
        window.ButtonGroup = RB.ButtonGroup;
        window.ButtonToolbar = RB.ButtonToolbar;
        window.Nav = RB.Nav;
        window.Navbar = RB.Navbar;
        window.NavItem = RB.NavItem;
        window.Table = RB.Table;
        window.Input = RB.Input;
        window.Glyphicon = RB.Glyphicon;
        window.Panel = RB.Panel;
        window.ListGroup = RB.ListGroup;
        window.ListGroupItem = RB.ListGroupItem;
        window.Col = RB.Col;
        window.Row = RB.Row;
        window.TabbedArea = RB.TabbedArea;
        window.TabPane = RB.TabPane;
        window.Alert = RB.Alert;
        window.PanelGroup = RB.PanelGroup;
        window.Label = RB.Label;
        window.ButtonGroup = RB.ButtonGroup;
        window.Well = RB.Well;
        window.ModalTrigger = RB.ModalTrigger;
        window.Modal = RB.Modal;
        window.DropdownButton = RB.DropdownButton;
        window.SplitButton = RB.SplitButton;
        window.MenuItem = RB.MenuItem;
        window.Accordion = RB.Accordion;
        window.ProgressBar = RB.ProgressBar;
        window.Pagination = RB.Pagination;
        window.Badge = RB.Badge;

        window.RBR = require("react-router-bootstrap"); // React Router Bootstrap
        window.NavItemLink = RBR.NavItemLink;
        window.ButtonLink = RBR.ButtonLink;
        window.MenuItemLink = RBR.MenuItemLink;


    }
}
module.exports = GlobalLoader;
