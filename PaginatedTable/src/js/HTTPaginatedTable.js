import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _forEach from 'lodash-es/forEach';
import _map from 'lodash-es/map';
import _isUndefined from 'lodash-es/isUndefined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import Utils from '@fidelisppm/utils';
import Loading from "./Loading";
import '../styles/PaginatedTable.scss';
import '../styles/tables.scss';

class HTTPaginatedTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			headers: [],
			dataRows: [],
			pageCount: 1,
			tableInitialized: false,
			showLoading: false,
			currentPage: null,
			sortValue: this.props.initialSortKey,
			sortAscending: this.props.initialSortAsc,
		};
	}

	componentDidMount() {
		this.fetchPageData(this.props.initialPage);
	}

	fetchPageData = (page) => {
		if(this.state.showLoading || this.state.currentPage === page) { return; }
		const newData = this.props.fetchPageData(page, this.state.sortValue, this.state.sortAscending);
		this.setState({ showLoading: true, currentPage: page }, () => {
			newData.then((data) => {
				this.setState({
					showLoading: false,
					tableInitialized: true,
					pageCount: data.pageCount,
					headers: data.headers,
					dataRows: data.data
				});
			}).catch((error) => {
				Utils.showErrorBanner(error.message);
			});
		});
	};

	makeHeader = () => {
		const headerColumns = _map((this.state.headers), (column) => {
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

		return <tr key={Utils.genUUID()}>{headerColumns}</tr>;
	};

	makeBody = () => {
		// Store each row to add to the table
		const displayedRows = [];

		// Loop over each row we are attempting to add
		_forEach(this.state.dataRows, (row) => {
			// Loop over each of the specified headers we are to include
			const displayedColumns = _map(this.state.headers, (column) => {
				if (typeof (row[column.key]) === 'undefined') {
					throw new Error(`Attempted to access dataRows key which does not exist: ${column.key}`);
				}

				// Possibly center the column
				const centerClass = (typeof (column.center) !== 'undefined' && column.center) ? 'is-centered' : '';

				// If an overrides object is provided, print the value in there
				let printVal = null;
				if (!_isUndefined(row.overrides) &&
					!_isUndefined(row.overrides[column.key])) {
					printVal = row.overrides[column.key];
				} else {
					printVal = row[column.key] ? row[column.key] : '\u2013';
				}

				// Attempt to auto-format phone numbers
				if (column.key.toLowerCase().search('phone') > -1
					&& printVal.match(/^\d{10}$/) !== null) {
					printVal = `(${printVal.substr(0, 3)}) ${printVal.substring(3, 6)}-${printVal.substr(6)}`;
				}

				// Add the column to the row
				return <td key={Utils.genUUID()} className={centerClass}>{printVal}</td>;
			});

			// Add the row the the tbody
			displayedRows.push(<tr key={Utils.genUUID()}>{displayedColumns}</tr>);
		});

		return displayedRows;
	};

	updateSortOrder = (sortValue) => {
		if(!this.props.allowSorting) { return; }
		if (this.state.sortValue === sortValue) {
			this.setState({ sortValue, sortAscending: !this.state.sortAscending }, () => {
				this.fetchPageData(this.state.currentPage)
			});
		} else {
			this.setState({ sortValue, sortAscending: true }, () => {
				this.fetchPageData(this.state.currentPage)
			});
		}
	};

	generatePaginationContainer = () => {
		if (this.state.pageCount === 1) { return null; }

		const paginationButtons = [];
		if (this.state.currentPage > 4 && this.state.pageCount > 7) {
			const firstPage = (
				<button
					key={Utils.genUUID()}
					className="paginated-table-pagination-button fidelis-button-default"
					onClick={() => { this.fetchPageData(1); }}
				><FontAwesomeIcon icon={faBackward} />
				</button>
			);
			paginationButtons.push(firstPage);
			paginationButtons.push(<span key={Utils.genUUID()}>&hellip;</span>);
		}

		for (let i = (this.state.currentPage - 3); i < this.state.currentPage; i += 1) {
			if (i > 0) {
				const thisPage = (
					<button
						key={Utils.genUUID()}
						className="paginated-table-pagination-button fidelis-button-default"
						onClick={() => { this.fetchPageData(i); }}
					>{i}
					</button>
				);
				paginationButtons.push(thisPage);
			}
		}

		const activeButton = (
			<button
				key={Utils.genUUID()}
				id="paginated-table-current-page-button"
				className="paginated-table-pagination-button fidelis-button-primary"
			>{this.state.currentPage}
			</button>
		);
		paginationButtons.push(activeButton);

		const lastThree = [];
		for (let i = (this.state.currentPage + 3); i > this.state.currentPage; i -= 1) {
			if (i <= this.state.pageCount) {
				const thisPage = (
					<button
						key={Utils.genUUID()}
						className="paginated-table-pagination-button fidelis-button-default"
						onClick={() => { this.fetchPageData(i); }}
					>{i}
					</button>
				);
				lastThree.push(thisPage);
			}
		}
		paginationButtons.push(lastThree.reverse());

		if (this.state.currentPage < (this.state.pageCount - 3) && this.state.pageCount > 7) {
			paginationButtons.push(<span key={Utils.genUUID()}>&hellip;</span>);
			const lastPage = (
				<button
					key={Utils.genUUID()}
					className="paginated-table-pagination-button fidelis-button-default"
					onClick={() => { this.fetchPageData(this.state.pageCount); }}
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
		if(!this.state.tableInitialized && this.state.showLoading){
			return (
				<div className="paginated-table-container">
					<Loading />
				</div>
			);
		}

		return (
			<div className="paginated-table-container">
				<div className="paginated-table-wrapper">
					{
						this.state.showLoading ?
							(
								<div className="fidelis-paginated-table-loading">
									{(this.props.loadingComponent === null) ? <Loading /> : this.props.loadingComponent}
								</div>
							) : (
								<table className="paginated-table">
									<thead>{this.makeHeader()}</thead>
									<tbody>{this.makeBody()}</tbody>
								</table>
							)
					}
				</div>
				{this.generatePaginationContainer()}
			</div>
		);
	}
}

HTTPaginatedTable.propTypes = {
	initialSortKey: PropTypes.string,
	initialSortAsc: PropTypes.bool,
	allowSorting: PropTypes.bool,
	initialPage: PropTypes.number,
	fetchPageData: PropTypes.func.isRequired,
	loadingComponent: PropTypes.object,
};

HTTPaginatedTable.defaultProps = {
	initialSortKey: null,
	initialSortAsc: true,
	allowSorting: false,
	initialPage: 1,
	loadingComponent: null,
};

export default HTTPaginatedTable;
