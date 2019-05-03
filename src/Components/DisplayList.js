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
        })}

    filterList = (item) => {
        return function(x) {
            return x.toLowerCase().includes(item.toLowerCase() || !item)
        }
    }

    componentDidMount() {
        this.getList()
    }

    render() {
        const {ArtistsData} = this.state;
        const {search} = this.props
        return <div className='display-list'>
            <ul>
                {ArtistsData.filter(this.filterList(search)).map((item, index) => 
                    <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    }
}
export default DisplayList;