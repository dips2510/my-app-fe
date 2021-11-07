import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accounts from "./container/Accounts/Accounts";
import AccountHistory from "./components/AccountHistory/AccountHistory";
import AccountList from "./components/AccountList/AccountList";
import AccountTransfer from "./components/AccountTransfer/AccountTransfer";

function App() {
  return (
    <div className="App">
      <Router>
        <Accounts>
          <Routes>
            <Route exact path="/" element={<AccountList />} />
            <Route exact path="/history" element={<AccountHistory />} />
            <Route exact path="/transfer" element={<AccountTransfer />} />
          </Routes>
        </Accounts>
      </Router>
    </div>
  );
}

export default App;
