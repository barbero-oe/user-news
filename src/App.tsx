import React from 'react'
import {SearchBar} from './delivery/SearchBar'

const App: React.FC = () =>
    <div className="container pt-4">
        <h1>News Search</h1>
        <SearchBar search={value => console.log(value)}/>
    </div>


export default App
