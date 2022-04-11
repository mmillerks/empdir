import List from './components/EmployeeList';
import Item from './components/EmployeeListItem';
import SearchBar from './components/SearchBar';
import './App.css';

export default function App() {
  return (
    <div id="container">

      <div id="">
        <div id="search">
          <SearchBar></SearchBar>
        </div>
      </div>

      {/* <div id="">
        <div id="list">
          <List></List>
        </div>
      </div> */}

      <div id="innerCont">
        <Item></Item>
      </div>

    </div>
  );
}