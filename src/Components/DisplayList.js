import React from 'react';
import './DisplayList.css'
import artistsList from '../SearchData/data.js'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.states = {
            ArtistsList: []
        }
    }

    getList = () => {
        artistsList().then(res => {
            this.setState({
                ArtistsList: res
            })
            console.log(res)
        })
    }

    componentDidMount() {
        this.getList()
    }

    render() {
        let { ArtistsList } = this.state
        return <div className='display-list'>
            <ul>
                {ArtistsList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    }
}
export default Header;