<template>
	<div class="budget-list-wrap">
		<ElCard :header="header">
			<template v-if="!isEmpty">
				<BudgetListItem :list="list" @deleteItem="deleteItemEvent"/>
			</template>
			<ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
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
			emptyTitle: 'Empty list',
		}
	},
	computed: {
		isEmpty() {
			return !Object.keys(this.list).length;
		},
	},
	methods: {
		deleteItemEvent(id) {
			this.$emit('deleteItemEvent', id);
		}
	}
}
</script>

<style scoped>
	.budget-list-wrap {
		max-width: 500px;
		margin: auto;
	}
	

</style>