import React from 'react'
import {SearchBar} from './delivery/SearchBar'

const App: React.FC = () =>
    <div className="container">
        <SearchBar search={value => console.log(value)}/>
    </div>


export default App
