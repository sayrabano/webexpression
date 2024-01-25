
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ExpressionForm = ({ onSubmit }) => {
    const navigate = useNavigate();
  const [expression, setExpression] = useState({
    connectorType: '',
    key: '',
    operator: '',
    value: '',
    score: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpression((prevExpression) => ({ ...prevExpression, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      expression.connectorType === '' ||
      expression.key === '' ||
      expression.operator === '' ||
      expression.value === '' ||
      expression.score === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    const newExpression = {
      key: expression.key,
      output: {
        operator: expression.operator,
        value: expression.value,
        score: expression.score,
      },
    };
    onSubmit(newExpression);
    navigate('/result')
    setExpression({
      connectorType: '',
      key: '',
      operator: '',
      value: '',
      score: '',
    });
  };

  return (
    <div className="container mt-2">
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-2 px-md-5 text-center text-lg-start my-1">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                Welcome to <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>Expression UI Based <br/> Engine</span>
              </h1>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <h1 className="mb-3 h3" >Expression Engine</h1>

                      <div className="col-md-6">
                        <div className="form-outline mb-4">
                          <label htmlFor="connectorType" className="form-label">
                            Connector Type
                          </label>
                          <select
                            className="form-select"
                            id="connectorType"
                            name="connectorType"
                            value={expression.connectorType}
                            onChange={handleInputChange}
                          >
                            <option value="select">Select</option>
                            <option value="and">AND</option>
                            <option value="or">OR</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-outline mb-4">
                          <label htmlFor="key" className="form-label">
                            Rule Type
                          </label>
                          <select
                            className="form-select"
                            id="key"
                            name="key"
                            value={expression.key}
                            onChange={handleInputChange}
                          >
                            <option value="select">Select</option>
                            <option value="age">Age</option>
                            <option value="creditScore">Credit Score</option>
                            <option value="accountBalance">Account Balance</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-outline mb-4">
                          <label htmlFor="operator" className="form-label">
                            Operator
                          </label>
                          <select
                            className="form-select"
                            id="operator"
                            name="operator"
                            value={expression.operator}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="select">Select</option>
                            <option value=">">{'>'}</option>
                            <option value="<">{'<'}</option>
                            <option value=">=">{'>='}</option>
                            <option value="<=">{'<='}</option>
                            <option value="=">{'='}</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-outline mb-4">
                          <label htmlFor="value" className="form-label">
                            Value
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="value"
                            name="value"
                            value={expression.value}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-outline mb-4">
                          <label htmlFor="score" className="form-label">
                            Score
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="score"
                            name="score"
                            value={expression.score}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add Expression</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpressionForm;
