
import { Button } from 'antd';

function handleClick() {
    console.log('click');
}

export default function User(){
    return (
        <>
            <div>user</div>
            <Button type="primary" onClick={handleClick}>Login</Button>
        </>
    )
}
