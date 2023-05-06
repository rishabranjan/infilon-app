import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import BasicTable from "./components/BasicTable";
import { connect } from "react-redux";
import { pageChange, getData } from "./actions";

class App extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = (page) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((data) => {
        this.props.getData(data.data);
        this.setState({ data: data.data });
      })
      .catch((error) => console.log(error));
  };

  handlePageChange = (value) => {
    if (value !== this.props.data.page) {
      this.getDataFromApi(value);
      this.props.pageChange(value);
    }
  };

  handleDelete = (id) => {
    const filteredPeople = this.state.data.data.filter(
      (data) => data.id !== id
    );
    let newdata = this.state.data;
    newdata.data = filteredPeople;
    this.setState({ data: newdata });
    console.log(id, this.state.data.data, filteredPeople);
  };

  handleEdit = (id, data) => {
    const newData = this.state.data;
    const objIndex = this.state.data.data.findIndex((obj) => obj.id == id);
    newData.data[objIndex].first_name = data.fname;
    newData.data[objIndex].last_name = data.lname;
    newData.data[objIndex].email = data.email;
    this.setState({ data: newData });
    this.props.getData(newData.data);
  };

  render() {
    return (
      <div>
        {this.state.data.data && this.state.data.data.length > 0 ? (
          <BasicTable
            data={this.state.data}
            handlePageChange={this.handlePageChange}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        ) : (
          "No Data"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { page: state.pageNumber, data: state.userData };
};
const mapDispatchToProps = {
  pageChange,
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
