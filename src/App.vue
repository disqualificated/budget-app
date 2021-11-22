<template>
  <div id="app">
	<Form @submitForm="onFormSubmit"/>
	<TotalBalance :total="totalBalance"/>
	<BudgetList :list="itemsList" @deleteItemEvent="onDeleteItem"/>
	<ElDialog
		:title="dialogTilte"
		:visible.sync="dialogVisible"
		width="30%"
		ref="deleteItemDialog"
	>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">Cancel</el-button>
				<el-button type="primary" @click="deleteItemEvent">Confirm</el-button>
			</span>
	</ElDialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';

export default {
  name: 'App',
  components: {
	BudgetList,
	TotalBalance,
	Form,
  },
  data() {
	return {
		dialogTilte: 'Remove this item?',
		dialogVisible: false,
		currentItem: null
	}
  },
  computed: {
	...mapGetters('items', ['itemsList']),
	totalBalance() {
		return Object.values(this.itemsList).reduce(
			(acc, item) => acc + item.value, 
			0
		);
	},
  },
  methods: {
	...mapActions('items', ['addNewItem', 'deleteItem']),
	onDeleteItem(id) {
		this.dialogVisible = true;
		this.currentItem = id;
	},
	deleteItemEvent() {
		this.deleteItem(this.currentItem);
		this.dialogVisible = false;
		this.currentItem = null;
	},
	onFormSubmit(data) {
		data.type == 'INCOME' ? data.value : data.value * -1;
		
		const newItem = {
			...data,
			id: String(Math.random())
		};

		this.addNewItem(newItem);
	},
	
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.positive {
	color: #67C23A;
}
.negative {
	color: #F56C6C;
}
</style>
