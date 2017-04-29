/**
 * Created by Radu on 4/21/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import axios from 'axios';

const styles = {
    propContainer: {
        width: 1000,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};
class CommentBox extends React.Component {
    constructor(){
        super();
        this.state ={
            contest: [],
            showRemoveIcon: false,
            searchValue: '',
            errorMessage: '',
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '500px',
            width:'100px',

        }
    }
    getApiData(data){
        let self = this;
        axios.get(data)
            .then(function (response) {
                let data_response = response.data;
                self.setState({ contest: data_response});
            })
            .catch(function (error) {
                console.log('Error', error.message);
                self.setState({errorMessage: error.message});
            });
    }

    componentWillMount(){
        if (!this.props.debug) {
            this.getApiData(this.props.contest_url);
            console.log('debug here after fetches');
        }
        else{
            this.setState({ data: this.props.contest_url});
            console.log("something wrong")
        }
    }

    componentDidMount(){
        console.log("Did UnMount")
    }
    render() {
        const { contest } = this.state;
        console.log(contest);
        const entitiesRows = contest.map((row, index) => (
            <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.date_n}</TableRowColumn>
                <TableRowColumn>{row.tid}</TableRowColumn>
                <TableRowColumn>{row.price}</TableRowColumn>
                <TableRowColumn>{row.amount}</TableRowColumn>
            </TableRow>
        ));
        return (

            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                {/*<Header message="Hello Man"/>*/}
                <Table
                    style={styles.propContainer}
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan='5' tooltip='Super Header' style={{textAlign: 'center'}}>
                                Super Header
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip='tid'>T_Id</TableHeaderColumn>
                            <TableHeaderColumn tooltip='data'>Data</TableHeaderColumn>
                            <TableHeaderColumn tooltip='price'>Price</TableHeaderColumn>
                            <TableHeaderColumn tooltip='amount'> Amount</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {entitiesRows}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >
                        <TableRow>
                            <TableRowColumn colSpan='6' style={{textAlign: 'center'}}>
                                Super Footer
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>

            </MuiThemeProvider>
        );
    }
}

// const Header = ({message})=>{
//     return(
//         <div>
//             <h1>message</h1>
//             {message}
//             {/*<h2 className="wewe">{message.amount}</h2>*/}
//             {/*<h2 className="wewe">{message.price}</h2>*/}
//         </div>
//     );
// };

CommentBox.propTypes = {
    contest_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
export default CommentBox;