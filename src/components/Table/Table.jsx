import React from 'react';
import './Table.css';

const Table = (props) => {
    return( 
    <table className="table">
        <thead className='tableHead'>
            <tr>
                <th onClick={props.onSort.bind(null, 'id')} className="tableHeadItem">
                    ID {props.sortField === 'id' ? <small>{props.sort}</small> : null}
                    </th>
                <th onClick={props.onSort.bind(null, 'firstName')} className="tableHeadItem">
                    First Name {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}
                    </th>
                <th onClick={props.onSort.bind(null, 'lastName')} className="tableHeadItem">
                    Last Name {props.sortField === 'lastName' ? <small>{props.sort}</small> : null}
                    </th>
                <th onClick={props.onSort.bind(null, 'email')} className="tableHeadItem">
                    Email {props.sortField === 'email' ? <small>{props.sort}</small> : null}
                    </th>
                <th onClick={props.onSort.bind(null, 'phone')} className="tableHeadItem">
                    Phone {props.sortField === 'phone' ? <small>{props.sort}</small> : null}
                    </th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.id + item.phone} onClick={props.onSelect.bind(null, item)} className='tableRow'>
                    <td>
                        {item.id}
                    </td>
                    <td>
                        {item.firstName}
                    </td>
                    <td>
                        {item.lastName}
                    </td>
                    <td>
                        {item.email}
                    </td>
                    <td>
                        {item.phone}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default Table;