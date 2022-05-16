import PropTypes from 'prop-types';

const Test6Sub = ( {name, age, addr, tel, done, color, bgColor} ) => {
    return (
        <div style={{width:350,border:`3px solid ${color}`,margin:20, padding:15, backgroundColor:bgColor}}>
            <h2>{name} 신상명세서</h2>
            <ul>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>배경컬러 : {bgColor}</li>
                <li>보더컬러 : {color}</li>
                <li>동의여부 : {done ? '동의' : '비동의'}</li>
            </ul>
        </div>
    );
};

Test6Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string,
    tel: PropTypes.string,
    done: PropTypes.bool,
    color: PropTypes.string,
    bgColor: PropTypes.string,
};

Test6Sub.defaultProps = {
    name: '이름없음',
    age: 20,
    addr: '서울',
    tel: '010-',
    done: false,
    color: '#ccc',
    bgColor: '#eee',
};
  

export default Test6Sub;