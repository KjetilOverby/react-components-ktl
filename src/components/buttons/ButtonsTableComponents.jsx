import React from "react";

const ButtonsTableComponent = () => {
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>Any title</td>
              <td>Set the name of the button.</td>
            </tr>
            <tr>
              <td>func</td>
              <td>Any function</td>
              <td>Trigger a function.</td>
            </tr>
            <tr>
              <td>link</td>
              <td>Any link</td>
              <td>
                Set a link to a site in your own app or another url. Uses Next
                js Link.
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>standard</td>
              <td>Standard button with filled blue color.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>outline</td>
              <td>Standard transparent button with blue border.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>red</td>
              <td>Standard button with filled red color.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>red-outline</td>
              <td>Standard transparent button with red border.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>custom-bg</td>
              <td>Let you custom button with own colors.</td>
            </tr>
            <tr>
              <td>bg</td>
              <td>Any color</td>
              <td>
                Set the background color you like in this property. Works only
                when type custom-bg is chosen.
              </td>
            </tr>
            <tr>
              <td>color</td>
              <td>Any color</td>
              <td>
                Set the title color you like in this property. Works only when
                type custom-bg is chosen.
              </td>
            </tr>
            <tr>
              <td>bgh</td>
              <td>Any color</td>
              <td>
                Set the hover background color you like in this property. Works
                only when type custom-bg is chosen.
              </td>
            </tr>
            <tr>
              <td>colorh</td>
              <td>Any color</td>
              <td>
                Set the hover title color you like in this property. Works only
                when type custom-bg is chosen.
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
          td {
            padding: 1rem;
          }
          tr:nth-child(2n) {
            background: #e9e9e9;
          }
        `}
      </style>
    </>
  );
};

export default ButtonsTableComponent;
