import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map as _map, forEach as _forEach, isUndefined as _isUndefined } from 'lodash-es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import '../styles/PaginatedTable.scss';
import '../styles/tables.scss';

class PaginatedTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: this.props.initialPage,
			dataRows: this.props.dataRows,
			sortValue: this.props.initialSortKey,
			sortAscending: this.props.initialSortAsc,
		};
	}

	componentDidMount() {
		this.attemptSort(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props === nextProps) { return; }

		this.setState({
			currentPage: nextProps.initialPage,
			dataRows: nextProps.dataRows,
			sortValue: nextProps.initialSortKey,
			sortAscending: nextProps.initialSortAsc,
		}, () => {
			// Sort the data after assigning new props, or an initial sorting will never happen
			this.attemptSort(nextProps);
		});
	}

	genUUID(a) {
		return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
			.replace(/[018]/g, this.genUUID);
	}

	getTotalPages = () => Math.ceil(this.state.dataRows.length / this.props.entriesPerPage);

	attemptSort = (source) => {
		let allowInitialSort = false;
		if (source.initialSortKey !== null) {
			_forEach(source.headers, (header) => {
				if (header.key === source.initialSortKey) {
					allowInitialSort = true;
				}
			});
		}
		if (allowInitialSort) { this.sortData(); }
	};

	makeHeader = () => {
		const headerColumns = _map((this.props.headers), (column) => {
			let sortArrow = null;
			if (this.state.sortValue === column.key) {
				if (this.state.sortAscending) {
					sortArrow = <FontAwesomeIcon icon={faCaretUp} />;
				} else {
					sortArrow = <FontAwesomeIcon icon={faCaretDown} />;
				}
			}

			let clickFunc = () => { this.updateSortOrder(column.key); };
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
		// Store each row to add to the table
		const displayedRows = [];
		const startingIndex = (this.state.currentPage * this.props.entriesPerPage) -
			this.props.entriesPerPage;
		const endingIndex = ((parseInt(startingIndex, 10) +
			parseInt(this.props.entriesPerPage, 10)) - 1);

		// Loop over each index of the row we are attempting to add
		for (let i = startingIndex; i <= endingIndex; i += 1) {
			if (typeof (this.state.dataRows[i]) === 'undefined') {
				// If we are one past the end of the data, just return the rows. Nothing is wrong.
				if (i === (this.state.dataRows.length)) {
					return displayedRows;
				}

				// Otherwise, something funky happened
				throw new Error(`Attempted to access dataRow which does not exist. Key: ${i}`);
			}

			// Loop over each of the specified headers we are to include
			const displayedColumns = _map(this.props.headers, (column) => {
				if (typeof (this.state.dataRows[i][column.key]) === 'undefined') {
					throw new Error(`Attempted to access dataRows key which does not exist: ${column.key}`);
				}

				// Possibly center the column
				const centerClass = (typeof (column.center) !== 'undefined' && column.center) ? 'is-centered' : '';

				// If an overrides object is provided, print the value in there
				let printVal = null;
				if (!_isUndefined(this.state.dataRows[i].overrides) &&
					!_isUndefined(this.state.dataRows[i].overrides[column.key])) {
					printVal = this.state.dataRows[i].overrides[column.key];
				} else {
					printVal = this.state.dataRows[i][column.key] ? this.state.dataRows[i][column.key] : '\u2013';
				}

				// Attempt to auto-format phone numbers
				if (column.key.toLowerCase().search('phone') > -1
					&& printVal.match(/^\d{10}$/) !== null) {
					printVal = `(${printVal.substr(0, 3)}) ${printVal.substring(3, 6)}-${printVal.substr(6)}`;
				}

				// Add the column to the row
				return <td key={this.genUUID()} className={centerClass}>{printVal}</td>;
			});

			// Add the row the the tbody
			displayedRows.push(<tr key={this.genUUID()}>{displayedColumns}</tr>);
		}

		return displayedRows;
	};

	goToPage = (page) => {
		this.setState({ currentPage: page });
	};

	updateSortOrder = (sortValue) => {
		if (this.state.sortValue === sortValue) {
			this.setState({ sortValue, sortAscending: !this.state.sortAscending }, this.sortData);
		} else {
			this.setState({ sortValue, sortAscending: true }, this.sortData);
		}
	};

	sortData = () => {
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

	generatePaginationContainer = () => {
		if (this.props.entriesPerPage >= this.state.dataRows.length) { return null; }

		const paginationButtons = [];

		if (this.state.currentPage > 4 && this.getTotalPages() > 7) {
			const firstPage = (
				<button
					key={this.genUUID()}
					className="paginated-table-pagination-button button-default"
					onClick={() => { this.goToPage(1); }}
				><FontAwesomeIcon icon={faBackward} />
				</button>
			);
			paginationButtons.push(firstPage);
			paginationButtons.push(<span key={this.genUUID()}>&hellip;</span>);
		}

		for (let i = (this.state.currentPage - 3); i < this.state.currentPage; i += 1) {
			if (i > 0) {
				const thisPage = (
					<button
						key={this.genUUID()}
						className="paginated-table-pagination-button button-default"
						onClick={() => { this.goToPage(i); }}
					>{i}
					</button>
				);
				paginationButtons.push(thisPage);
			}
		}

		const activeButton = (
			<button
				key={this.genUUID()}
				id="paginated-table-current-page-button"
				className="paginated-table-pagination-button button-primary"
			>{this.state.currentPage}
			</button>
		);
		paginationButtons.push(activeButton);

		const lastThree = [];
		for (let i = (this.state.currentPage + 3); i > this.state.currentPage; i -= 1) {
			if (i <= this.getTotalPages()) {
				const thisPage = (
					<button
						key={this.genUUID()}
						className="paginated-table-pagination-button button-default"
						onClick={() => { this.goToPage(i); }}
					>{i}
					</button>
				);
				lastThree.push(thisPage);
			}
		}
		paginationButtons.push(lastThree.reverse());

		if (this.state.currentPage < (this.getTotalPages() - 3) && this.getTotalPages() > 7) {
			paginationButtons.push(<span key={this.genUUID()}>&hellip;</span>);
			const lastPage = (
				<button
					key={this.genUUID()}
					className="paginated-table-pagination-button button-default"
					onClick={() => { this.goToPage(this.getTotalPages()); }}
				><FontAwesomeIcon icon={faForward} />
				</button>
			);
			paginationButtons.push(lastPage);
		}

		return (
			<nav className="paginated-table-pager">
				{paginationButtons}
			</nav>
		);
	};

	render() {
		return (
			<div className="paginated-table-container">
				<div className="paginated-table-wrapper">
					<table className="paginated-table">
						<thead>{this.makeHeader()}</thead>
						<tbody>{this.makeBody()}</tbody>
					</table>
				</div>
				{this.generatePaginationContainer()}
			</div>
		);
	}
}

PaginatedTable.propTypes = {
	headers: PropTypes.array.isRequired,
	dataRows: PropTypes.array.isRequired,
	entriesPerPage: PropTypes.number,
	initialSortKey: PropTypes.string,
	initialSortAsc: PropTypes.bool,
	initialPage: PropTypes.number,
};

PaginatedTable.defaultProps = {
	entriesPerPage: 10,
	initialSortKey: null,
	initialSortAsc: true,
	initialPage: 1,
};

export default PaginatedTable;
