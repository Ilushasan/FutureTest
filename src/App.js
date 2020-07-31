import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import _ from 'lodash';
import Details from './components/Details/Details';
import Search from './components/Search/Search';
import DataSelector from './components/DataSelector/DataSelector';
import AddButton from './components/AddButton/AddButton';
import Form from './components/Form/Form';

class App extends Component {

  state = {
    isDataSelected: false,
    isLoading: false,
    data: [],
    sort: 'asc', // desc
    sortField: 'id',
    row: null,
    currentPage: 0,
    search: '',
    isFromOpen: false,
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  }

  async fetchData(url) {
    const response =  await fetch(url)
    const data = await response.json()

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort)
    }) 
  }

  onSort = (sortField) => {
    const clonedData = this.state.data.concat()
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc'

    const data = _.orderBy(clonedData, sortField, sort)

    this.setState({
      data,
      sort,
      sortField,
    })
  }

  dataSelectHand = url => {
    this.setState({
      isDataSelected: true,
      isLoading: true,
    })
    this.fetchData(url)
  }

  onSelect = row => {
    this.setState({row})
  }

  pageChangeHand = ({selected}) => {
    this.setState({
      currentPage: selected
    })
  }

  searchHand = search => {
    this.setState({search, currentPage: 0})
  }

  getFilteredDate() {
    const {data, search} = this.state

    if(!search) {
      return data
    }
    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
      || item['lastName'].toLowerCase().includes(search.toLowerCase())
      || item['email'].toLowerCase().includes(search.toLowerCase())
      || item['phone'].toLowerCase().includes(search.toLowerCase())
    })
  }

  openFrom = isFromOpen => {
    this.setState({
      isFromOpen: true,
    })
  }

  closeForm = isFromOpen => {
    this.setState({
      isFromOpen: false
    })
  }

  handleChange (firstName, lastName, email, phone) {
    console.log(firstName, lastName, email, phone)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
    const dataCount = 50
    if(!this.state.isDataSelected) {
      return(
        <div className="container">
          <DataSelector onSelectData={this.dataSelectHand}/>
        </div>
      )
    }

    const filteredData = this.getFilteredDate()

    const pageCount = Math.ceil(filteredData.length / dataCount)

    const displayData = _.chunk(filteredData, dataCount)[this.state.currentPage]

      return (
        <div className="container">
          {
            this.state.isLoading
              ? <Loader/>
              : <React.Fragment>
                <Search onSearch={this.searchHand}/>
                <AddButton onAddHand={this.openFrom} isFromOpen={this.state.isFromOpen}/>
                <Table 
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onSelect={this.onSelect}
                />
                {
                  this.state.isFromOpen
                  ? <Form onCloseHand={this.closeForm} 
                  isFromOpen={this.state.isFromOpen}
                  data={this.state.data}/>
                  :null
                }
              </React.Fragment>
          }
  
          {
          this.state.data.length > dataCount
            ? <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangeHand}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            forcePage={this.state.currentPage}
            />
            :null
          }

          {
            this.state.row
            ? <Details person={this.state.row}/>
            : null
          }
        </div>
      );



}

}

export default App;
