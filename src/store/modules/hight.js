const state = {
  height: 0
}
const mutations = {
  windowHeight: (state, msg) => {
    state.height = msg;
  }
}
export default {
  state,
  mutations

}
