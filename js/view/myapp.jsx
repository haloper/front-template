define(['react-dom', 'react', 'app/myapp'], function(ReactDom, React, myapp){

  function Whoami() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>{myapp.name}</p>
          </div>
        );
      }
    });
  }

  Whoami.prototype.init = function () {
    ReactDom.render(<this.AppView />, document.getElementById('content'));
  };

  return Whoami;

});