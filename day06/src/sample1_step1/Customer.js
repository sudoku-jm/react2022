import React, {  useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from '../sample1/Message';
import './style.css'

const dataList = [
    {id :1 , name:'차학연' , addr:'창원'},
    {id :2 , name:'정택운' , addr:'경기'},
    {id :3 , name:'김원식' , addr:'서울'},
    {id :4 , name:'이재환' , addr:'부산'},
    {id :5 , name:'한상혁' , addr:'대구'}
]

const Customer = () => {

    const [data, setData] = useState(dataList)
    const [current, setCurrent] = useState({})
    //수정상태
    const [isEdit , setIsEdit] = useState(false)

    const no = useRef(data.length + 1)

    //추가
    const onAdd = (form) => {
        console.log(form)
        form.id = no.current++
        setData([
            ...data,
            form
        ])
    }

    //삭제
    const onDel = (id) => {
        console.log('id',id)
        setData(data.filter(item => item.id !== id))
    }


    //수정
    const onEdit = (user) => {
        setIsEdit(true)
        setCurrent(user)
    }
    
    //갱신
    const onUpdate = (form) => {

        setIsEdit(false)
        // setData( data.map(item => item.id === form.id ? {
        //     ...item,
        //     name : form.name,
        //     addr : form.addr
        // } : item) )
        setData( data.map(item => item.id === form.id ? form : item) )
    }

    return (
        <div className='Customer'>

            
            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} /> : <AddUser onAdd={onAdd}/>
            }

            <ListUser data={data} onDel={onDel} onEdit={onEdit}/>
        </div>
    );
};

export default Customer;