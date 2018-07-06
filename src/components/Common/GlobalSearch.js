import React from 'react';
import {
  Form,
  FormGroup,
  InputGroup,
  
  Input,
  
 } from 'reactstrap';
import  { Style } from 'radium';

class GlobalSearch extends React.Component {
 
  render() { 
    const classes = `col-12 btn-left-curve ${this.props.rounded}`;
    return (
      // <Form autoComplete="off">
      //   <FormGroup>
      //   {/* <InputGroup className={this.props.classname}> */}
      //   <InputGroup className="global-search-user">
      //       {/* <Style scopeSelector='.global-search-user' rules={{
      //           '::-webkit-input-placeholder': {
      //               color: '#ffb732'
      //           }}} /> */}
      //     <input 
      //     // className={classes}
      //     className={"exampleSearch"}
      //     type="search" 
      //     name="search" 
      //     id="exampleSearch" 
      //     placeholder="What would you like to buy today...."
      //     />
      //       {/* <InputGroupAddon addonType="prepend">
      //         <Button 
      //         className="btn-search btn-right-curve">
      //           <i className="fa fa-search"></i>
      //         </Button>
      //       </InputGroupAddon> */}
      //       </InputGroup>
      //   </FormGroup>
      // </Form>
      <div class="container">
      <div className="row">
        <div className="col-md-12 col-md-offset-3">
          <form autoComplete="off" action="" className="search-form">
            <div className="form-group has-feedback">
              <label for="search" className="sr-only"></label>
              <input type="text" className="form-control" name="search" id="search" placeholder="search" />
              <span className="fas fa-search form-control-feedback"></span>
            </div>

          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default GlobalSearch;
