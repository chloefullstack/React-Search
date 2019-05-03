import React from 'react';
import './DisplayList.css'
import artistsList from '../SearchData/data.js'
class DisplayList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ArtistsData: []
        }
    }

    getList = () => {

        artistsList().then(res => {
            this.setState({
                ArtistsData: res
            })
        })
    }

    componentDidMount() {
        this.getList()
    }

    render() {
        const items = this.state.ArtistsData.map((item, index) => <li key={index}>{item}</li>)
        return <div className='display-list'>
            <div>{this.props.search}</div>
            <ul>
                {items}
            </ul>
        </div>
    }
}
export default DisplayList;