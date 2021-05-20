"use strict";

function Homepage() {
  return (
    <div>
      <p>You can view our trading cards here!!</p>
      <img src="/static/img/balloonicorn.jpg"></img><br></br>
      <a href="/cards">Click here to see our cards!</a>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
