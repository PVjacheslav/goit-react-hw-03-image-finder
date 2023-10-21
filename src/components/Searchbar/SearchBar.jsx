
import { Component } from 'react';

export class SearchBar extends Component {
    state = {
        searchName: '', // Зберігає значення введеного пошукового запиту
        inputValue: '',
    };


    render() {
        return (
            <header>
                <form>
                    <button type="submit" className="button">
                        <span>Search</span>
                    </button>
    
                    <input
                        name='searchName'
                        type='text'
                    />
                </form>
            </header>
        );
    }
};
