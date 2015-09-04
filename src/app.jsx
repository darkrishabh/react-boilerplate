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

    render: function(){
        return (
            <div id="root-container">
                <header className="theme-dark">
                    <Navbar>
                        <Nav>
                            <NavItemLink to="index">Home</NavItemLink>
                        </Nav>
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