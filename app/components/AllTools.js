import React from 'react';
import { connect } from 'react-redux';
import { deleteTool, fetchTool } from '../redux/tools';
import { Link } from 'react-router-dom';
import ToolForm from './ToolForm';

export class AllTools extends React.Component {
  componentDidMount() {
    this.props.getTools();
  }
  render() {
    const { tools } = this.props;
    return (
      <div className="TextCenter">
        <h3>Add a new tool:</h3>
        <ToolForm />
        <h3>Tools:</h3>
        <div className= "Allcards">
        {tools.map((tool) => (
          <div key={tool.id} className="Card">
            <h3>
              <div className="Card-title">
              <Link to={`/tools/${tool.id}`}>{tool.title}</Link>
              </div>
                <button
                  type="submit"
                  onClick={() => this.props.removeTool(tool)}
                >
                  ❌
                </button>
            </h3>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    tools: state.tools,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    getTools: () => dispatch(fetchTools()),
    removeTool: (tool) => dispatch(deleteTool(tool)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AllTools);
