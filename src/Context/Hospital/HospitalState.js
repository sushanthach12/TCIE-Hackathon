import HospitalContext from "./HospitalContext";

const HospitalState = (props) => {

    const getHospitals = async () => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/hospital/getHos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const response = await res.json()
        return response
    }



    return (
        <HospitalContext.Provider value={{getHospitals}}>
            {props.children}
        </HospitalContext.Provider>
    )
}

export default HospitalState