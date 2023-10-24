<template>
	<v-btn class="btnIn">{{ label }}</v-btn>
</template>

<script>
export default {
	name: 'btnIn',
	props: ['label']
}
</script>

<style scoped> 
.btnIn {
	display: inline-block;
	background: #222;
	color: #fff;
}
</style>
