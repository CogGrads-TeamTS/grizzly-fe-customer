import 'rc-input-number/assets/index.css';
import InputNumber from 'rc-input-number';
import React from 'react';
import ReactDOM from 'react-dom';

class QtyInput extends React.Component {
  state = {
    disabled: false,
    readOnly: false,
    value: this.props.value,
  };
  onChange = (value) => {
    this.setState({ value });
    this.props.changed(this.props.id, value);
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  }
  render() {
    return (
        <InputNumber
          min={1}
          max={99}
          style={{ width: 100 }}
          value={this.state.value}
          onChange={this.onChange}
          readOnly={this.state.readOnly}
          disabled={this.state.disabled}
        />
    );
  }
}

export default QtyInput;