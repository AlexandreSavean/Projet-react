import React from 'react'
import Table from 'react-bootstrap/Table';

const TableData = (props) => {
    return (
        <Table className="sportTable" striped bordered hover>
            <tbody>
            <tr className="tableHeader">
                <td className="team-position">
                    <i className="fas fa-align-justify"></i>
                </td>
                <td className="teamName">
                    Equipes
                </td>
                <td>
                    Pokemon
                </td>
                <td title="Matchs joués">
                    MJ
                </td>
                <td title="Gagné">
                    G
                </td>
                <td title="Nul">
                    N
                </td>
                <td title="Perdu">
                    P
                </td>
                <td title="Buts pour">
                    BP
                </td>
                <td title="Buts contre">
                    BC
                </td>
                <td title="Différence">
                    DB
                </td>
                <td title="Points équipes">
                    Pts
                </td>
            </tr>
            {props.children}
            </tbody>
        </Table>
    )
}

export default TableData