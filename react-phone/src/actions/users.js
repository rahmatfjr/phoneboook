const instance = axios.create({
  baseURL: 'https://localhost:3001/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const loadUser = (name, phone) => ({
  type: 'LOAD_USER'
})


export const addUser = (name, phone) => ({
    type: 'ADD_USER',
    name,
    phone
  })
