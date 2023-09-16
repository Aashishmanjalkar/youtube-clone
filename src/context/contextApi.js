import React, { createContext, useState,useEffect } from 'react'
import { fetchDataFromAPi } from '../utils/api'

export const Context = createContext();
const AppContext = (props) => {

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories])
    
    const fetchSelectedCategoryData =(query)=>{
        setLoading(true);
        fetchDataFromAPi(`search/?q=${query}`).then(({contents})=>{
            setSearchResults(contents);
            // console.log(contents);
           setLoading(false);
        })
    }

  return (
    <Context.Provider value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu
    }}>
        {props.children}
    </Context.Provider>
  )
}

export default AppContext