import axios from 'axios'
import url from './url'

export const getTodoList = () => {
  return axios({
    method: 'get',
    url: url.getList
  })
}
