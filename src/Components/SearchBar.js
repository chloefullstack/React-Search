import React from 'react';
import './SearchBar.css'
import DisplayList from './DisplayList'
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }   
    }
    onChangeInput = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return <div >
            <div className='search'>Search:</div>
            <input onChange={this.onChangeInput} placeholder='Search the list with React'/>
            <DisplayList search={this.state.search}/>
        </div>
    }
}
export default SearchBar;