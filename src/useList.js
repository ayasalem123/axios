import { useDispatch } from 'react-redux';
import { list } from './redux/slice';
export default function UserList({liste}){
    const dispatch = useDispatch()
    return <button onClick={()=>dispatch(list(liste))}>show users</button>
}