<template>
    <div class="container">
        <el-row class="btn-wrap">
            <el-button type="primary" @click="dialogFormVisible = true">建档</el-button>
            <el-button type="success">查看</el-button>
            <el-button type="warning">终止</el-button>
        </el-row>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
        <!-- 新增居民档案弹出框 -->
        <el-dialog title="新增居民档案" :visible.sync="dialogFormVisible" width="60%">
            <el-form :model="form">
                <h4 class="title">居民档案</h4>
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content">
                            档案编号：系统自动生成
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content">
                            建档人：{{ form.resource }}
                        </div>
                    </el-col>
                </el-row>
                <el-table :data="model.tableData2" border style="width: 100%">
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-form-item :prop="'tableData2.' + scope.$index + '.input'" :rules='model.rules.input'>
                                <el-input :model="scope.row.input" ></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-form-item :prop="'tableData2.' + scope.$index + '.name'" :rules='model.rules.name'>
                                <el-input :model="scope.row.name" ></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-form-item :prop="'tableData2.' + scope.$index + '.supplier'" :rules='model.rules.supplier'>
                                <el-input :model="scope.row.supplier" ></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                </el-table>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: "Home",
    data() {
    return {
        tableData: [],
            dialogFormVisible: false,
            form: {
            name: "",
            region: "",
            date1: "",
            date2: "",
            delivery: false,
            type: [],
            resource: "哈利路亚",
            desc: ""
        },
        formLabelWidth: "120px",
        model:{
            rules: {
                name:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                input:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                supplier:{ type:"string",required:true,message:"必填字段",trigger:"change"},
            },
            tableData2: [{
                input: "",
                name: "",
                supplier: ""
            }, {
                input:"",
                name:"",
                supplier:""
            }]
        }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.btn-wrap {
  text-align: left;
  margin-bottom: 15px;
}
.title {
  text-align: center;
  font-size: 18px;
  margin: 0 0 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
</style>

