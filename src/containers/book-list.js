import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

export  class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                onClick={()=>this.props.selectBook(book)}
                key={book.title} 
                className='list-group-item'>{book.title}</li>
            )
        });
    }


    render(){
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //whatever returns will show up as props inside BookList
    return{
        books: state.books
    };
} 
//anything returned from this function will end up as props on booklist container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook : selectBook}, dispatch)
}
//promote booklist from a component to  container, it needs to know about
//the dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);