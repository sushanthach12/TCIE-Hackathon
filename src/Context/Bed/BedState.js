import BedContext from "./BedContext";

const BedState = (props) => {

    const getBedsHos = async (hospitalID) => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/bed/getBeds`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"hospitalID" : hospitalID}) 
        })

        const response = res.json()
        return response
    }

    const BookBed = async (hospitalID, bedId, uid) => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/bookbed/bookbed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken' : `${token}`
            },
            body: JSON.stringify({"hospitalID" : hospitalID, "bedID": bedId, "uid": uid}) 
        })

        const response = await res.json()
        return response
    }

    return (
        <BedContext.Provider value={{getBedsHos, BookBed}}>
            {props.children}
        </BedContext.Provider>
    )
}

export default BedState