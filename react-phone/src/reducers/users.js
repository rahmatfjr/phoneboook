const users = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return[]

    case 'ADD_USER':
      return [
        {
            name: action.name,
            phone: action.phone
        },
        ...state,
    ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default users