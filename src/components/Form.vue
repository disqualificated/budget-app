<template>
	<ElCard class="form-card">
		<ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="left">
			<ElFormItem label="Type" prop="type">
				<ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
					<ElOption label="INCOME" value="INCOME"/>
					<ElOption label="OUTCOME" value="OUTCOME"/>
				</ElSelect>
			</ElFormItem>
			<ElFormItem label="Comments" prop="comment">
				<ElInput v-model="formData.comment"/>
			</ElFormItem>
			<ElFormItem label="Value" prop="value">
				<ElInput v-model.number="formData.value"/>
			</ElFormItem>
			<ElButton @click="onSubmit" type="primary">Submit</ElButton>
		</ElForm>
	</ElCard>
	
</template>

<script>
export default {
	name: 'Form',
	data() {
		let validateValue = (rule, value, callback) => {
			if (value === 0) {
				callback(new Error('Please input a number bigger than 0'));
			} else {
				callback();
			}
		};
		return {
			
			formData: {
				type: 'INCOME',
				comment: '',
				value: 0,
			},
			rules: {
				type: [{ required: true, message: 'Please select type', trigger: 'blur' }],
				comment: [{ required: true, message: 'Please type a comment', trigger: 'blur' }],
				value: [
					{ required: true, message: 'Please type a value', trigger: 'blur' },
					{ type: 'number', message: 'Value must be a number', trigger: 'blur' },
					{ validator: validateValue, trigger: 'blur' }
				],
			}
		}
	},
	methods: {
		onSubmit() {
			this.$refs.addItemForm.validate((valid) => {
				if (valid) {
					this.$emit('submitForm', { ...this.formData });
					this.$refs.addItemForm.resetFields();
				}
			})
		}
	}
}
</script>

<style scoped>
	.form-card {
		max-width: 500px;
		margin: auto;
	}
	.type-select {
		width: 100%;
	}
</style>