import {useSelector} from "react-redux";

const Welcome = function () {
    const a = useSelector( state => state.user.value.name)
    return (
        <>
            <h1>Welcome Page {a}</h1>
        </>
    )
}

export default Welcome