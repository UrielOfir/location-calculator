export default function List (props){
    return <ul>
        {props.arr.map((element)=><li key={element.userName}>{element.userName} is in distance of {Math.ceil(element.distance)} km</li>)}
    </ul>
}