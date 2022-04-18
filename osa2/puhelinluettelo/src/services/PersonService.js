import axios from 'axios'
//const baseUrl = '/api/persons'
const baseUrl = 'http://localhost:3001/persons'
// One used enabled for part2, commented one in part3 with mongodb

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const annul = (id) => {
    axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, annul }
