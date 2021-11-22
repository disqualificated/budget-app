<template>
	<div>
		<div class="list-item" v-for="item in list" :key="item.id">
			<span class="budget-comment">{{ item.comment }}</span>
			<span class="budget-value" :class="priceColor(item.value)"><i :class="itemIcon(item.value)"></i>{{ item.value }}</span>
			<ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
		</div>
		<template v-if="isEmpty">
			<ElAlert type="info" :title="emptyTitle" :closable="false"/>
		</template>
	</div>
</template>

<script>
import { priceColor } from './mixins/priceColor';

export default {
	name: 'BudgetListItem',
	mixins: [priceColor],
	props: {
		list: {
			type: Object,
			default: () => ({})
		}
	},
	data() {
		return {
			emptyTitle: 'Empty list',
		}
	},
	computed: {
		isEmpty() {
			return !Object.keys(this.list).length;
		},
	},
	methods: {
		deleteItem(id) {
			this.$emit('deleteItem', id);
		},
		itemIcon(value) {
			if (value > 0) {
				return 'el-icon-top';
			} else {
				return 'el-icon-bottom';
			}
		}
	},
}
</script>

<style scoped>
	.list-item {
		display: flex;
		align-items: center;
		padding: 10px 15px;
	}
	.budget-value {
		font-weight: bold;
		margin-left: auto;
		margin-right: 20px;
	}
	.list-enter-active, .list-leave-active {
		transition: all 0.5s;
	}
	.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
		opacity: 0;
		transform: translateY(30px);
	}
</style>