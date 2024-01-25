
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ExpressionForm from "./components/ExpressionForm";
import Result from "./components/Result";

const App = () => {
  const [rules, setRules] = useState([]);
  const [combinator, setCombinator] = useState("and");

  const handleFormSubmit = (newExpression) => {
    setRules([...rules, newExpression]);
  };

  const handleDeleteRule = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
   
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<div className="container mt-5">
            <ExpressionForm onSubmit={handleFormSubmit} />
          </div>}/>
          
      
        <Route path="/result" element={<Result
            rules={rules}
            combinator={combinator}
            setCombinator={setCombinator}
            onDeleteRule={handleDeleteRule}
          />}
          />
          
        
      </Routes>
    </Router>
  );
};

export default App;
