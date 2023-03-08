import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/LoadMoreTable.scss';

class LoadMoreTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataRows: [],
            sortValue: this.props.initialSortKey,
            sortAscending: this.props.initialSortAsc,
            marker: this.props.initialMarker,
        };
    }

    componentDidMount() {
        this.loadMoreData(this.state.marker);
    }

    loadMoreData = (marker = null) => {
        this.props.loadMoreData(marker).then((results) => {
            this.setState({
                dataRows: this.state.dataRows.concat(results.data),
                marker: results.marker,
            }, this.sortData);
        });
    };

    genUUID(a) {
        return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
            .replace(/[018]/g, this.genUUID);
    }

    makeHeader = () => {
        const headerColumns = this.props.headers.map((column) => {
            let sortArrow = null;
            if (this.state.sortValue === column.key) {
                if (this.state.sortAscending) {
                    sortArrow = <FontAwesomeIcon icon={faCaretUp} />;
                } else {
                    sortArrow = <FontAwesomeIcon icon={faCaretDown} />;
                }
            }

            let clickFunc = () => this.updateSortOrder(column.key);
            let sortClass = 'is-sortable';
            let centerClass = '';
            if (typeof (column.sortable) !== 'undefined' && column.sortable === false) {
                clickFunc = null; sortClass = null;
            }

            if (typeof (column.center) !== 'undefined' && column.center) {
                centerClass = 'is-centered';
            }

            return (
                <th onClick={clickFunc} key={column.key} className={`${sortClass} ${centerClass}`}>
                    {column.name}&nbsp;{sortArrow}
                </th>
            );
        });

        return <tr key={this.genUUID()}>{headerColumns}</tr>;
    };

    makeBody = () => {
        return this.state.dataRows.map((row) => {
            // Loop over each of the specified headers we are to include
            const displayedColumns = this.props.headers.map((column) => {
                if (typeof (row[column.key]) === 'undefined') {
                    throw new Error(`Attempted to access row key which does not exist: ${column.key}`);
                }

                // Possibly center the column
                const centerClass = (typeof (column.center) !== 'undefined' && column.center) ? 'is-centered' : '';

                // If an overrides object is provided, print the value in there
                let printVal = null;
                if (row.hasOwnProperty('overrides') && row.overrides.hasOwnProperty(column.key)) {
                    printVal = row.overrides[column.key];
                } else {
                    printVal = row[column.key] || '\u2013';
                }

                // Attempt to auto-format phone numbers
                if (column.key.toLowerCase().search('phone') > -1 && printVal.match(/^\d{10}$/) !== null) {
                    printVal = `(${printVal.substr(0, 3)}) ${printVal.substring(3, 6)}-${printVal.substr(6)}`;
                }

                // Add the column to the row
                return <td key={this.genUUID()} className={centerClass}>{printVal}</td>;
            });

            return <tr key={this.genUUID()}>{displayedColumns}</tr>;
        });
    };

    updateSortOrder = (sortValue) => {
        if (this.state.sortValue === sortValue) {
            this.setState({ sortValue, sortAscending: !this.state.sortAscending }, this.sortData);
        } else {
            this.setState({ sortValue, sortAscending: true }, this.sortData);
        }
    };

    sortData = () => {
        if (!this.state.sortValue) { return; }

        const sortedArray = this.state.dataRows;
        sortedArray.sort((a, b) => {
            const aVal = (a[this.state.sortValue] === null) ?
                null : a[this.state.sortValue].toString().toLowerCase();
            const bVal = (b[this.state.sortValue] === null) ?
                null : b[this.state.sortValue].toString().toLowerCase();

            // Null values and empty strings are always sorted to be last
            if (aVal === null || aVal === '') { return this.state.sortAscending ? 1 : 0; }
            if (bVal === null || bVal === '') { return this.state.sortAscending ? -1 : 0; }
            if (aVal > bVal) { return this.state.sortAscending ? 1 : -1; }
            if (aVal < bVal) { return this.state.sortAscending ? -1 : 1; }
            return 0;
        });
        this.setState({ dataRows: sortedArray });
    };

    render() {
        return (
            <div className="load-more-table-container">
                <div className="load-more-table-wrapper">
                    <table className="load-more-table">
                        <thead>{this.makeHeader()}</thead>
                        <tbody>{this.makeBody()}</tbody>
                    </table>
                </div>
                <div className="load-more-table-button-row">
                    <button onClick={this.loadMoreData}>Load More</button>
                </div>
            </div>
        );
    }
}

LoadMoreTable.propTypes = {
    headers: PropTypes.array.isRequired,
    loadMoreData: PropTypes.func.isRequired,
    initialMarker: PropTypes.string,
    initialSortKey: PropTypes.string,
    initialSortAsc: PropTypes.bool,
};

LoadMoreTable.defaultProps = {
    initialMarker: null,
    initialSortKey: null,
    initialSortAsc: true,
};

export default LoadMoreTable;
