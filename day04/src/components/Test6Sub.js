const Test6Sub = ({onDel1, onDel2, onAdd1, onAdd2, onMod1, onMod2}) => {
    return (
        <div>
            <p>
                <button onClick={onDel1}>삭제 filter 1</button>
                <button onClick={() => onDel2(2)}>삭제 filter (num)</button>
            </p>
            <p>
                <button onClick={onAdd1}>추가 6 스프레드</button>
                <button onClick={() => onAdd2('남주혁')}>추가(name)</button>
            </p>
            <p>
                <button onClick={onMod1}>수정 3</button>
                <button onClick={() => onMod2(4)}>수정 4(id)</button>
            </p>
        </div>
    );
};

export default Test6Sub;