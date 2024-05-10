function List() {

    const items = [{ content: "home", value: 101 }, { content: "about", value: 107 }, { content: "Contact", value: 10 }, { content: "placeholder", value: 106 }, { content: "project", value: 91 }];
    
    const newbox = items.filter(val => { return val.value >= 1 })

    newbox.sort((a,b)=> a.content.localeCompare(b.content));

    const contain = newbox.map((item,index) => {
        return <li key={index}>
            <b>{item.content} :</b>  {item.value}
        </li>;
    })

    return (
        <>
        <ul>{contain}</ul></>  
    );
}
 
export default List
