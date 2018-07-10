import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import _ from 'lodash';
import {globalFetchData,globalSaveSearch} from "../../actions/globalActions";

class GlobalSearch extends React.Component {
  constructor(props) {
    super(props);
    this.options=[];
    this.state = {
      searchFocus: false
    }

    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch = toggle => {
    this.props.logoCallback(toggle)
    this.setState({ 
      searchFocus: toggle
    });
  }
    searchValue = event => {
        this.searchDebounce(event.target.value);
    }

    searchDebounce = _.debounce((search) => { this.updateSearch(search) }, 500);

    updateSearch(search) {
        this.props.fetchData({search});
    }

    mapSearchElements() {
        _.map(this.props.results, (contents, service) => {
            _.map(contents, (element, i) => { console.log(contents)
                const isFirst = (i === 0)
                this.options.push({
                    value: element.id,
                    label: element.name,
                    service,
                    isFirst
                })
            })
        })
    }

    determinePath(selected) {
        if (selected === null) return
        if (selected.service === "products") {
            this.props.history.push(`/product/${selected.value}`);
        }
    }
  render() {console.log(this.props.results);
      this.mapSearchElements();
    const classes = `col-12 btn-left-curve ${this.props.rounded}`;
    console.log(this.props.selected)
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
      <div class="nav-search-container">
          <Select id="search"
                  name="form-field-name"
                  custom={"hello"}
                  value={this.props.selected}
                  onInputChange={this.searchDebounce}
                  placeholder={"Search all products...."}
                  onChange={(selected) => {
                      console.log("OnCHANGe")
                      this.determinePath(selected)
                      this.props.saveSelected(selected)
                  }}
                  options={this.options}
                  isLoading={this.props.loading}
                  onMouseOver={() => this.props.logoCallback(true)}
                  onMouseOut={() => !this.state.searchFocus ? this.props.logoCallback(false) : null}
                  onMouseDown={() => this.toggleSearch(true)}
                  onBlur={() => this.toggleSearch(false)}
          />
      {/*<div className="row">*/}
        {/*<div className="col-md-12 col-md-offset-3">*/}
          {/*<form autoComplete="off" action="" className="search-form">*/}
            {/*<div className={this.state.searchFocus? "form-group has-feedback searchFocus" : "form-group has-feedback" }>*/}
              {/*<label for="search" className="sr-only"></label>*/}
              {/*<Select id="search"*/}
                       {/*name="form-field-name"*/}
                      {/*custom={"hello"}*/}
                     {/*value={this.props.selected}*/}
                     {/*onInputChange={this.searchDebounce}*/}
                      {/*placeholder={"Search all products...."}*/}
                     {/*onChange={(selected) => {*/}
                         {/*console.log("OnCHANGe")*/}
                         {/*this.determinePath(selected)*/}
                         {/*this.props.saveSelected(selected)*/}
                     {/*}}*/}
                      {/*options={this.options}*/}
                      {/*isLoading={this.props.loading}*/}
                     {/*onMouseOver={() => this.props.logoCallback(true)}*/}
                     {/*onMouseOut={() => !this.state.searchFocus ? this.props.logoCallback(false) : null}*/}
                     {/*onMouseDown={() => this.toggleSearch(true)}*/}
                     {/*onBlur={() => this.toggleSearch(false)}*/}
              {/*/>*/}
              {/*<span className="fas fa-search form-control-feedback"></span>*/}
            {/*</div>*/}

          {/*</form>*/}
        {/*</div>*/}
      {/*</div>*/}
      </div>
    )
  }
}

//  Component methods for Select Prop
const customValue = props => {
    return (
        <div className="Select-value" title={props.value.title}>
      <span className="Select-value-label">
        {props.children}
          <div className="srch-srvce-txt">{props.value.service}</div>
      </span>
        </div>
    );
};

// Mapping Methods
const mapStateToProps = (state) => {
    return {
        results: state.global.results,
        search: state.global.search,
        loading: state.globalIsLoading,
        selected: state.global.selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search) => dispatch(globalFetchData(search)),
        saveSelected: (selected) => dispatch(globalSaveSearch(selected))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GlobalSearch));
