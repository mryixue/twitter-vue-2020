import { apiHelper } from './../utils/helpers'

export default {
  followUser ({ id }) {
    return apiHelper.post('/followships', {
      id
    })
  },
  cancelFollow ({ followingId }) {
    return apiHelper.delete(`/followships/${followingId}`)
  }
}
