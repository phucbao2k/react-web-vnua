// SearchableTable.js

import React, { useState } from 'react';

const SearchableTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
      

        try {
            const response = await fetch(`http://localhost:7070/admin/search?searchTerm=${searchTerm}`);
            const data = await response.json();
            
            setSearchResults(data);
            console.log('Search data:', data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter search term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {/* Display data in table rows */}
            <table>
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                        <th>Column 6</th>
                        <th>Column 7</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((searchTerm) => (
                        <tr key={searchTerm.id}>
                            <td>{searchTerm.id}</td>
                            <td>{searchTerm.firstName}</td>
                            <td>{searchTerm.lastName}</td>
                            <td>{searchTerm.lastName}</td>
                            <td>{searchTerm.lastName}</td>
                            <td>{searchTerm.lastName}</td>
                            <td>{searchTerm.lastName}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchableTable;
