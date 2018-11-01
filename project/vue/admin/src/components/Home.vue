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
                <table class="table" border="1">
                    <tbody>
                        <tr>
                            <td colspan="2">
                               <div class="inline" style="width:50%;">
                                   <div class="inline text-label">
                                        <span class="text-label-star">*</span>
                                        <span class="text-label-word">姓　　名：</span>
                                    </div>
                                    <div class="inline">
                                        <input type="text" class="form-control input-sm w-sm" name="username" id="" maxlength="">
                                    </div>
                               </div>
                               <div class="inline">
                                    <div class="inline text-label">
                                        <span class="text-label-word">健康卡号：</span>
                                    </div>
                                    <div class="inline">
                                        <input type="text" class="form-control input-sm w-sm" name="healthyCard" maxlength="">
                                    </div>
                                </div>
                            </td>
                            <td rowspan="4" style="width: 180px;">
                                <div class="ui-upload-box">
                                    <div class="ui-upload-view">
                                        <img class="avatar" src="../assets/logo.png">
                                    </div>
                                    <div class="ui-upload-btn m-t-sm">
                                        <div class="ui-upload-cover" style="text-align: center;">
                                            <div class="btn btn-sm btn-info">上传头像</div>
                                        </div>
                                        <div class="ui-upload-file">
                                            <input type="file" name="file" onchange="">
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="inline" style="width:50%;">
                                    <div class="inline text-label">
                                        <span class="text-label-star">*</span>
                                        <span class="text-label-word">身份证号：</span>
                                    </div>
                                    <div class="inline">
                                        <div>
                                            <input type="text" class="form-control input-sm w-sm" name="" id="" maxlength="18">
                                        </div>
                                        <div class="m-t-xs">
                                            <span class="text-color2" style="cursor: pointer;">监护人信息补充</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="inline">
                                    <div class="inline text-label">
                                        <span class="text-label-star">*</span>
                                        <span class="text-label-word">出生日期：</span>
                                    </div>
                                    <div class="inline">
                                        <el-date-picker type="date" class="w-sm" placeholder="选择日期"></el-date-picker>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="inline" style="width:50%;">
                                    <div class="inline text-label">
                                        <span class="text-label-star">*</span>
                                        <span class="text-label-word">性　　别：</span>
                                    </div>
                                    <div class="inline select-sm">
                                        <select class="form-control w-sm" id="sex">
                                            <option value="">请选择</option>
                                            <option value="1">男</option>
                                            <option value="2">女</option>
                                            <option value="0">未知</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="inline">
                                    <div class="inline text-label">
                                        <span class="text-label-word">民　　族：</span>
                                    </div>
                                    <div class="inline select-sm">
                                        <select class="form-control w-sm" id="nation">
                                            <option value="">请选择</option>
                                            <option value="1">汉族</option>
                                            <option value="2">壮族</option>
                                            <option value="0">蒙古族</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div>
                                    <div class="inline text-label">
                                        <span class="text-label-star">*</span>
                                        <span class="text-label-word">现住地址：</span>
                                    </div>
                                    <div class="inline select-sm">
                                        <div class="inline">
                                            <select class="form-control w-ss" id="">
                                                <option value="">省</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="0"></option>
                                            </select>
                                        </div>
                                        <div class="inline">
                                            <select class="form-control w-ss" id="">
                                                <option value="">市</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="0"></option>
                                            </select>
                                        </div>
                                        <div class="inline">
                                            <select class="form-control w-ss" id="">
                                                <option value="">区/县</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="0"></option>
                                            </select>
                                        </div>
                                        <div class="inline">
                                            <select class="form-control input-ss w-sm" id="">
                                                <option value="">街道/乡镇</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="0"></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-t-sm">
                                    <div class="inline text-label" style="visibility:hidden;">
                                        <span class="text-label-word">具体地址：</span>
                                    </div>
                                    <div class="inline">
                                        <input type="text" class="form-control input-sm" style="width: 522px;" name="address" id="address" maxlength="32" placeholder="居委会/村、栋、单元、门牌号等具体地址">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">户籍地址：</span>
									</div>
									<div class="inline select-sm">
										<div class="inline">
                                            <select class="form-control w-ss" id="">
                                                <option value="">省</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="0"></option>
                                            </select>
                                        </div>
                                        <div class="inline">
                                            <select class="form-control w-ss" id="">
                                                <option value="">市</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="0"></option>
                                            </select>
                                        </div>
                                        <div class="inline">
                                            <select class="form-control w-ss" id="">
                                                <option value="">区/县</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="0"></option>
                                            </select>
                                        </div>
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline" style="width: 33%;">
									<div class="inline text-label">
										<span class="text-label-word">本人手机号：</span>
									</div>
									<div class="inline">
										<input type="text" class="form-control input-sm w-sm" name="phone" id="phone" maxlength="11">
									</div>
								</div>
								<div class="inline" style="width: 33%;">
									<div class="inline text-label">
										<span class="text-label-word">联系人姓名：</span>
									</div>
									<div class="inline">
										<input type="text" class="form-control input-sm w-sm" name="contacts" maxlength="20">
									</div>
								</div>
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">联系人手机号：</span>
									</div>
									<div class="inline">
										<input type="text" class="form-control input-sm w-sm" name="contactsPhone" id="contactsPhone" maxlength="11">
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline" style="width:33%;">
									<div class="inline text-label">
										<span class="text-label-word">常住类型：</span>
									</div>
									<div class="inline">
										<el-radio v-model="householdRegister" label="1">户籍</el-radio>
  										<el-radio v-model="householdRegister" label="2">非户籍</el-radio>
									</div>
								</div>
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">工作单位：</span>
									</div>
									<div class="inline">
										<input type="text" class="form-control input-sm" style="width: 475px;" name="jobUnit" maxlength="32">
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">血型：</span>
									</div>
								</div>
								<div class="inline">
									<div>
										<el-radio v-model="bloodType.type" label="A">A型</el-radio>
  										<el-radio v-model="bloodType.type" label="B">B型</el-radio>
										<el-radio v-model="bloodType.type" label="O">O型</el-radio>
  										<el-radio v-model="bloodType.type" label="AB">AB型</el-radio>
										<el-radio v-model="bloodType.type" label="不详">不详</el-radio>
									</div>
									<div class="m-t-xs">
										<span class="inline text-label">RH：</span>
										<div class="inline">
											<el-radio v-model="bloodType.rh" label="阴性">阴性</el-radio>
											<el-radio v-model="bloodType.rh" label="阳性">阳性</el-radio>
											<el-radio v-model="bloodType.rh" label="不详">不详</el-radio>
										</div>
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline" style="width:50%;">
									<div class="inline text-label">
										<span class="text-label-word">文化程度：</span>
									</div>
									<div class="inline">
										<select class="form-control input-sm">
											<option value="" class="">请选择</option>
											<option value="0" label="研究生">研究生</option>
											<option value="1" label="大学本科">大学本科</option>
											<option value="2" label="大学专科和专科学校">大学专科和专科学校</option>
											<option value="3" label="中等专业学校">中等专业学校</option>
											<option value="4" label="技工学校">技工学校</option>
											<option value="5" label="高中">高中</option>
											<option value="6" label="初中">初中</option>
											<option value="7" label="小学">小学</option>
											<option value="8" label="文盲或半文盲">文盲或半文盲</option>
											<option value="9" label="不详">不详</option>
										</select>
									</div>
								</div>
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">职业：</span>
									</div>
								</div>
								<div class="inline">
									<select class="form-control input-sm">
										<option value="" class="">请选择</option>
										<option value="0" label="国家机关、党群组织、企业、事业单位负责人">国家机关、党群组织、企业、事业单位负责人</option>
										<option value="1" label="专业技术人员">专业技术人员</option>
										<option value="2" label="办事人员和有关人员">办事人员和有关人员</option>
										<option value="3" label="商业、服务业人员">商业、服务业人员</option>
										<option value="4" label="农、林、牧、渔、水利业生产人员">农、林、牧、渔、水利业生产人员</option>
										<option value="5" label="生产、运输设备操作人员及有关人员">生产、运输设备操作人员及有关人员</option>
										<option value="6" label="军人">军人</option>
										<option value="7" label="不便分类的其他从业人员">不便分类的其他从业人员</option>
										<option value="8" label="无职业">无职业</option>
									</select>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">婚姻状况：</span>
									</div>
									<div class="inline">
										<el-radio v-model="marriage" label="未婚">未婚</el-radio>
										<el-radio v-model="marriage" label="已婚">已婚</el-radio>
										<el-radio v-model="marriage" label="丧偶">丧偶</el-radio>
										<el-radio v-model="marriage" label="离婚">离婚</el-radio>
										<el-radio v-model="marriage" label="未说明的婚姻状况">未说明的婚姻状况</el-radio>
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline" id="payment">
									<div class="inline text-label">
										<span class="text-label-star">*</span>
										<span class="text-label-word">医疗费用支付方式：</span>
									</div>
									<div class="inline">
										<div>
											<el-checkbox >城镇职工基本医疗保险</el-checkbox>
											<el-checkbox >城镇居民基本医疗保险</el-checkbox>
											<el-checkbox >新型农村合作医疗</el-checkbox>
										</div>
										<div class="m-t-xs">
											<el-checkbox >贫困救助</el-checkbox>
											<el-checkbox >商业医疗保险</el-checkbox>
											<el-checkbox >全公费</el-checkbox>
											<el-checkbox >全自费</el-checkbox>
											<el-checkbox >其他</el-checkbox>
										</div>
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">社保卡号：</span>
									</div>
									<div class="inline">
										<input type="text" class="form-control input-sm w-sm" name="socialSecurity" id="socialSecurity" maxlength="12">
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">药物过敏史：</span>
									</div>
									<div class="inline m-r-xs">
										<el-checkbox>无</el-checkbox>
										<el-checkbox>青霉素</el-checkbox>
										<el-checkbox>磺胺</el-checkbox>
										<el-checkbox>链霉素</el-checkbox>
										<el-checkbox>其他</el-checkbox>
									</div>
									<div class="inline">
										<input type="text" class="form-control input-sm" style="width: 350px;" name="allergyOther" maxlength="32" disabled>
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">暴露史：</span>
									</div>
									<div class="inline">
										<el-checkbox>无</el-checkbox>
										<el-checkbox>化学品</el-checkbox>
										<el-checkbox>毒物</el-checkbox>
										<el-checkbox>射线</el-checkbox>
									</div>
								</div>
							</td>
                        </tr>
                        <tr id="disease">
                            <td rowspan="4" style="width: 100px;">既往史</td>
                            <td style="width: 100px;">
								<div class="text-center">疾病</div>
								<div class="text-center">
									<a class="text-color2">添加</a>
								</div>
							</td>
                            <td>
								<div v-if="!disease.length">无</div>
							</td>
                        </tr>
                        <tr id="operation">
                            <td>
								<div class="text-center">手术</div>
								<div class="text-center">
									<a class="text-color2">添加</a>
								</div>
							</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr id="trauma">
                            <td>
								<div class="text-center">外伤</div>
								<div class="text-center">
									<a class="text-color2">添加</a>
								</div>
							</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr id="infusion">
                            <td>
								<div class="text-center">输血</div>
								<div class="text-center">
									<a class="text-color2">添加</a>
								</div>
							</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td rowspan="4" style="width: 100px;">家族史</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="3">传染病史</td>
                        </tr>
                        <tr>
                            <td colspan="3">残疾情况</td>
                        </tr>
                        <tr>
                            <td rowspan="5">生活环境</td>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td rowspan="2">居民标签</td>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
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
		// 户籍
		householdRegister: '1',
		// 血型
		bloodType: {
			type: '1',
			rh: '2'
		},
		// 复选框
		checked: true,
		// 婚姻
		marriage: '1',
		// 既往史
		disease: [],
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
.el-row {
	margin-bottom: 10px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
}
</style>