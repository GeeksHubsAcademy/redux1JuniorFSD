
import './App.css';


import {connect} from 'react-redux';


function App(props) {


  return (
    <div className="App">
       

      
       
        <pre>{JSON.stringify(props, null,2)}</pre>

        <button onClick={()=> props.addRandomToDo()}>ADD UN TODO NUEVO</button>
        
        
       

 
    </div>
  );
}

const mapStateToProps = state => ({state : state});

const mapDispatchToProps = (dispatch) => ({
  ehYoTambienPuedo : 'eeeeeh',
  addRandomToDo : () => 
    dispatch({
      type: 'ADD_TODO',
      payload: 'ahora ya me has liado',
    }),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
