import React, { Component} from 'react';
import Axios from 'axios';
import { isAbsolute, relative } from 'path';

class CharacterSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchString: '',
            results: [],
            favorites: []
        }
    }
    onSearch = (e) => {
        this.setState({searchString: e.target.value})
    }
  
    onChange = () => {
       Axios.get(`/api/characterSearch?name=${this.state.searchString}`)
       .then((resp) => {console.log(resp.data.results)
        this.setState({results: resp.data.results})
    })

    }

    addFavorite = (person) => {
        Axios.post(`/api/addFavorite`, {
            person
        }).then((resp) => {console.log(resp)
       this.setState({favorites: resp.data})
        })
    }


    render() {
        console.log(this.state)
        let styles = {
            border: "1px solid black",
            position: "relative",
            background: "white"
        }
        let heartStyles = {
            height: "50px",
            width: "50px",
            position: "absolute",
            right: "0",

        }
    
        return(
            <div className='App'>
            <div>
                 <input onChange={this.onSearch}></input>
                <button onClick={this.onChange}>SEARCH</button>
            </div>
            <div className='mainStyles'>
             
                <div>
                 {this.state.results.map((e) => {
                     return  ( <div style={styles} key={e.id} onClick={() => this.addFavorite(e)}>
                        <img style={heartStyles} src={'http://www.milopowellpi.com/bmz_cache/1/161c899edbc3830b47f5aa7ac346d1b6.image.300x300.jpg'}/>
                        <p>Name:{e.name}</p>
                        <p>Status:{e.status}</p>
                        <p>Species:{e.species}</p>
                        <img src={e.image} />
                       </div> )
                } ) }
                </div>
                <div>
                {this.state.favorites.map((e) => {
                    return ( <div style={styles} key={e.id}>
                        <p>Name:{e.name}</p>
                        <p>Status:{e.status}</p>
                        <p>Species:{e.species}</p>
                        <img src={e.image} /> 

                    </div>)
                })}
                </div>
                 </div>
                 </div>
        )
    }
}

export default CharacterSearch;
