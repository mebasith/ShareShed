import React, { Component } from 'react';

import { connect } from 'react-redux';
import {createTools} from '../redux/tools';
import { fetchTools } from '../redux/tools';

class CreateTool extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
    await this.props.createNewTool({ ...this.state });
    await this.props.getUpdatedTools()
    this.setState({
      title: ''
    })
    } catch (err){
      console.log(err)
    }
  }

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Tool Name: </label>
        <input name="title" onChange={handleChange} value={this.state.title} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    tools: state.tools
  }
};

const mapDispatchToProps = (dispatch, { history }) => ({
  createNewTool: (newTool) => dispatch(createTool(newTool, history)),
  getUpdatedTools: () => dispatch(fetchTools())
});

export default connect(mapStatetoProps, mapDispatchToProps)(CreateTool);