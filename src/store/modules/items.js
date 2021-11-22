import Vue from 'vue';

const itemsStore = {
	namespaced: true,
	state: {
		list: {
			1: {
				type: 'INCOME',
				value: 100,
				comment: 'Some comment',
				id: 1
			},
			2: {
				type: 'OUTCOME',
				value: -50,
				comment: 'Some  outcome comment',
				id: 2
			},
			3: {
				type: 'OUTCOME',
				value: -150,
				comment: 'Some  outcome comment',
				id: 3
			}
		}
	},
	getters: {
		itemsList: ({ list }) => list
	},
	mutations: {
		ADD_ITEM(state, item) {
			Vue.set(state.list, item.id, item);
		},
		DELETE_ITEM(state, itemId) {
			Vue.delete(state.list, itemId);
		}
	},
	actions: {
		addNewItem({ commit }, item) {
			commit('ADD_ITEM', item);
		},
		deleteItem({ commit }, itemId) {
			commit('DELETE_ITEM', itemId);
		}
	},
};

export default itemsStore;