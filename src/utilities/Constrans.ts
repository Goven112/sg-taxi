const API_BASE_URL_DEVELOPMENT: string  = 'https://localhost:44350';
const API_BASE_URL_PRODUCTION :string = 'https://aspnetcorereacttutorial-aspnetserver.azurewebsites.net';


const ENDPOINTS = {
    GET_ALL_POSTS: 'Orders',
    GET_POST_BY_ID: 'Orders',
    CREATE_POST: 'Orders',
    UPDATE_POST: 'Task_List',
    DELETE_POST_BY_ID: 'Task_List',

    GET_ALL_DEVELOPERS: 'Developers',
    GET_ALL_MENTORS: 'Mentors' 
    
};

const development = {
    BASE_URL: `${API_BASE_URL_DEVELOPMENT}`,
    API_URL_GET_ALL_POSTS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_POSTS}`,
    API_URL_GET_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_POST_BY_ID}`,
    API_URL_CREATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_POST}`,
    API_URL_UPDATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.UPDATE_POST}`,
    API_URL_DELETE_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_POST_BY_ID}`,

    API_URL_GET_ALL_DEVELOPERS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_DEVELOPERS}`,
    API_URL_GET_ALL_MENTORS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_MENTORS}`
};

const production = {
    BASE_URL: `${API_BASE_URL_DEVELOPMENT}`,
    API_URL_GET_ALL_POSTS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_POSTS}`,
    API_URL_GET_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_POST_BY_ID}`,
    API_URL_CREATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_POST}`,
    API_URL_UPDATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.UPDATE_POST}`,
    API_URL_DELETE_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_POST_BY_ID}`,

    API_URL_GET_ALL_DEVELOPERS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_DEVELOPERS}`,
    API_URL_GET_ALL_MENTORS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_MENTORS}`
};
const Constants = process.env.NODE_ENV === 'development' ? development : production;

export default Constants;
