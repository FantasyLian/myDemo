<template>
    <div>
        <el-table
            :data="tableData"
            :span-method="arraySpanMethod"
            border
            style="width: 100%">
            <el-table-column
                prop="id"
                label="检查项目"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="评分">
            </el-table-column>
            <el-table-column
                prop="amount1"
                label="得分">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'table-cell',
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                }]
            }
        },
        methods: {
            arraySpanMethod({ row, column, rowIndex, columnIndex }) {
				if (rowIndex % 2 === 0) {
					if (columnIndex === 0) {
						return [1, 2];
					} else if (columnIndex === 1) {
						return [0, 0];
					}
				}
			}
		}
    }
</script>
<style lang="sass" scoped>

</style>
