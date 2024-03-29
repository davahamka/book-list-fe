import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends React.Component {
    
    displayBookDetails(){
        const {book} = this.props.data
        if(book){
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>{book.author.name}</p>
                    <p>All book :</p>
                    <ul>
                        {book.author.books.map(item=>{
                           return <li key={item.id}>{item.name}</li> 
                        })}
                    </ul>
                </div>
            )
        } else {
            return(
                <div>No book selected..</div>
            )
        }
    }

    render() {
        
      return (
        <div id="book-detail">
            {this.displayBookDetails()}
        </div>
      );
    }
  }

  export default graphql(getBookQuery,{
      options: (props) => {
          return{
              variables:{
                  id:props.bookId
              }
          }
      }
  })(BookDetails);