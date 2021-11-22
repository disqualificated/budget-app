<template>
	<div class="budget-list-wrap">
		<ElCard :header="header">
			<div class="sorting">
				<div class="sorting-title">Sorting</div>
				<div class="sorting-buttons">
					<div class="sorting-btn positive" @click="showItemsType = 'positive'"><i class="el-icon-top"></i></div>
					<div class="sorting-btn" @click="showItemsType = 'all'"><i class="el-icon-files"></i></div>
					<div class="sorting-btn negative" @click="showItemsType = 'negative'"><i class="el-icon-bottom"></i></div>
				</div>
			</div>
			<BudgetListItem :list="showItems(list)" @deleteItem="deleteItemEvent"/>
		</ElCard>
	</div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';

export default {
	name: 'BudgetList',
	components: {
		BudgetListItem,
	},
	props: {
		list: {
			type: Object,
			default: () => ({})
		}
	},
	data() {
		return {
			header: 'Budget List',
			showItemsType: 'all',
		}
	},
	methods: {
		deleteItemEvent(id) {
			this.$emit('deleteItemEvent', id);
		},
		showItems(list) {
			const arrOfList = Object.values(list);
			
			let PositiveList = {};
			let NegativeList = {};
			

			arrOfList.forEach((element) => {
				if (element.value > 0) {
					PositiveList[element.id] = element;
				} else if (element.value < 0) {
					NegativeList[element.id] = element;
				}
			});

			if (this.showItemsType == 'all') {
				return list;
			} else if (this.showItemsType == 'positive') {
				return PositiveList;
			} else {
				return NegativeList;
			}
		},
	}
}
</script>

<style scoped>
	.budget-list-wrap {
		max-width: 500px;
		margin: auto;
	}
	.sorting {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 15px;
		margin-bottom: 20px;
	}
	.sorting-btn {
		cursor: pointer;
	}
	.sorting-buttons {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>