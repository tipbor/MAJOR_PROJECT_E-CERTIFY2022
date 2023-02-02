import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
//import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
//import getWeb3 from './getWeb3'
//import ipfs from './ipfs'
import Home from "./components/home";
// import About component
import Institute from "./components/institute";
// import ContactUs component
import Student from "./components/student";
import Thirdparty from "./components/thirdparty";
import Navhead from "./components/navbar";
import Forms from "./components/form";
import Getcert from "./components/getcert";
import Reg from "./components/reg";
import Intro from "./components/intro";
import certcontract from "./config.js";
import Certificate from "./components/certificate";
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import Ipfsupload from "./IpfsUpload1.js";

class App extends Component {
   
  state = {
    account: "",
    name: "",
    course: "",
    txh: "",
    id: "",
    output: [],
    tofound: false
  };
  componentDidMount() {
    console.log('mounted')
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    //added line 30
    await window.ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    //console.log(certcontract);
    console.log(accounts);
    console.log("acc", accounts[0]);
    this.setState({ account: accounts[0] });
  }

  //myevent =()=> certcontract.added();
  //myevent=>watch((error,result)=>{
  //  console.log(result);
  //});

  add = data => {
    //const certificates = new this.state.web3.eth.Contract(abi, address);
    //console.log(data.fname, data.course, data.email);
    var name = data.fname + " " + data.lname;
    certcontract.methods.addcert(name, data.course, data.email).send(
      {
        from: this.state.account,
        gas: 500000
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          this.setState({ name: data.fname + " " + data.lname });
          this.setState({ course: data.course + " " + "course" });
          this.setState({ txh: result });
          console.log(result);
          certcontract.methods
            .getid()
            .call({ from: this.state.account }, (error, result) => {
              this.setState({ id: result });
              if (!error) console.log(result);
              else console.log(error);
            });
          //certcontract.events.added({}, (error, ev) => {
          //to use event below 2 lines
          //let key = Object.keys(ev[1].returnValues)[1];
          //console.log(ev[1].returnValues[key]);
          //});
        }
      }
    );
  };
  get = data => {
    //console.log(data.id);
    certcontract.methods
      .getcert(data.id)
      .call({ from: this.state.account }, (error, result) => {
        if (!error) {
          console.log(result);
          const v = Object.values(result);
          this.setState({ output: v });
          this.setState({ tofound: true });
          //this.history.pushState("certfound");
          console.log(this.state.output);
        } else alert("Certificate not found");
      });
  };
  render() {
    return (
      <div className="App">
        <Router>
          
       
          <Route exact path="/" component={Home} />
            
            
            <Route path="/institute" component={Institute} />
              
        
            <Route path="/student" component={Student} />
            <Route path="/thirdparty" component={Thirdparty} />
              
           
        </Router>
      </div>
    );
  }
}

export default App;
