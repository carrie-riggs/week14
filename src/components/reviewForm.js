import React from 'react';


export default class Navbar extends React.Component {
    render() {
        return( 
        <div>
            <form >
                <textarea className='reviewForm'>
                </textarea>
                <br></br>
                <button className='submit'>Submit</button>
            </form>
        </div>
        );
    }
}