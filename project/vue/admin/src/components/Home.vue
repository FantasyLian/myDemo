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
                            建档人：{{ form.creator }}
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
                                        <input type="text" class="form-control input-sm w-sm" name="username" v-model="form.username" id="" maxlength="20">
                                    </div>
                               </div>
                               <div class="inline">
                                    <div class="inline text-label">
                                        <span class="text-label-word">健康卡号：</span>
                                    </div>
                                    <div class="inline">
                                        <input type="text" class="form-control input-sm w-sm" v-model="form.healtyCardNo" name="healthyCard" maxlength="12">
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
                                        <div class="m-t-xs" @click="handleSupplementGuardianInfo">
                                            <span v-if="!form.hasGuardianInfo" class="text-color2" style="cursor: pointer;">监护人信息补充</span>
                                            <span v-else class="text-color4" style="cursor: pointer;">取消监护人信息</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="inline">
                                    <div class="inline text-label">
                                        <span class="text-label-star">*</span>
                                        <span class="text-label-word">出生日期：</span>
                                    </div>
                                    <div class="inline">
                                        <el-date-picker v-model="form.birthday" type="date" class="w-sm" placeholder="选择日期"></el-date-picker>
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
										<select v-model="form.selectNation" class="form-control w-sm" id="nation">
											<option value="">请选择</option>
											<option :value="item.id" :key="item.key" v-for="item in preinstall.data">{{item.name}}</option>
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
						<!-- 监护人信息 -->
						<tr v-if="form.hasGuardianInfo">
							<td colspan="3">
								<div>
									<div class="inline text-label">
										<span class="text-label-star">*</span>
										<span class="text-label-word">监护人信息</span>
									</div>
								</div>
								<div>
									<div class="inline" style="width:50%;">
										<div class="inline text-label">
											<span class="text-label-word">姓　　名：</span>
										</div>
										<div class="inline">
											<input type="text" class="form-control input-sm w-sm" id="parentName" name="parentName" maxlength="20">
										</div>
									</div>
									<div class="inline">
										<div class="inline text-label">
											<span class="text-label-word">身份证号：</span>
										</div>
										<div class="inline">
											<input type="text" class="form-control input-sm w-sm" id="parentIdCard" name="parentIdCard" maxlength="18">
										</div>
									</div>
								</div>
								<div class="m-t-sm">
									<div class="inline" style="width:50%;">
										<div class="inline text-label">
											<span class="text-label-word">监护关系：</span>
										</div>
										<div class="inline">
											<select class="form-control input-sm w-sm" id="parentRole" name="parentRole">
												<option value="" class="">请选择</option>
												<option value="0" label="父亲">父亲</option>
												<option value="1" label="母亲">母亲</option>
												<option value="2" label="配偶">配偶</option>
												<option value="3" label="子">子</option>
												<option value="4" label="女">女</option>
												<option value="5" label="兄">兄</option>
												<option value="6" label="姐">姐</option>
												<option value="7" label="弟">弟</option>
												<option value="8" label="妹">妹</option>
												<option value="9" label="(外)祖父母">(外)祖父母</option>
												<option value="10" label="其他">其他</option>
											</select>
										</div>
									</div>
									<div class="inline">
										<div class="inline text-label">
											<span class="text-label-word">手机号码：</span>
										</div>
										<div class="inline">
											<input filter-input="N" ng-trim="false" type="text" class="form-control input-sm w-sm ng-pristine ng-untouched ng-valid ng-isolate-scope ng-valid-maxlength" id="parentPhone" name="parentPhone" ng-model="pdata.parentPhone" maxlength="11" ng-disabled="pdata.disabled">
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
										<el-radio v-model="householdRegister" label="户籍"></el-radio>
  										<el-radio v-model="householdRegister" label="非户籍"></el-radio>
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
									<el-radio-group v-model="form.bloodType.type">
										<el-radio label="A型"></el-radio>
										<el-radio label="B型"></el-radio>
										<el-radio label="O型"></el-radio>
										<el-radio label="AB型"></el-radio>
										<el-radio label="不详"></el-radio>
									</el-radio-group>
									<div class="m-t-xs">
										<span class="inline text-label">RH：</span>
										<el-radio-group class="inline" v-model="form.bloodType.rh"> 
											<el-radio label="阴性"></el-radio>
											<el-radio label="阳性"></el-radio>
											<el-radio label="不详"></el-radio>
										</el-radio-group>
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
											<option value="0" label="研究生"></option>
											<option value="1" label="大学本科"></option>
											<option value="2" label="大学专科和专科学校"></option>
											<option value="3" label="中等专业学校"></option>
											<option value="4" label="技工学校"></option>
											<option value="5" label="高中"></option>
											<option value="6" label="初中"></option>
											<option value="7" label="小学"></option>
											<option value="8" label="文盲或半文盲"></option>
											<option value="9" label="不详"></option>
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
										<option value="0" label="国家机关、党群组织、企业、事业单位负责人"></option>
										<option value="1" label="专业技术人员"></option>
										<option value="2" label="办事人员和有关人员"></option>
										<option value="3" label="商业、服务业人员"></option>
										<option value="4" label="农、林、牧、渔、水利业生产人员"></option>
										<option value="5" label="生产、运输设备操作人员及有关人员"></option>
										<option value="6" label="军人"></option>
										<option value="7" label="不便分类的其他从业人员"></option>
										<option value="8" label="无职业"></option>
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
										<el-radio v-model="marriage" label="未婚"></el-radio>
										<el-radio v-model="marriage" label="已婚"></el-radio>
										<el-radio v-model="marriage" label="丧偶"></el-radio>
										<el-radio v-model="marriage" label="离婚"></el-radio>
										<el-radio v-model="marriage" label="未说明的婚姻状况"></el-radio>
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
											<el-checkbox label="城镇职工基本医疗保险"></el-checkbox>
											<el-checkbox label="城镇居民基本医疗保险"></el-checkbox>
											<el-checkbox label="新型农村合作医疗"></el-checkbox>
										</div>
										<div class="m-t-xs">
											<el-checkbox label="贫困救助"></el-checkbox>
											<el-checkbox label="商业医疗保险"></el-checkbox>
											<el-checkbox label="全公费"></el-checkbox>
											<el-checkbox label="全自费"></el-checkbox>
											<el-checkbox label="其他"></el-checkbox>
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
										<el-checkbox label="无"></el-checkbox>
										<el-checkbox label="青霉素"></el-checkbox>
										<el-checkbox label="磺胺"></el-checkbox>
										<el-checkbox label="链霉素"></el-checkbox>
										<el-checkbox label="其他"></el-checkbox>
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
										<el-checkbox label="无"></el-checkbox>
										<el-checkbox label="化学品"></el-checkbox>
										<el-checkbox label="毒物"></el-checkbox>
										<el-checkbox label="射线"></el-checkbox>
									</div>
								</div>
							</td>
                        </tr>
						<tr>
							<td colspan="3" style="padding: 0;">
								<table class="table sub-table" style="border: none;">
									<tr id="disease">
										<td style="width: 100px;" rowspan="4">
											<div class="text-center">既往史</div>
										</td>
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
										<td><div v-if="!operation.length">无</div></td>
									</tr>
									<tr id="trauma">
										<td>
											<div class="text-center">外伤</div>
											<div class="text-center">
												<a class="text-color2">添加</a>
											</div>
										</td>
										<td><div v-if="!trauma.length">无</div></td>
									</tr>
									<tr id="infusion">
										<td style="border-bottom: none;">
											<div class="text-center">输血</div>
											<div class="text-center">
												<a class="text-color2">添加</a>
											</div>
										</td>
										<td><div v-if="!infusion.length">无</div></td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td colspan="3" style="padding: 0;">
								<table class="table sub-table">
									<tr>
										<td rowspan="4">
											<div class="text-center">家族史</div>
										</td>
										<td style="width: 100px;">
											<div class="text-center">父亲</div>
										</td>
										<td>
											<div>
												<el-checkbox label="高血压"></el-checkbox>
												<el-checkbox label="糖尿病"></el-checkbox>
												<el-checkbox label="冠心病"></el-checkbox>
												<el-checkbox label="慢性阻塞性肺疾病"></el-checkbox>
												<el-checkbox label="恶性肿瘤"></el-checkbox>
												<el-checkbox label="脑卒中"></el-checkbox>
											</div>
											<div class="m-t-xs">
												<el-checkbox label="严重精神障碍"></el-checkbox>
												<el-checkbox label="结核病"></el-checkbox>
												<el-checkbox label="肝炎"></el-checkbox>
												<el-checkbox label="先天畸形"></el-checkbox>
												<el-checkbox label="其他"></el-checkbox>
												<div class="inline">
													<input type="text" class="form-control input-sm w-sm" style="width:200px;" name="familyFatherOther" maxlength="32" disabled>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="text-center">母亲</div>
										</td>
										<td>
											<div>
												<el-checkbox label="高血压"></el-checkbox>
												<el-checkbox label="糖尿病"></el-checkbox>
												<el-checkbox label="冠心病"></el-checkbox>
												<el-checkbox label="慢性阻塞性肺疾病"></el-checkbox>
												<el-checkbox label="恶性肿瘤"></el-checkbox>
												<el-checkbox label="脑卒中"></el-checkbox>
											</div>
											<div class="m-t-xs">
												<el-checkbox label="严重精神障碍"></el-checkbox>
												<el-checkbox label="结核病"></el-checkbox>
												<el-checkbox label="肝炎"></el-checkbox>
												<el-checkbox label="先天畸形"></el-checkbox>
												<el-checkbox label="其他"></el-checkbox>
												<div class="inline">
													<input type="text" class="form-control input-sm w-sm" style="width:200px;" name="familyFatherOther" maxlength="32" disabled>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="text-center">兄弟姐妹</div>
										</td>
										<td>
											<div>
												<el-checkbox label="高血压"></el-checkbox>
												<el-checkbox label="糖尿病"></el-checkbox>
												<el-checkbox label="冠心病"></el-checkbox>
												<el-checkbox label="慢性阻塞性肺疾病"></el-checkbox>
												<el-checkbox label="恶性肿瘤"></el-checkbox>
												<el-checkbox label="脑卒中"></el-checkbox>
											</div>
											<div class="m-t-xs">
												<el-checkbox label="严重精神障碍"></el-checkbox>
												<el-checkbox label="结核病"></el-checkbox>
												<el-checkbox label="肝炎"></el-checkbox>
												<el-checkbox label="先天畸形"></el-checkbox>
												<el-checkbox label="其他"></el-checkbox>
												<div class="inline">
													<input type="text" class="form-control input-sm w-sm" style="width:200px;" name="familyFatherOther" maxlength="32" disabled>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td style="border-bottom: none;">
											<div class="text-center">子女</div>
										</td>
										<td>
											<div>
												<el-checkbox label="高血压"></el-checkbox>
												<el-checkbox label="糖尿病"></el-checkbox>
												<el-checkbox label="冠心病"></el-checkbox>
												<el-checkbox label="慢性阻塞性肺疾病"></el-checkbox>
												<el-checkbox label="恶性肿瘤"></el-checkbox>
												<el-checkbox label="脑卒中"></el-checkbox>
											</div>
											<div class="m-t-xs">
												<el-checkbox label="严重精神障碍"></el-checkbox>
												<el-checkbox label="结核病"></el-checkbox>
												<el-checkbox label="肝炎"></el-checkbox>
												<el-checkbox label="先天畸形"></el-checkbox>
												<el-checkbox label="其他"></el-checkbox>
												<div class="inline">
													<input type="text" class="form-control input-sm w-sm" style="width:200px;" name="familyFatherOther" maxlength="32" disabled>
												</div>
											</div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">遗传病史：</span>
									</div>
									<div class="inline m-r-sm">
										<el-radio v-model="heredopathia" label="1">无</el-radio>
  										<el-radio v-model="heredopathia" label="2">有</el-radio>
									</div>
									<div class="inline">
										<input type="text" class="form-control input-sm" style="width:500px;" name="hereditaryOther" maxlength="32" disabled>
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3">
								<div class="inline">
									<div class="inline text-label">
										<span class="text-label-word">残疾情况：</span>
									</div>
									<div class="inline">
										<div>
											<el-checkbox label="无残疾"></el-checkbox>
											<el-checkbox label="视力残疾"></el-checkbox>
											<el-checkbox label="听力残疾"></el-checkbox>
											<el-checkbox label="言语残疾"></el-checkbox>
											<el-checkbox label="肢体残疾"></el-checkbox>
										</div>
										<div class="m-t-sm">
											<div class="inline m-r-sm">
												<el-checkbox label="智力残疾"></el-checkbox>
												<el-checkbox label="精神残疾"></el-checkbox>
												<el-checkbox label="其他残疾"></el-checkbox>
											</div>
											<div class="inline">
												<input type="text" class="form-control input-sm" style="width:440px;" name="deformityOther" maxlength="32" disabled>
											</div>
										</div>
									</div>
								</div>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 0;">
								<table class="table sub-table">
									<tr>
										<td rowspan="5"><div class="text-center">生活环境</div></td>
										<td>
											<div>
												<div class="inline text-label">
													<span class="text-label-word">厨房排风设施：</span>
												</div>
												<div class="inline">
													<el-radio v-model="environment.kitchen" label="1">无</el-radio>
													<el-radio v-model="environment.kitchen" label="2">油烟机</el-radio>
													<el-radio v-model="environment.kitchen" label="3">换气扇</el-radio>
													<el-radio v-model="environment.kitchen" label="4">烟囱</el-radio>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div>
												<div class="inline text-label">
													<span class="text-label-word">燃料类型：</span>
												</div>
												<div class="inline">
													<el-radio v-model="environment.fuel" label="1">液化气</el-radio>
													<el-radio v-model="environment.fuel" label="2">煤</el-radio>
													<el-radio v-model="environment.fuel" label="3">天然气</el-radio>
													<el-radio v-model="environment.fuel" label="4">沼气</el-radio>
													<el-radio v-model="environment.fuel" label="5">柴火</el-radio>
													<el-radio v-model="environment.fuel" label="6">其他</el-radio>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div>
												<div class="inline text-label">
													<span class="text-label-word">饮水：</span>
												</div>
												<div class="inline">
													<el-radio v-model="environment.water" label="1">自来水</el-radio>
													<el-radio v-model="environment.water" label="2">经净化过滤的水</el-radio>
													<el-radio v-model="environment.water" label="3">井水</el-radio>
													<el-radio v-model="environment.water" label="4">河湖水</el-radio>
													<el-radio v-model="environment.water" label="5">塘水</el-radio>
													<el-radio v-model="environment.water" label="6">其他</el-radio>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div>
												<div class="inline text-label">
													<span class="text-label-word">厕所：</span>
												</div>
												<div class="inline">
													<el-radio v-model="environment.toilet" label="1">厕所</el-radio>
													<el-radio v-model="environment.toilet" label="2">一格或二格粪池式</el-radio>
													<el-radio v-model="environment.toilet" label="3">马桶</el-radio>
													<el-radio v-model="environment.toilet" label="4">露天粪坑</el-radio>
													<el-radio v-model="environment.toilet" label="5">简易棚厕</el-radio>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div>
												<div class="inline text-label">
													<span class="text-label-word">禽畜栏：</span>
												</div>
												<div class="inline">
													<el-radio v-model="environment.corral" label="1">无</el-radio>
													<el-radio v-model="environment.corral" label="2">单设</el-radio>
													<el-radio v-model="environment.corral" label="3">室内</el-radio>
													<el-radio v-model="environment.corral" label="4">室外</el-radio>
												</div>
											</div>
										</td>
									</tr>
								</table>
							</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 0;">
								<table class="table sub-table">
									<tr>
										<td rowspan="2"><div class="text-center">居民标签</div></td>
										<td>
											<div>
												<div class="inline text-label">
													<span class="text-label-word">人群分类：</span>
												</div>
												<div class="inline">
													<div>
														<el-checkbox label="1">0-6岁儿童</el-checkbox>
														<el-checkbox label="2">孕产妇</el-checkbox>
														<el-checkbox label="3">老年人</el-checkbox>
													</div>
													<div class="m-t-xs">
														<el-checkbox label="4">高血压</el-checkbox>
														<el-checkbox label="5">糖尿病</el-checkbox>
														<el-checkbox label="6">精神疾病</el-checkbox>
														<el-checkbox label="7">结核病</el-checkbox>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div>
												<div class="inline text-label">
													<span class="text-label-word">特殊人群：</span>
												</div>
												<div class="inline">
													<el-checkbox label="1">残疾人士</el-checkbox>
													<el-checkbox label="2">贫困人口</el-checkbox>
												</div>
											</div>
										</td>
									</tr>
								</table>
							</td>
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
import { homeForm as forms } from '../assets/data/form.data';
import { nations as preinstall } from '../assets/data/from.preinstall';
export default {
    name: "Home",
    data() {
		return {
			tableData: [],
			dialogFormVisible: false,
			form: forms,	// 表单对象
			preinstall: preinstall,		// 表单数据
			// 户籍
			householdRegister: '1',
			
			// 复选框
			checked: true,
			// 婚姻
			marriage: '1',
			// 既往史
			disease: [],
			operation: [],
			trauma: [],
			infusion: [],
			// 遗传病
			heredopathia: '1',
			// 生活环境
			environment: {
				kitchen: '1',
				fuel: '1',
				water: '1',
				toilet: '1',
				corral: '1'
			}
		};
	},
	created() {
		
	},
	methods: {
		// 监护人信息补充
		handleSupplementGuardianInfo() {
			this.form.hasGuardianInfo = !this.form.hasGuardianInfo
		}
	}
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