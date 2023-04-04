import React, { createContext, useContext, useEffect, useState } from 'react'


export const DataContext = createContext();
 function DataProvider({ children }) {

    const [book, setBook] = useState([])
    
    useEffect(() => {
        
        const getBooksDetail = async () => {
            try {
                const res = await fetch("https://6424560ad6152a4d480cc491.mockapi.io/library",{
                    method: "GET"
                })
                const prod = await res.json()
                setBook(prod);
            } catch (error) {
                console.log(error);
            }
        }
        getBooksDetail()
    },[])
    return (
        <DataContext.Provider
            value={
                {
                    book,
                    setBook
                }
            }
        >
            {children}
        </DataContext.Provider>
    )
}

export const UseData = () => {
    return useContext(DataContext)
}
export default DataProvider