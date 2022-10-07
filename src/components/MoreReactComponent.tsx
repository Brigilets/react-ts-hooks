import { ReactElement } from "react";

export interface HeadingProps {
    title: string;
}

export function Heading({title}: HeadingProps) {
    return (
        <h1>{title}</h1>
    )
}

// Generic list 
export type ListComponent = <ListItem>({
    items,
    render
}: {
    items: ListItem[]; 
    render: (item: ListItem) => ReactElement;
}) => ReactElement; 

export const List: ListComponent = ({items, render}) =>{
    return (
        <ul>
            {items.map((item, index)=>(
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}; 



function TestComponent(){
    return (<div>
        <Heading title="Hello"/>
        <List
            items={["Sunny", "Rainy", "Cloudy"]} render={((string) => <strong>{string}</strong>)}
            />
        </div>
    )
}

export default TestComponent;