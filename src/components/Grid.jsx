import React, { useState } from 'react';
import gridData from "../grid.json"

const Grid = () => {
    const [selectedGrid, setSelectedGrid] = useState(0)
    const handleGridItemClick = (id) => {
        setSelectedGrid(id);
    };
    return <div className='parent_container'>
        <div className='grid_container'>
            {gridData.map((item, i) => {
                return <div
                    onClick={() => handleGridItemClick(item.id)} key={i}
                    className={`grid_container_items ${item.color} ${selectedGrid === item.id ? 'red' : ''}`}>
                </div>
            })}
        </div>
    </div>
}

export default Grid