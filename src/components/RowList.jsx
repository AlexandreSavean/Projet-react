import React from 'react';

const RowList = (data) => {
    return (
        <tr>
            <td className="position">
                {data.position}
            </td>
            <td className="teamName">
                <div className="imager">
                    <img src={data.crestURI} alt=""/>
                </div>
                <span>{data.teamName}</span>
            </td>
            <td>
                {/*{data.pokemon}*/}
            </td>
            <td>
                {data.playedGames}
            </td>
            <td>
                {data.wins}
            </td>
            <td>
                {data.draws}
            </td>
            <td>
                {data.losses}
            </td>
            <td>
                {data.goalsFor}
            </td>
            <td>
                {data.goalsAgainst}
            </td>
            <td>
                {data.goalDifference}
            </td>
            <td className="teamPoints">
                {data.points}
            </td>
        </tr>
    );
};

export default RowList;