import SuggestionBox from './components/SuggestionBox';
import './App.css';
import { Query } from './mock/suggestions';
// import { Query as CountryQuery } from './mock/objSuggestions';

function App() {
 return <SuggestionBox queryFunc={Query} multiSelect={true}/>

  // return <SuggestionBox queryFunc={CountryQuery} keyAttr={"code"} valueAttr={"name"}/>
}

export default App;
