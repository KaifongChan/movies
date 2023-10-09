export default function Contents({ value, userDetails }) {
    return (
        <>
            {value === true ? <LoggedInContent userDetails={userDetails} /> : <NewUserContent />}
        </>
    )
}

function LoggedInContent({ userDetails }) {
    return (
        <div>
            <h1>Welcome back, {userDetails.firstName} {userDetails.lastName} </h1>
        </div>
    )
}

function NewUserContent() {
    return (
        <div>
            <h1>Hello guest!</h1>
        </div>
    )
}