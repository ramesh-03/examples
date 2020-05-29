import React from 'react';



export default class reacttab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
      tableData:[
        { name: "sachin", age: 40, game: "cricket" },
        { name: "ronald", age: 39, game: "foodball" },
        {name:"sania", age:35,game:"tennis"},
        {name:"saina", age:30,game:"badminton"}

      ]
    };
  }
  handleChange = (e) => {
    console.log(e.target.value, "searc")
    this.setState({search:e.target.value})
  }

  render() {
    const { tableData,search } = this.state;
    const filterData = tableData.filter( data => data.name === search);
    console.log("fie", filterData)
    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <th><input name="search" value={this.state.search} onChange={this.handleChange} type="text"></input></th>
              <th>Search</th>
            </tr>
          </tbody>
          <tbody>
            {tableData.map((data, i) => {
              return(<tr key={i}><td>{data.name} </td><td>{data.age} </td><td>{data.game} </td></tr>)
            })}
          </tbody>
        </table>
        
      </React.Fragment>
    );
  }
}
