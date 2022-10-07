import {useState,useEffect} from 'react'


export interface Donuts {
    id: string;
    name: string;
    description: string;
    price: number;
}//Generic 
function useFetchData<Payload>(url: string): {
    data:  Payload | null;
    done: boolean;
} {
 const [data, setData] = useState<Payload | null>(null);
 const [done, setDone] = useState(false);

 useEffect(() => {
    fetch(url)
        .then((resp) =>resp.json())
        .then( (data: Payload) => {
        setData(data);
        setDone(true);

    })
 }, [url]);

 return {
    data, 
    done,
 };
}
//NON GENERIC
// function useFetchData(url: string): {
//     data:  Donuts[] | null;
//     done: boolean;
// } {
//  const [data, setData] = useState<Donuts[] | null>(null);
//  const [done, setDone] = useState(false);

//  useEffect(() => {
//     fetch(url)
//         .then((resp) =>resp.json())
//         .then( (data: Donuts[]) => {
//         setData(data);
//         setDone(true);
//         console.log(data)
//     })
//  }, [url]);

//  return {
//     data, 
//     done,
//  };
// }

function CustomHookComponent(){
const {data, done} = useFetchData<Donuts[]>("http://localhost:3000/donuts.json");

return( 
<div>
    {done && (
        data!.map(({id,name, price}) => (
            <ul>
                <li key={id}>{name} costs {price}€ .</li>
            </ul>
        )
            
        
    ))}
</div>)
}

export default CustomHookComponent;