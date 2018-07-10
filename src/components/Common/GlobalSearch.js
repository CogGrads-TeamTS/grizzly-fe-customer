import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import _ from 'lodash';
import { globalFetchData, globalSaveSearch } from "../../actions/globalActions";
import OptionComponent from "./optionComponent";
import './global_search.css';
import 'react-select/dist/react-select.css';

class GlobalSearch extends React.Component {
    constructor(props) {
        super(props);
        this.options = [];
        this.state = {
            searchFocus: false,
            overlayClass: "search-overlay-shadow",
            globalSearchBoxClass: "global-search-box",
            iconDisappearClass: "",
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
        this.props.fetchData({ search });
    }

    mapSearchElements() {
        _.map(this.props.results, (contents, service) => {
            _.map(contents, (element, i) => {
                console.log(contents)
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

    activateBackdrop() {
        this.setState({
            overlayClass: "search-overlay-shadow-active",
            globalSearchBoxClass: "global-search-box-active"
        })
    }
    deactivateBackdrop() {
        this.setState({
            overlayClass: "search-overlay-shadow",
            globalSearchBoxClass: "global-search-box"
        })
    }

    determinePath(selected) {
        if (selected === null) return
        if (selected.service === "products") {
            this.props.history.push(`/product/${selected.value}`);
        }
    }
    render() {
        let search_box_class = this.state.globalSearchBoxClass;

        console.log(this.props.results);
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
                        this.determinePath(selected)
                        this.props.saveSelected(selected)
                    }}
                    onFocus={this.activateBackdrop.bind(this)}
                    onClose={this.deactivateBackdrop.bind(this)}
                    className={search_box_class}
                    valueComponent={customValue}
                    optionComponent={OptionComponent}
                    options={this.options}
                    isLoading={this.props.loading} />
                <div className="global-search-icon">
                    <i className="fa fa-search"></i>
                </div>
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
