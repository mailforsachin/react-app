import './App.css';

function App() {
  const myAge1= 15;
  if(myAge1===15) {
     <h1> overage</h1>
  }
  else{
    return <div className="App"> underage </div>;
  }

  const person= {"name":"Sachin's", "age":20};
  
  const someDetail = (
    <div>
    <h1>  {person.age} </h1>
    <h1> {person.name}</h1> 
    </div>
  );

 
  const someField = (<h1>
    {person.name}
  </h1>
    )
  return (

    
    <div className="App">
    
    <h1>{person.name} React App
    </h1>
    <h2>
      My age is {person.age}
    </h2>
    {someField}
    {someDetail}
    <MyFuncGetName name="sachin" age={21} email="sachin.tewari@gmail.com"/>
    <MyFuncGetName name="tewari" age={21} email="sachin.tewari@gmail.com"/>
    <MyFuncGetName name="cjjetri" age={21} email="sachin.tewari@gmail.com"/>

    </div>
    
    
    
  );

  
  

}

const props= {"name":"Sachin's", "age":20, email:"sachin.tewari"};
const MyFuncGetName=function FuncGetName(props)
    {
      return (
        <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.email}</h1>
        </div>
        );
        
    };



export default App;
