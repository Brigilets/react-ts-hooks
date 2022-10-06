import UserContext, {UserState} from './store';
import {useState, useContext} from 'react';

function ConsumerComponent() {
    const user = useContext<UserState>(UserContext);

    return(
        <div>
            <div>First: {user.first}</div>
            <div>First: {user.last}</div>
        </div>
    )
}

function UseContextComponent() {
const [user, setUser] = useState<UserState>({
    first: "Gaele",
    last: "Leal",
})

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent/>
            <button
            onClick={() => setUser({
                first: "Lidia",
                last: "Fernan",
            })
            }
            >Change consumer</button>
        </UserContext.Provider>
    )
}

export default UseContextComponent;