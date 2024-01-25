import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Result = ({rules,combinator,setCombinator, onDeleteRule }) => {
  

  return (
    <div className="container mt-2">
      <section className="" style={{ background: "#a3a5f3" }}>
        <div className="container px-4 py-2 px-md-5 text-center text-lg-start my-1">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-md-6">
                <Link to="/" className="btn btn-primary btn-sm ms-2">
                  Add More
                </Link>
                <div className="form-outline mb-4">
                  <label htmlFor="connectorType" className="form-label">
                    Connector Type
                  </label>
                  <select
                    className="form-select"
                    id="combinator"
                    value={combinator}
                    onChange={(e) => setCombinator(e.target.value)}
                  >
                    <option value="and">AND</option>
                    <option value="or">OR</option>
                  </select>
                </div>
              </div>

              <div>
                <h2>Rules</h2>
                {rules.map((rule, index) => (
                  <div key={index} className="mb-3">
                    <p>
                      {rule.key} {rule.output.operator} {rule.output.value}{" "}
                      (Score: {rule.output.score})
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => onDeleteRule(index)}
                      >
                        Delete
                      </button>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h2>Output:</h2>
                <pre>{JSON.stringify({ rules, combinator }, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;
