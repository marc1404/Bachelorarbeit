var CommentBox = React.createClass({
  render: function () {
    return (
      <div class="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
