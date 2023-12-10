import { connect } from 'react-redux';
import React, { useState } from 'react';
import axios from 'axios';
import './SearchableTable.scss';
const SearchableTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        axios.get(`/admin/search?searchTerm=${searchTerm}`)
            .then(response => setSearchResults(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div className="searchable-table-container">
            <input
                type="text"
                placeholder="Enter keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <table>
                <thead>
                    <tr>
                        {/* Add table headers based on your data structure */}
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map(result => (
                        <tr key={result.id}>
                            {<td>{result.id}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default connect()(SearchableTable);
