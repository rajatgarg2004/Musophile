import React from 'react';

const Details = ({album, artists, name}) => {

    return (
        <div className="alpha1" >
            <div className="beta1">
                <img  className='imagur'
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div className="beta2">
                <label htmlFor={name} className="nameof1">
                    Song Title: {name}
                </label>
            </div>
            <div className="beta3">
                <label htmlFor={artists[0].name} className="nameof2">
                    Artist: {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default Details;