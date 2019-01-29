import React from "react";

class LabelledInput extends React.Component {
  render() {
    return (
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{this.props.label}</label>
        </div>

        <div className="field-body">
          <div className="field">
            <div className="control ">
              {console.log(this.props.value)}
              <input
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleInputChange}
                className="input"
                type="text"
                placeholder={this.props.placeholder}
              />
            </div>
            {console.log(this.props.value)}
          </div>
        </div>
      </div>
    );
  }
}

export default LabelledInput;
