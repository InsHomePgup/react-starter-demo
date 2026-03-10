import {forwardRef, useImperativeHandle, useRef} from "react";

const Child =forwardRef((props:{text:string},ref)=>{

  function sum(a:number,b:number){
    return a+b
  }

  useImperativeHandle(ref,()=>({
    sum,
  }))
  return <>
    <div>
      {props.text}
    </div>
  </>
})

function TextButton({text}:{text: string}) {
  return <>
    <button>{text}</button>
  </>
}


export default function About() {

  const childRef = useRef(Child);

  function say(){
    const name :string = childRef.current.name
    const num = childRef.current.sum(1,2);
    console.info(name,num)
  }

  return <>
    <h2 onClick={()=>{say()}}>About Page</h2>
    <div>123</div>
    <TextButton text="这是一个按钮" ></TextButton>
    <Child text="child" ></Child>
  </>
}
