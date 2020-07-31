import React from 'react';
import './Details.css';

const Details = (props) => {
    return(
    <div className='detailsItem'>
        <h2>Выбран пользователь: {props.person.firstName + ' ' + props.person.lastName}</h2>
        <div>
        <p>Описание:</p> 
        <textarea defaultValue={props.person.description} className='detailsDescription'>
        </textarea>
        </div>
        <p>Адрес проживания: <b>{props.person.address.streetAddress}</b></p>
        <p>Город: <b>{props.person.address.city}</b></p>
        <p>Провинция/штат: <b>{props.person.address.state}</b></p>
        <p>Индекс: <b>{props.person.address.zip}</b></p>
    </div>)
}

export default Details