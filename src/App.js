import SuggestionBox from './components/suggestion/SuggestionBox';
import './App.css';
import { Query } from './mock/suggestions';
import { Query as CountryQuery } from './mock/objSuggestions';
import { Query as UserQuery } from './mock/userListing';

function App() {
  return <div>
    {/* <SuggestionBox queryFunc={Query} multiSelect={true} onChange={(x) => console.log(x)}/> */}
   {/* <SuggestionBox queryFunc={CountryQuery} keyAttr={"code"} multiSelect={true}  valueAttr={"name"} onChange={(x) => console.log(x)}/> */}
   <SuggestionBox queryFunc={UserQuery} multiSelect={true} onChange={(x) => console.log(x)}
  valueAttr={"displayName"} keyAttr={"mail"}/> 
  </div>
}

export default App;
