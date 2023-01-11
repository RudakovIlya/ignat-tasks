import React, {useEffect} from 'react'
import s from './App.module.css'
import HW5 from "../s2-homeworks/hw05/HW5";
import {useSelector} from "react-redux";
import {AppStoreType} from "../s2-homeworks/hw10/bll/store";

function App() {

    const themeID = useSelector((state: AppStoreType) => state.theme.themeId)

    useEffect(() => {
        document.documentElement.dataset.theme = themeID + ''
    }, [themeID])

    return (
        <div className={s.App}>
            <HW5/>
        </div>
    )
}

export default App
