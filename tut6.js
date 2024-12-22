//LISTS and KEYS (contd.)

const Information=()=>{
    const people=[
        {
            id:0,
            name:"M.Ali",
            role:"SW Engg"
        },
        {
            id:1,
            name:"Hasan",
            role:"CS students"
        },
        {
            id:2,
            name:"Khan",
            role:"Phsyotherapist"
        }
    ]

    return(
        <div>
            <ul>
                {people.map((people)=>(
                    <li key={people.id}>
                        <p>Name: <strong>{people.name}</strong></p>
                        <p>Role: <strong>{people.role}</strong></p>
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default Information;