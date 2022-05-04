import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({
      type: 'FETCH_ALL',
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}
