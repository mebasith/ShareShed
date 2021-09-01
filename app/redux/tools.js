import axios from 'axios';
import tool from '../../server/db/tool';

// Action Types
const GOT_TOOLS = 'GOT_TOOLS';
const DELETE_TOOLS = 'DELETE_TOOLS';
const UPDATE_TOOLS = 'UPDATE_TOOLS';

// Action Creators
const gotTools = (projects) => ({
  type: GOT_TOOLS,
  tools,
});

export const _deleteTool = (project) => {
  return {
    type: DELETE_TOOLS,
    project,
  };
};

export const _updateTool = (tool) => {
  return {
    type: UPDATE_TOOLS,
    project,
  };
};

// Thunk Creators
export const fetchTool = () => {
  return async (dispatch) => {
    try {
      const { data: tools } = await axios.get('/api/tools');
      dispatch(gotProjects(tools));
    } catch (error) {
      console.log('Error fetching projects from server');
    }
  };
};

export const deleteTool = (tool) => {
  return async (dispatch) => {
    await axios.delete(`/api/projects/${tool.id}`);
    dispatch(_deleteTool(tool));
  };
};

export const updateTool = (project, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/tools/${project.id}`,
      tool
    );
    dispatch(_updateTool(updated));
  };
};

//reducer
export default function projectsReducer(state = [], action) {
  switch (action.type) {
    case GOT_TOOLS:
      return action.tools;
    case DELETE_TOOL:
      return state.filter((tool) => tool.id !== action.tool.id);
    case UPDATE_TOOL:
      return state.map((tool) => (tool.id === action.tool.id ? action.tool : tool));
    default:
      return state;
  }
}
