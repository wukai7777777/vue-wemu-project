import getters from './getters.js'

const state = {
	showFoot:true
}

const mutations = {
	showFoot(state){
		state.showFoot = false;
	},
	hideFoot(state){
		state.showFoot = true;
	}
}
export default{
	state,
	mutations,
	getters
}