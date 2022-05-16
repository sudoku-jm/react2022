import FriendItem from "./FriendItem";

const FriendList = ( {data,onDel} ) => {
    return (
        <ul className="">
            {
                data.map( item =>  <FriendItem key={item.id} item={item} onDel={onDel} />)
            }
           
        </ul>
    );
};

export default FriendList;