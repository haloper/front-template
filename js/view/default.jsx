define(['react-dom', 'react'], function(ReactDom, React){

  function Default() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Hello, World</p>
          </div>
        );
      }
    });
  }

  Default.prototype.init = function () {
    ReactDom.render(<this.AppView />, document.getElementById('content'));
  };

  return Default;

});