import './App.css';

function App  ()   {
      
     let currdate = new Date(2022,1,2,8);
     currdate = currdate.getHours();

     let change = " ";

     const cssstyle = { };

     if(currdate >= 1 && currdate < 12){
     change="good morning";
      cssstyle.color='green';
    }else if(currdate >=12 && currdate < 19 ){

      change="good afternoon";
     cssstyle.color='yellow';
     }else{
      change = "good night";
      cssstyle.color = 'black';
     } 
  return (
    <div>
      <h1 style={{color:'orange'}}>Hello sir,<span style={cssstyle}>{change}</span></h1>
    </div>
  );

}

export default App;