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
        const items = this.state.ArtistsData.map(item => <li>{item}</li>)
        return <div className='display-list'>
            <ul>
                {items}
            </ul>
        </div>
    }
}
export default DisplayList;