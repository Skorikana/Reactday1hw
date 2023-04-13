const WebVisitors= () => {
  const myArray = ["120 people visited on Sunday" ,"240 people visited on Monday" ,"360 people visited on Tuesday","100 people visited on Wednesday"];
  const myList =myArray.map(((item) => <p>{item}</p>))
  return( 
  <div className ="webVisitors">
    <h3>WebsiteVisitors</h3>
       <h4>Total visitors in this week:821</h4>
      <div className ="sub">  
       <p>{myList}</p>   
   </div>
</div>
)
}
export default WebVisitors;