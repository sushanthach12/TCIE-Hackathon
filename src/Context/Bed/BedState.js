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

    return (
        <BedContext.Provider value={{getBedsHos}}>
            {props.children}
        </BedContext.Provider>
    )
}

export default BedState