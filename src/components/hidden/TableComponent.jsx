import React from "react";

const TableComponent = () => {
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">Attribute</th>
              <th className="table-header">Name</th>
              <th className="table-header">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size</td>
              <td>small-down</td>
              <td>Hide all children who has a screensize larger than 550px</td>
            </tr>
            <tr>
              <td>size</td>
              <td>medium-down</td>
              <td>Hide all children who has a screensize larger than 1200px</td>
            </tr>
            <tr>
              <td>size</td>
              <td>large-down</td>
              <td>Hide all children who has a screensize larger than 1900px</td>
            </tr>
            <tr>
              <td>size</td>
              <td>small-up</td>
              <td>Hide all children who has a screensize smaller than 550px</td>
            </tr>
            <tr>
              <td>size</td>
              <td>medium-up</td>
              <td>
                Hide all children who has a screensize smaller than 1200px
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>large-up</td>
              <td>
                Hide all children who has a screensize smaller than 1900px
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .container {
          }
          .table {
            width: 100%;
            border: 1px solid #cacaca;
          }
          .table-header {
            font-weight: 300;
            padding: 1rem;
          }
          td {
            padding: 1rem;
          }
          tr:nth-child(2n) {
            background: #e9e9e9;
          }
          thead {
            background: #e9e9e9;
          }
        `}
      </style>
    </>
  );
};

export default TableComponent;
