export const priceColor = {
	methods: {
		priceColor(price) {
			return {
				'negative': price < 0,
				'positive': price > 0
			}
		}
	}
}