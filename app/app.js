var NutDropApplication = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.elapsed  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
            'Nut Drop has been successfully running for ' + seconds + ' seconds.';

        return React.DOM.p(null, message);
    }
});

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
var NutDropApplicationFactory = React.createFactory(NutDropApplication);

var start = new Date().getTime();
setInterval(function() {
    ReactDOM.render(
        NutDropApplicationFactory({elapsed: new Date().getTime() - start}),
        document.getElementById('container')
    );
}, 50);