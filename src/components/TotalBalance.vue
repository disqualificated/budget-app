<template>
	<div class="total-value" :class="priceColor(total)">Balance: {{ total }}</div>
</template>

<script>
import { priceColor } from './mixins/priceColor';

export default {
  name: 'TotalBalance',
  mixins: [priceColor],
  components: {
  },
  props: {
	total: {
		type: Number,
		default: 0
	}
  },
}
</script>

<style>
.total-value {
	font-size: 26px;
	text-transform: uppercase;
	padding: 20px;
	text-align: center;
}
.positive {
	color: #67C23A;
}
.negative {
	color: #F56C6C;
}
</style>
