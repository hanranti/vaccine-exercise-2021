import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:2222/api/'

const getAll = async (path) => {
  try {
    return (await axios.get(path, { headers: {} })).data
  } catch (error) {
    return error.message.includes('403')
      ? 403
      : {}
  }
}

export default getAll