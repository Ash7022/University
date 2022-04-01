// import './App.css';
import List from './colleges'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import OpCard from './opcard';
import Card from './card';
function App() {
  return (
   <div >
         
    <BrowserRouter>
        
      <Routes>
        
        <Route exact path="/" element={<Card/>} />
        <Route exact path="/coleges" element={<List/>} />
        
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;

{/* <nav>
        <ul>
                         <li>𝘐𝘯𝘵𝘦𝘨𝘳𝘢𝘵𝘦𝘥 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯𝘴 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 𝘧𝘰𝘳 𝘜𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘪𝘦𝘴</li>
        </ul>
    </nav>

    
    <div className="container">
        <h1 id="heading">𝑭𝒊𝒏𝒅 𝒀𝒐𝒖𝒓 𝑫𝒆𝒔𝒊𝒓𝒆𝒅 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒊𝒆𝒔</h1>
        <div className="form">
            <form>
               

                 <br></br><br></br><br></br>
                 <label for="Tier" id="line2">Choose the Field:-</label>
                 <select name="Tier" id="Tier">
                     <option value="Tier">Select Field</option>
                     <option value="t1">Technical</option>
                     <option value="t2">Non-Technical</option>
                     
                 </select>

                 <br></br><br></br><br></br>
                   
                 <label for="Tier" id="line3">Select the State for Universities:-</label>
                 <select name="State" id="State">
                     <option value="State">Choose State for Universities</option>
                     <option value="s1">Odisha</option>
                     <option value="s2">Bihar</option>
                     <option value="s3">Maharastra</option>
                     <option value="s4">Karnataka</option>
                     <option value="s5">Delhi</option>
                     <option value="s6">West-bengal</option>
                     <option value="s7">Madhya-Pradesh</option>
                     <option value="s8">Uttar-pradesh</option>
                     <option value="s9">Jharkhand</option>
                     <option value="s10">Andhra-Pradesh</option>
                     <option value="s11">Tamilnadu</option>
                     <option value="s12">Chattisgarh</option>
                     <option value="s13">Telangana</option>
                     <option value="s14">Assam</option>
                     <option value="s15">Gujarat</option>
                     <option value="s16">Himachal-pradesh</option>
                     <option value="s17">Rajasthan</option>
                     <option value="s18">Jammu and Kashmir</option>
                     <option value="s19">Arunachal-pradesh</option>
                     <option value="s20">Kerala</option>
                     
                 </select>
                 <br></br><br></br><br></br>
                 <input type="submit" value="Submit" id="submit"></input>

            </form>
        </div>
    </div>

    <div className="bottom">
        <h2 id="note">Note:-Online Platform to Find Your Dream Universities/Colleges!</h2>
    </div> */}
