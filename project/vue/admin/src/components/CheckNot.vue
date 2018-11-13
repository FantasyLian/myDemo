<template>
    <div>
        <el-checkbox v-model="checkNot" @change="handleCheckNotChange" style="margin-right: 20px;">无</el-checkbox>
        <el-checkbox-group v-model="checkedItems" @change="handleCheckedChange" class="check-list">
        	<el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
const checkOptions = ['语文','数学','英语','历史','地理', '政治', '物理','化学', '生物', '体育'];
export default {
  data() {
    return {
		checkNot: false,
		checkedItems: [],
		items: checkOptions
    };
  },
  methods: {
    handleCheckNotChange(val) {
		if (val === true) {
			this.checkedItems = [];
		}
    },
    handleCheckedChange(value) {
      	this.checkNot = false;
    }
  }
};
</script>
<style lang="css" scoped>
	.check-list {
		display: inline-block;
	}
</style>