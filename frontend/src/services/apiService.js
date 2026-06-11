import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const askAgent = async (task) => {
    const response = await axios.post(`${API_BASE_URL}/ask-agent`, { task });
    return response.data;
};

export const getTaskStatus = async () => {
    const response = await axios.get(`${API_BASE_URL}/task-status`);
    return response.data;
};

export const getMcpStatus = async () => {
    const response = await axios.get(`${API_BASE_URL}/mcptools/status`);
    return response.data;
};
