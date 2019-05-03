import React from 'react';
import './DisplayList.css'
import artistsList from '../SearchData/data.js'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.states = {
            ArtistsData: []
        }
    }

    getList = () => {
        let self = this
        artistsList().then(res => {
            this.setState({
                ArtistsData: res
            })
            console.log(self.state.ArtistsData)
        })
    }

    componentDidMount() {
        this.getList()
        console.log(this.state.ArtistsData)
    }

    render() {
        // const items = this.state.ArtistsData.mao(item => <li>{item}</li>)
        return <div className='display-list'>
            <ul>
                {/* {items} */}
            </ul>
        </div>
    }
}
export default Header;