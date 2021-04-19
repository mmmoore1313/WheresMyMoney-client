import apiUrl from '../apiConfig'
import axios from 'axios'

export const accountCreate = (account, user) => {
  return axios({
    url: apiUrl + '/accounts/',
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      account: {
        name: account.name,
        type: account.type,
        amount: account.amount
      }
    }
  })
}

export const accountIndex = (user) => {
  return axios({
    url: apiUrl + '/accounts/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const accountShow = (id, user) => {
  return axios({
    url: apiUrl + '/accounts/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const accountUpdate = (id, account, user) => {
  return axios({
    url: apiUrl + '/accounts/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      account: {
        name: account.name,
        type: account.type,
        amount: account.amount
      }
    }
  })
}

export const accountDelete = (id, user) => {
  return axios({
    url: apiUrl + '/accounts/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
