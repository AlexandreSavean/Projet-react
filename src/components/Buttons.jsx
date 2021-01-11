import React from 'react';
import Button from 'react-bootstrap/Button';

const Buttons = (data) => {
    return (
    <Button
        variant="dark"
        onClick={data.handleClick}
        data-leagueid={data.leagueId}
        className="button-padding"
    >{data.text}
    </Button>
    );
};

export default Buttons;