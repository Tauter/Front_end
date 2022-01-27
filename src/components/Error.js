import React from "react";
import Alert from 'react-bootstrap/Alert'

export default class Error extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      if(this.props.error){
        return (
          <Alert variant="danger">
          <b>Error</b>
          <p class="mb-0">{this.props.msg}</p>
          </Alert>
          );
      }else{
        return null;
      }
  }
}