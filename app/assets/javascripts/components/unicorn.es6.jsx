class Unicorn extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

Unicorn.propTypes = {
  name: React.PropTypes.string
};
