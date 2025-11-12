
import { Button } from 'antd';
import MyButton from "../components/MyButton.tsx";

function handleClick() {
    console.log('click');
}

export default function User(){
    const btnName = 'Test'
    return (
        <>
            <div>user</div>
            <Button type="primary" onClick={handleClick}>Login</Button>
           <MyButton title={btnName}></MyButton>
        </>
    )
}
