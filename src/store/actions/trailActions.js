import request from '../../utils/request';

const TRAIL_API_URL = 'https://trell.co/third-party/tasks/trail.json';


const set

const getTrail = () => async (dispatch) => {
  const { response, error } = await request(TRAIL_API_URL);
  if (error) {
    dispatch()
  }
};


export {
  getTrail,
};