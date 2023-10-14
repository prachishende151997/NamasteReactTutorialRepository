import User from "./User";
import UserClass from "./UserClass";

const About= ()=>{
    return(
        <div>
            <h1>About us page</h1>
            <User name={'Prachi Shende (functional component props)'}/>
            <UserClass  name={'Prachi Shende (Class component props)' } location={"Nagpur class based component"} />
        </div>
    )
}

export default About;