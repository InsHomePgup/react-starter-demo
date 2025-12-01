export default function User(){

    const user:{name:string;age:number;salary:number} = {
        name:'foo',
        age:20,
        salary:100
    }

    const renderAge = function (){
        return <>
            <div>
                {user.age>=20?bigAge():smallAge()}
            </div>
        </>
    }

    const bigAge = function (){
        return (
            <>
                <div>It is big age</div>
            </>
        )
    }

    const smallAge = function (){
        return (
            <>
                <div>It is small age</div>
            </>
        )
    }

    return (
        <>
            <div>
                <span>{user.name}</span>
                <div>实现一下v-if的效果</div>
                <div>{renderAge()}</div>
            </div>
        </>
    )
}
