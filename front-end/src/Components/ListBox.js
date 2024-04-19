import React from 'react';

const ListBox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div className="okokok">
            <div className="list-group-1">
                {
                    props.items.map((item, idx) => 
                    <button key={idx} onClick={clicked} className="btnstyle" id={item.track.id}>{item.track.name}
                    </button>)
                }
            </div>
        </div>
        

    );
}

export default ListBox;