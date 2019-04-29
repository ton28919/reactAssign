import React, { Component } from 'react';
import firebase from './firebase'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(){
     super();
     this.state = {
        tree1:[],
        tree2:[],
        tree3:[],
        user_id:'',
        day:'',
        name:'',
        description:'',
        t1:false,
        t2:false,
        t3:false,
        c1:false,
        c2:false,
        c3:false,
        d1: false,
        d2: false,
        d3: false,
        h1:true
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleUpdate = this.handleUpdate.bind(this)
     this.handleSubmit1 = this.handleSubmit1.bind(this)
     this.handleSubmit2 = this.handleSubmit2.bind(this)
     this.handleSubmit3 = this.handleSubmit3.bind(this)
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.commendTree1 = this.commendTree1.bind(this);
    this.commendTree2 = this.commendTree2.bind(this);
    this.commendTree3 = this.commendTree3.bind(this);
  }
  toggle1() {
    this.setState({
      c1:false,
      c2:false,
      c3:false,
      d1: true,
      d2: false,
      d3: false
    })
}
toggle2() {
  this.setState({
    c1:false,
    c2:false,
    c3:false,
    d2: true,
    d1: false,
    d3: false
  })
}
toggle3() {
  this.setState({
    c1:false,
    c2:false,
    c3:false,
    d3: true,
    d1: false,
    d2: false
  })
}

  componentDidMount(){
    const tree1Ref = firebase.database().ref('tree1');
    tree1Ref.on('value',(snapshot) => {
        let tree1 = snapshot.val();
        let newState = [];
        for(let item in tree1){
          newState.push({
              user_id:item,
              day:tree1[item].day,
              name:tree1[item].name,
              description:tree1[item].description
          })
        }
        this.setState({
          tree1:newState
        })
    })
    const tree2Ref = firebase.database().ref('tree2');
    tree2Ref.on('value',(snapshot) => {
        let tree2 = snapshot.val();
        let newState = [];
        for(let item in tree2){
          newState.push({
              user_id:item,
              day:tree2[item].day,
              name:tree2[item].name,
              description:tree2[item].description
          })
        }
        this.setState({
          tree2:newState
        })
    })
    const tree3Ref = firebase.database().ref('tree3');
    tree3Ref.on('value',(snapshot) => {
        let tree3 = snapshot.val();
        let newState = [];
        for(let item in tree3){
          newState.push({
              user_id:item,
              day:tree3[item].day,
              name:tree3[item].name,
              description:tree3[item].description
          })
        }
        this.setState({
          tree3:newState
        })
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit1(e){
    e.preventDefault();
    if(this.state.name==''){
      alert("input name.");
    }
    else if(this.state.description==''){
      alert("input description.");
    }
    else{
    if(this.state.user_id != ''){
      return this.updateItem();
    }
    const tree1Ref = firebase.database().ref('tree1')
    const item = {
       day : this.state.day,
       name : this.state.name,
       description : this.state.description
    }
    tree1Ref.push(item)
    this.setState({
       user_id:'',
       day:'',
       name:'',
       description:''
    })
  }
 }
 handleSubmit2(e){
  e.preventDefault();
 if(this.state.name==''){
    alert("input name.");
  }
  else if(this.state.description==''){
    alert("input description.");
  }
  else if(this.state.day==''){
    alert("input day.")
  }
  else{
  if(this.state.user_id != ''){
    return this.updateItem();
  }
  const tree2Ref = firebase.database().ref('tree2')
  const item = {
     day : this.state.day,
     name : this.state.name,
     description : this.state.description
  }
  tree2Ref.push(item)
  this.setState({
     user_id:'',
     day:'',
     name:'',
     description:''
  })
}
}
handleSubmit3(e){
  e.preventDefault();
 if(this.state.name==''){
    alert("input name.");
  }
  else if(this.state.description==''){
    alert("input description.");
  }
  else if(this.state.day==''){
    alert("input day.")
  }
  else{
  if(this.state.user_id != ''){
    return this.updateItem();
  }
  const tree3Ref = firebase.database().ref('tree3')
  const item = {
     day : this.state.day,
     name : this.state.name,
     description : this.state.description
  }
  tree3Ref.push(item)
  this.setState({
     user_id:'',
     day:'',
     name:'',
     description:''
  })
}
}

  handleUpdate = (user_id = null , day = null , name = null , description = null) => {
    this.setState({user_id,day,name,description})
  }

removeItem1(itemId){
    const tree1Ref = firebase.database().ref('/tree1');
    tree1Ref.child(itemId).remove();
 }
 removeItem2(itemId){
  const tree2Ref = firebase.database().ref('/tree2');
  tree2Ref.child(itemId).remove();
}
removeItem3(itemId){
  const tree3Ref = firebase.database().ref('/tree3');
  tree3Ref.child(itemId).remove();
}
 toggleModal() {    
  this.setState((prev, props) => {
    const newState = !prev.modalState;
    
    return { modalState: newState };
  });
}
showHome(){
  this.setState({
    t1:false,
    t2:false,
    t3:false,
    h1:true
  })
}
showTree1(){
  this.setState({
    t1:true,
    t2:false,
    t3:false,
    h1:false
  })
}
showTree2(){
  this.setState({
    t1:false,
    t2:true,
    t3:false,
    h1:false
  })
}
showTree3(){
  this.setState({
    t1:false,
    t2:false,
    t3:true,
    h1:false
  })
}
commendTree1(){
  this.setState({
    c1:!this.state.c1,
    d1:false,
    c2:false,
    d2:false,
    c3:false,
    d3:false
  })
}
commendTree2(){
  this.setState({
    c2:!this.state.c2,
    d2:false,
    c1:false,
    d1:false,
    c3:false,
    d3:false
  })
}
commendTree3(){
  this.setState({
    c3:!this.state.c3,
    d3:false,
    c1:false,
    d1:false,
    c2:false,
    d2:false
  })
}

  render() {
    var hideHome={
      display: this.state.h1 ? "block" : "none"
    }
    var hidetree1={
      display: this.state.t1 ? "block" : "none"
    }
    var hidetree2={
      display: this.state.t2 ? "block" : "none"
    }
    var hidetree3={
      display: this.state.t3 ? "block" : "none"
    }
    var hideC1={
      display: this.state.c1 ? "block" : "none"
    }
    var hideC2={
      display: this.state.c2 ? "block" : "none"
    }
    var hideC3={
      display: this.state.c3 ? "block" : "none"
    }
    var hideD1={
      display: this.state.d1 ? "block" : "none"
    }
    var hideD2={
      display: this.state.d2 ? "block" : "none"
    }
    var hideD3={
      display: this.state.d3 ? "block" : "none"
    }
    return (
      <div className="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">How To Plant</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
    <a class="nav-link active" onClick={this.showHome.bind(this)}>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={this.showTree1.bind(this)}>Tree1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={this.showTree2.bind(this)}>Tree2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={this.showTree3.bind(this)}>Tree3</a>
  </li>
    </ul>
  </div>
</nav>
      <div className="container" style={{marginTop:25}}>
      <div style={hideHome}><center>
      <iframe width="1020" height="630" src="https://www.youtube.com/embed/ARwB7xb--sQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="1020" height="630" src="https://www.youtube.com/embed/53lJwr8KaXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center></div>
      <div style={hidetree1}>
      <img src={require('./picture/tree1.jpg')}></img><br></br>
      ต้นดาวเรือง<br></br>
      <button type="button" class="btn btn-primary" onClick={this.commendTree1}>Commend</button>
      <button type="button" class="btn btn-success" onClick={this.toggle1}>Show Commend</button>
      <br></br><br></br>
      <form style={hideC1} onSubmit={this.handleSubmit1} onKeyPress={event => {
      if (event.which === 13) {
        event.preventDefault();
        }
      }}>
          
          <div className="row" >
                <div className="col-8">
                  <div className="form-row">
                  <div className="col-4">
                      <input type="text" name="name" className="form-control" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
                    </div>
                  <div className="col-4">
                      <input type="text" name="day" className="form-control" placeholder="day" onChange={this.handleChange} value={this.state.day}/>
                    </div>
                    
                    <br></br><br></br>
                    <div className="col-12">
                      <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="col">
                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;&nbsp;
                    
                    </div>
                  </div>
                </div>
            </div>
        </form>
        
                <div style={hideD1}>
                <table className="table table-hover">
                    <tr className="thead-light">
                      <th width="25%">name</th>
                      <th width="15%">day of life</th>
                      <th width="50%">description</th>
                      <th width="10%">Delete</th>
                    </tr>
                    {
                        this.state.tree1.map((item) => {
                          return (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.day}</td>
                                <td>{item.description}</td>
                                <td><button className="btn btn-danger btn-md" onClick={() => this.removeItem1(item.user_id)}>Delete</button></td>
                              </tr>
                          )
                        })
                    }
                </table>
                </div>
                </div>
                <div style={hidetree2}>
                <img src={require('./picture/tree2.jpg')}></img><br></br>
                ต้นทานตะวัน<br></br>
                <button type="button" class="btn btn-primary" onClick={this.commendTree2}>Commend</button>
      <button type="button" class="btn btn-success" onClick={this.toggle2}>Show Commend</button>
      <br></br><br></br>
        <form style={hideC2} onSubmit={this.handleSubmit2} onKeyPress={event => {
      if (event.which === 13) {
        event.preventDefault();
        }
      }}>
           
          <div className="row" >
                <div className="col-8">
                  <div className="form-row">
                  <div className="col-4">
                      <input type="text" name="name" className="form-control" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
                    </div>
                  <div className="col-4">
                      <input type="text" name="day" className="form-control" placeholder="day" onChange={this.handleChange} value={this.state.day}/>
                    </div>
                    
                    <br></br><br></br>
                    <div className="col-12">
                      <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="col">
                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;&nbsp;
                    
                    </div>
                  </div>
                </div>
            </div>
        </form>
                
                <div style={hideD2}>
                <table className="table table-hover">
                    <tr className="thead-light">
                      <th width="25%">name</th>
                      <th width="15%">day of life</th>
                      <th width="50%">description</th>
                      <th width="10%">Delete</th>
                    </tr>
                    {
                        this.state.tree2.map((item) => {
                          return (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.day}</td>
                                <td>{item.description}</td>
                                <td><button className="btn btn-danger btn-md" onClick={() => this.removeItem2(item.user_id)}>Delete</button></td>
                              </tr>
                          )
                        })
                    }
                </table>
                </div>
                </div>
                <div style={hidetree3}>
                <img src={require('./picture/tree3.jpg')}></img><br></br>
                ต้นศรีตรัง<br></br>
                <button type="button" class="btn btn-primary" onClick={this.commendTree3}>Commend</button>
      <button type="button" class="btn btn-success" onClick={this.toggle3}>Show Commend</button>
      <br></br><br></br>
        <form style={hideC3} onSubmit={this.handleSubmit3} onKeyPress={event => {
      if (event.which === 13) {
        event.preventDefault();
        }
      }}>
           
          <div className="row" >
                <div className="col-8">
                  <div className="form-row">
                  <div className="col-4">
                      <input type="text" name="name" className="form-control" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
                    </div>
                  <div className="col-4">
                      <input type="text" name="day" className="form-control" placeholder="day" onChange={this.handleChange} value={this.state.day}/>
                    </div>
                    
                    <br></br><br></br>
                    <div className="col-12">
                      <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="col">
                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;&nbsp;
                    
                    </div>
                  </div>
                </div>
            </div>
        </form>
                
                <div style={hideD3}>
                <table className="table table-hover">
                    <tr className="thead-light">
                      <th width="25%">name</th>
                      <th width="15%">day of life</th>
                      <th width="50%">description</th>
                      <th width="10%">Delete</th>
                    </tr>
                    {
                        this.state.tree3.map((item) => {
                          return (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.day}</td>
                                <td>{item.description}</td>
                                <td><button className="btn btn-danger btn-md" onClick={() => this.removeItem3(item.user_id)}>Delete</button></td>
                              </tr>
                          )
                        })
                    }
                </table>
                </div>
                </div>
          </div>
      </div>
    );
  }
}

export default App;