import React, {MouseEvent} from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (_id: number) => void,
    filter: FilterType,
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        props.setFilter('all')
    };
    const setHigh = () => {
        props.setFilter('high')
    };
    const setMiddle = () => {
        props.setFilter('middle')
    };
    const setLow = () => {
        props.setFilter('low')
    };

    const set = (event: MouseEvent<HTMLButtonElement>) => {
        props.setFilter(event.currentTarget.value as FilterType);
    }

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    return (
        <div>
            <div className={s.buttonContainer}>
                <button value={'all'} id={'hw2-button-all'} onClick={set} className={cnAll}>
                    All
                </button>
                <button value={'high'} id={'hw2-button-high'} onClick={set} className={cnHigh}>
                    High
                </button>
                <button value={'middle'} id={'hw2-button-middle'} onClick={set} className={cnMiddle}>
                    Middle
                </button>
                <button value={'low'} id={'hw2-button-low'} onClick={set} className={cnLow}>
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
