import React from 'react';
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';
import Radium, { Style } from 'radium';

class GlobalSearch extends React.Component {
 
  render() { 
    const classes = `col-12 btn-left-curve ${this.props.rounded}`;
    return (
      <Form>
        <FormGroup>
        <InputGroup className={this.props.classname}>
            <Style scopeSelector='.global-search-user' rules={{
                '::-webkit-input-placeholder': {
                    color: '#ffb732'
                }}} />
          <Input 
          className={classes}
          type="search" 
          name="search" 
          id="exampleSearch" 
          placeholder="What would you like to buy today...."
          />
            {/* <InputGroupAddon addonType="prepend">
              <Button 
              className="btn-search btn-right-curve">
                <i className="fa fa-search"></i>
              </Button>
            </InputGroupAddon> */}
            </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default GlobalSearch;
