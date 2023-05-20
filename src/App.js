import { useState } from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import './App.css';

const App=()=>{
  const [value, setValue] = useState('');
  const[copy,setCopy]=useState(false)

  return (
  <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <CopyToClipboard text={value}
      onCopy={()=>setCopy(true)}>
             <button type="button" >copy</button>
      </CopyToClipboard>
      {
        copy ? 
        <p>Copied</p> : null
      }
  </div>  
  );
}

export default App;
