export default function  MyTsx(){

    const name = 'foo'

    const person = {
        name:'foo',
        age:20
    }

    function formatNum (num: number): string {
        return num.toString()
    }

    function genText(age:number){
        return (
            <>
                {age > 18? <div>an audit</div> : <div>not an audit</div>}
            </>
        )
    }

    function renderAge(age:number){
        if(age > 18){
            return (<>
                <div>an audit</div>
            </>)
        }else{
            return (
                <>
                    <div>not an audit</div>
                </>
            )
        }
    }

    function ChildText({childName, age,married}  :{childName:string,age?:number,married?:boolean}) {
        return (
            <>
                <div>
                    {childName}
                </div>
                <div>
                    {renderAge(age as number)}
                </div>
                <div>married?:{married}</div>
            </>
        )
    }

    const arr = [1,2,3]

    return (
        <>
            <div>{name}</div>
            <div>This is a format num{formatNum(123.22)}</div>
            <div style={{background:'red'}}></div>
            <div>This is a person</div>
            <div>name:{person.name}</div>
            <div>age:{person.age}</div>
            <div>It is he was a audit: {person.age > 18?'yes':'no'}</div>
            <div>It is he was a audit: {genText(person.age)}</div>
            <ChildText childName={'son'} age={20} married={false}></ChildText>
            {person.age > 100 ? <div>test</div> : <div>test2</div>}
            {arr.map((item,index)=>{
                return (
                    <div key={index}>
                        <div>{item}</div>
                        <div>{index}</div>
                    </div>
                )
            })}
        </>
    )
}
