import React, {  useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css'

const dataList = [
    {id :1 , name:'차학연' , addr:'창원'},
    {id :2 , name:'정택운' , addr:'경기'},
    {id :3 , name:'김원식' , addr:'서울'},
    {id :4 , name:'이재환' , addr:'부산'},
    {id :5 , name:'한상혁' , addr:'대구'}
]

const Customer = () => {

    const [data, setData] = useState(
        () => JSON.parse( localStorage.getItem('data')) || dataList
    )

    const [msg, setMsg] = useState('...')
    const [isShow, setIsShow] = useState(false)
    

    const no = useRef(data.length + 1)

    useEffect( () => {
        localStorage.setItem( 'data' , JSON.stringify(data))
    },[data])

    //추가
    const onAdd = (form) => {
        console.log(form)
        form.id = no.current++
        setData([
            ...data,
            form
        ])
        setMsg("명단 추가했습니다.")
        setIsShow(true)
    }

    //삭제
    const onDel = (id) => {
        console.log('id',id)
        setData(data.filter(item => item.id !== id))
        setMsg("명단에서 삭제했습니다.")
        setIsShow(true)
    }


    //수정
    const [current, setCurrent] = useState({})
    //수정상태
    const [isEdit , setIsEdit] = useState(false)
    const onEdit = (user) => {
        setIsEdit(true)
        setCurrent(user)
        setMsg("명단 수정상태입니다.")
        setIsShow(true)
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

        setMsg("명단 수정했습니다.")
        setIsShow(true)
    }

    //메시지


    return (
        <div className='Customer'>

            
               <Message msg={msg} isShow={isShow} setIsShow={setIsShow}/>
            
            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} /> : <AddUser onAdd={onAdd}/>
            }

            <ListUser data={data} onDel={onDel} onEdit={onEdit}/>
        </div>
    );
};

export default Customer;