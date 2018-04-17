import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShowFlashMessage } from '../redux/actions/modalActions';

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.setShowFlashMessage();
  }

  render() {
    const {type, text} = this.props.flashMessage;
    return (
      <div>
        {text}
        <button onClick={this.onClick} className="close">Ok</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashMessage
  }
}

export default connect(mapStateToProps, {setShowFlashMessage})(FlashMessage);