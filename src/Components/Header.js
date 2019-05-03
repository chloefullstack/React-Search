import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return <div className='header'>
            <div className='title'>React Search!</div>
            <div type='text' className='description' placeholder='Search the list with React'>Here is a list of Reggae artists rendered from a JSON object</div>
        </div>
    }
}
export default Header;