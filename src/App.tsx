import React from 'react'
import {SearchBar} from './delivery/SearchBar'
import {CardNews} from './delivery/CardNews'
import {Paginator} from './delivery/Paginator'

const App: React.FC = () => {
    const thumbnails = [
        {'url': 'https://picsum.photos/152/107', 'height': 152, 'width': 107},
        {'url': 'https://picsum.photos/336/639', 'height': 336, 'width': 639},
        {'url': 'https://picsum.photos/175/350', 'height': 175, 'width': 350},
        {'url': 'https://picsum.photos/350/640', 'height': 350, 'width': 640},
        {'url': 'https://picsum.photos/152/107', 'height': 152, 'width': 107},
        {'url': 'https://picsum.photos/336/639', 'height': 336, 'width': 639},
        {'url': 'https://picsum.photos/175/350', 'height': 175, 'width': 350},
        {'url': 'https://picsum.photos/350/640', 'height': 350, 'width': 640},
    ]
    const objs = Array.from(Array(6).keys())
        .map((_, i) => ({
            description: 'The Wheel of Time TV adaptation released another teaser this week, giving fans their first glimpse at Daniel Henney as al\'Lan Mandragoran.',
            thumbnail: thumbnails[i],
        }))

    return (
        <div className="container pt-4">
            <h1>News Search</h1>
            <SearchBar search={value => console.log(value)}/>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                {objs.map(obj =>
                    <div className="col my-3">
                        <CardNews thumbnail={obj.thumbnail} description={obj.description}/>
                    </div>,
                )}
            </div>
            <Paginator pages={10} current={10}/>
        </div>)
}


export default App
