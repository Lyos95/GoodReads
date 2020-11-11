
import React, { useState,useRef, useEffect } from 'react'
import './search-bar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

type SearchBarProps = {wait_Interval?:number,triggerAction:Function}
const SearchBar = ({wait_Interval=1000,triggerAction}:SearchBarProps) =>{
    const dispatch = useDispatch()
    //STATE
    const [inputValue, setInputValue] = useState('')
    const timeoutRef = useRef<ReturnType<typeof setTimeout>|null>(null)


    useEffect(() => {
    timeoutRef.current = setTimeout(() => {
        dispatch(triggerAction(inputValue))
    }, wait_Interval)
    }, [inputValue,wait_Interval,triggerAction,dispatch])

    let customClearTimeout = () => {
    if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
    }
    }

    let handleChange = (value: string) => {
    customClearTimeout()
    setInputValue(value)
    }

    return (
    <div className="search-bar">
        <div className="search-bar-input-group">
        <button className="search-bar-input-group__btn">
            <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
            type="text"
            value={inputValue}
            autoComplete="off"
            onChange={(e) => handleChange(e.target.value)}
            className="search-bar__form"
            name="search"
            placeholder="Search Task or Project..."
        ></input>
        </div>
    </div>
    )
}

export default SearchBar
