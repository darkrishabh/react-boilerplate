var global = require('./global.jsx').load()
var Home = require('./pages/Home/index.jsx')

var NotFound = React.createClass({
    render: function () {
        return (
            <div>
                URL Not Found
            </div>
        )
    }
});
var AppHome = React.createClass({

    render: function () {
        return (
            <div id="root-container">
                <header><Navbar brand="Y2M" style={{marginRight: 0, marginLeft: 0}}>
                    <Nav>
                        <NavItemLink to="index">Home</NavItemLink>
                    </Nav>
                    <ButtonToolbar className={"pull-right"}
                                   style={{right: 20, position:"absolute", marginTop: 15}}>
                        <Badge style={{backgroundColor: "#72D667", margin: 2}}>-</Badge>
                        <Badge style={{backgroundColor: "#FDDB2A", margin: 2}}>^</Badge>
                        <Badge style={{backgroundColor: "#D86363", margin: 2}}>X</Badge>
                    </ButtonToolbar>
                </Navbar>
                </header>


                <div className={"container"}>
                    {/* Use Router */}
                    <RouteHandler/>
                </div>
            </div>
        )
    }
});
var routes = (
    <Route name="boilerplate" path="/" handler={AppHome}>
        {/* Home */}
        <DefaultRoute handler={Home}/>
        <Route name="index" path="/" handler={Home}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);
Router.run(routes, Router.HistoryLocation, function (Handler) {
    function refresh_react_app() {
        React.render(<Handler/>, document.body);
    }

    refresh_react_app();
});