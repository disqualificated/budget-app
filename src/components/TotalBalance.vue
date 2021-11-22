<template>
	<div class="total-value" :class="priceColor">Balance: {{ total }}</div>
</template>

<script>

export default {
  name: 'TotalBalance',
  components: {
  },
  props: {
	total: {
		type: Number,
		default: 0
	}
  },
  data() {
	return {
		
	}
  },
  computed: {
	priceColor() {
		return {
			'negative': this.total < 0,
			'positive': this.total > 0
		}
	}
  }
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
