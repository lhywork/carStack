<template>
    <div class="panel">
        <div class="panel-head">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <h5><span class="el-icon-star-off"></span>新增标的信息（必填)</h5>
                <div class="addo_content">
                    <el-row :gutter="10">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label">选择借款产品:</label>
                            <el-form-item prop="borrow_id" class="el-form-item__content">
                                <el-select v-model="ruleForm.borrow_id" placeholder="请选择">
                                    <el-option
                                        v-for="item in options01"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl42">主品牌:</label>
                            <div class="el-form-item__content">
                            <el-form-item prop="main_brand" class="el-form-item__content">
                                <el-select v-model="ruleForm.main_brand" placeholder="请选择">
                                    <el-option
                                        v-for="item in options02"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl28">车辆名称:</label>
                            <div class="el-form-item__content">
                                <el-form-item prop="car_name" class="el-form-item__content">
                                    <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.car_name"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl27">厂商系列:</label>
                            <el-form-item prop="car_factory" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_factory" placeholder="请选择">
                                    <el-option v-for="item in options03" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl42">零售价:</label>
                            <el-form-item prop="retail_price" class="el-form-item__content">
                                <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.retail_price"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl54">型号:</label>
                            <el-form-item prop="car_model" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_model" placeholder="请选择">
                                    <el-option
                                        v-for="item in options04"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl42">批发价:</label>
                            <el-form-item prop="trade_price" class="el-form-item__content">
                                <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.trade_price"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl13">信息有效期:</label>
                            <el-form-item prop="info_term" class="el-form-item__content">
                                <el-date-picker v-model="ruleForm.info_term" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <h5 class="mart10"><span class="el-icon-star-off"></span>车辆信息（必填）</h5>
                <div class="addo_content">
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label">车辆识别代码:</label>
                            <el-form-item prop="car_vin" class="el-form-item__content">
                                <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.car_vin"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl28">汽车颜色:</label>
                            <el-form-item prop="car_out_colour" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_out_colour" placeholder="请选择">
                                    <el-option v-for="item in options05" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl27">行驶里程:</label>
                            <el-form-item prop="car_mileage" class="el-form-item__content">
                                <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.car_mileage"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl28">内饰颜色:</label>
                            <el-form-item prop="car_in_colour" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_in_colour" placeholder="请选择">
                                    <el-option v-for="item in options06" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl27">车辆性质:</label>
                            <el-form-item prop="car_nature" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_nature" placeholder="请选择">
                                    <el-option v-for="item in options07" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl13">保险有效期:</label>
                            <el-form-item prop="insurance_term" class="el-form-item__content">
                                <el-date-picker v-model="ruleForm.insurance_term" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="14">
                            <label for="payNumber" class="el-form-item__label marl13">车辆所在地:</label>
                            <el-form-item prop="car_province" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_province" @change="choseProvince" placeholder="选择省份">
                                    <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item prop="car_city" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_city" @change="choseCity" placeholder="选择市">
                                    <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl13">年检有效期:</label>
                            <el-form-item prop="inspect_term" class="el-form-item__content">
                                <el-date-picker v-model="ruleForm.inspect_term" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label">车辆出厂年月:</label>
                            <el-form-item prop="car_time" class="el-form-item__content">
                                <el-date-picker v-model="ruleForm.car_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl56">排量:</label>
                            <el-form-item prop="car_displacement" class="el-form-item__content">
                                <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.car_displacement"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl42">变速器:</label>
                            <el-form-item prop="car_transmission" class="el-form-item__content">
                                <el-select v-model="ruleForm.car_transmission" placeholder="请选择">
                                    <el-option v-for="item in options08" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl56">备注:</label>
                            <el-form-item prop="remark" class="el-form-item__content">
                                <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.remark"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <h5 class="mart10">车辆照片:</h5>
                    <el-row :gutter="24">
                        <el-col :span="24" class="marl26">
                            <el-upload  v-bind:action="action" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" name="uploadfile" v-bind:data="data" accept="image/*" v-bind:before-upload ="beforeupload">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <el-form-item prop="car_photo" class="el-form-item__content" >
                                    <img width="100%" :src="ruleForm.car_photo" alt="">
                                </el-form-item>
                            </el-dialog>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl28">是否上牌:</label>
                            <el-form-item prop="if_card" class="el-form-item__content" >
                                <el-radio v-model="ruleForm.if_card" label="1" class="mart13">是</el-radio>
                                <el-radio v-model="ruleForm.if_card" label="0" class="mart13">否</el-radio>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div v-show="ruleForm.if_card == 1">   
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <label for="payNumber" class="el-form-item__label">首次上牌时间:</label>
                                <div class="el-form-item__content">
                                    <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.first_card_time"></el-input>
                                </div>
                            </el-col>
                            <el-col :span="10">
                                <label for="payNumber" class="el-form-item__label marl13">牌照归属地:</label>
                                <div class="el-form-item__content">
                                    <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.card_belong"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <label for="payNumber" class="el-form-item__label marl27">牌照类型:</label>
                                <div class="el-form-item__content">
                                    <el-select v-model="ruleForm.card_type" placeholder="请选择">
                                        <el-option
                                            v-for="item in options15"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="10">
                                <label for="payNumber" class="el-form-item__label marl27">牌照号码:</label>
                                <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.card_no"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="10">
                                <label for="payNumber" class="el-form-item__label">是否含拍照出售:</label>
                                <el-radio v-model="ruleForm.if_card_sell" label="1" class="mart13">是</el-radio>
                                <el-radio v-model="ruleForm.if_card_sell" label="0" class="mart13">否</el-radio>
                            </el-col>
                        </el-row>
                    </div> 
                    <h5 class="mart10"><span class="el-icon-star-off"></span>更多信息（非必填）</h5>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label">是否随带/赠送交强险:</label>
                            <div class="el-form-item__content">
                                <el-select v-model="ruleForm.insurance_give" placeholder="请选择">
                                    <el-option
                                        v-for="item in options09"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="10" class="marl14">
                            <label for="payNumber" class="el-form-item__label ">交强险到期年月:</label>
                            <el-date-picker
                                v-model="ruleForm.insurance_expiration"
                                type="date"
                                placeholder="选择日期" value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label marl17">是否随送商业保险:</label>
                            <div class="el-form-item__content">
                                <el-select v-model="ruleForm.if_send_insurance" placeholder="请选择">
                                    <el-option
                                        v-for="item in options10"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <label for="payNumber" class="el-form-item__label">商业保险到期年月:</label>
                            <el-date-picker
                                v-model="ruleForm.commercial_insurance_expiration"
                                type="date"
                                placeholder="选择日期" value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    <el-row :gutter="12">
                        <el-col :span="12">
                            <label for="payNumber" class="el-form-item__label">车辆使用税截至年月:</label>
                            <el-date-picker
                                v-model="ruleForm.tax_expiration"
                                type="date"
                                placeholder="选择日期" value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="8">
                            <label for="payNumber" class="el-form-item__label marl28">购置税:</label>
                            <div class="el-form-item__content">
                                <el-select v-model="ruleForm.tax_purchase" placeholder="请选择">
                                    <el-option
                                        v-for="item in options12"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <label for="payNumber" class="el-form-item__label marl28">车辆登记证:</label>
                            <div class="el-form-item__content">
                                <el-select v-model="ruleForm.car_registration" placeholder="请选择">
                                    <el-option
                                        v-for="item in options13"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <label for="payNumber" class="el-form-item__label marl28">车辆行驶证:</label>
                            <div class="el-form-item__content">
                                <el-select v-model="ruleForm.driving_license" placeholder="请选择">
                                    <el-option
                                        v-for="item in options14"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="3">
                            <label for="payNumber" class="el-form-item__label marl13">可选配置:</label>
                        </el-col>
                        <el-col :span="3">
                            <label for="payNumber" class="el-form-item__label ">外观:</label>
                        </el-col>
                        <el-col :span="18" class="mart11">
                            <el-checkbox v-model="checked1" true-label="1" false-label="0" label="0">大包围</el-checkbox>
                            <el-checkbox v-model="checked2" true-label="1" false-label="0" label="0">尾翼</el-checkbox>
                            <el-checkbox v-model="checked3" true-label="1" false-label="0" label="0">运动轮廓</el-checkbox>
                            <el-checkbox v-model="checked4" true-label="1" false-label="0" label="0">铝合金</el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="3" class="marl128">
                            <label for="payNumber" class="el-form-item__label ">内饰:</label>
                        </el-col>
                        <el-col :span="18" class="mart11">
                            <el-checkbox v-model="checked5" true-label="1" false-label="0" label="0">真皮座椅</el-checkbox>
                            <el-checkbox v-model="checked6" true-label="1" false-label="0" label="0">中控台液晶屏</el-checkbox>
                            <el-checkbox v-model="checked7" true-label="1" false-label="0" label="0">电动门窗</el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="3" class="marl128">
                            <label for="payNumber" class="el-form-item__label ">内饰:</label>
                        </el-col>
                        <el-col :span="18" class="mart11">
                            <el-checkbox v-model="checked8" true-label="1" false-label="0" label="0">真皮座椅</el-checkbox>
                            <el-checkbox v-model="checked9" true-label="1" false-label="0" label="0">中控台液晶屏</el-checkbox>
                            <el-checkbox v-model="checked10" true-label="1" false-label="0" label="0">电动门窗</el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="3" class="marl128">
                            <label for="payNumber" class="el-form-item__label">舒适:</label>
                        </el-col>
                        <el-col :span="18" class="mart11">
                            <el-checkbox v-model="checked11" true-label="1" false-label="0" label="0">电动车窗</el-checkbox>
                            <el-checkbox v-model="checked12" true-label="1" false-label="0" label="0">GPS导航系统</el-checkbox>
                            <el-checkbox v-model="checked13" true-label="1" false-label="0" label="0">电动加热座椅</el-checkbox>
                            <el-checkbox v-model="checked14" true-label="1" false-label="0" label="0">自动空调</el-checkbox>
                        </el-col>
                     </el-row>
                     <el-row :gutter="24">
                        <el-col :span="18" class="marl256">
                            <el-checkbox v-model="checked15" true-label="1" false-label="0" label="0">自动空调</el-checkbox>
                            <el-checkbox v-model="checked16" true-label="1" false-label="0" label="0">可调节方向盘</el-checkbox>
                            <el-checkbox v-model="checked17" true-label="1" false-label="0" label="0">自动加温反光镜</el-checkbox>
                            <el-checkbox v-model="checked18" true-label="1" false-label="0" label="0">自动巡航系统</el-checkbox>
                        </el-col>
                     </el-row>
                    <el-row :gutter="24">
                        <el-col :span="24">
                            <el-button type="primary" class="chusubmit"  @click="sure('ruleForm')">确认提交</el-button>
                        </el-col>
                    </el-row>        
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
    import { base } from "../../api/index.js"
    export default {
            data() {
                return {
                    mapJson:'../static/json/map.json',
                    province:'',
                    shi1: [],
                    action:base+'/file/uploadPic',
                    data:{
                        tablename:'hrcf_stack_target_info',
                        cloumnname:'target_nid',
                        linkno:'A机构',
                        moreFlag:'true',
                    },
                    ruleForm:{
                        borrow_id:'',
                        main_brand:'',
                        car_name:'',
                        car_factory:'',
                        car_model:'',
                        retail_price:'',
                        trade_price:'',
                        info_term:'',
                        car_vin:'',
                        car_out_colour:'',
                        car_in_colour:'',
                        car_mileage:'',
                        car_nature:'',
                        car_province:'',
                        car_city:'',
                        car_time:'',
                        insurance_term:'',
                        inspect_term:'',
                        car_displacement:'',
                        car_transmission:'',
                        car_photo:'',
                        if_card:'0',
                        first_card_time:'',
                        card_belong:'',
                        card_type:'',
                        card_no:'',
                        if_card_sell:'0',
                        card_type:'',
                        insurance_give:'',
                        insurance_expiration:'',
                        if_send_insurance:'',
                        commercial_insurance_expiration:'',
                        tax_expiration:'',
                        tax_purchase:'',
                        car_registration:'',
                        driving_license:'',
                        exterior:'',
                        interior:'',
                        security:'',
                        comfort:'',
                    },
                    checked1:'0',
                    checked2:'0',
                    checked3:'0',
                    checked4:'0',
                    checked5:'0',
                    checked6:'0',
                    checked7:'0',
                    checked8:'0',
                    checked9:'0',
                    checked10:'0',
                    checked11:'0',
                    checked12:'0',
                    checked13:'0',
                    checked14:'0',
                    checked15:'0',
                    checked16:'0',
                    checked17:'0',
                    checked18:'0',
                    rules:{
                        borrow_id:[
                            { required: true, message: '请选择借款产品', trigger: 'change' },
                        ],
                        main_brand:[
                            { required: true, message: '请选择主品牌', trigger: 'change' },
                        ],
                        car_name:[
                            { required: true, message: '请输入车辆名称', trigger: 'blur' },
                        ],
                        car_factory:[
                            { required: true, message: '请选择厂商系列', trigger: 'change' },
                        ],
                        car_model:[
                            { required: true, message: '请选择型号', trigger: 'change' },
                        ],
                        retail_price:[
                            { required: true, message: '请输入零售价', trigger: 'blur' },
                        ],
                        trade_price:[
                            { required: true, message: '请输入批发价', trigger: 'blur' },
                        ],
                        info_term:[
                            { required: true, message: '请选择信息有效期', trigger: 'blur' },
                        ],
                        car_vin:[
                            { required: true, message: '请选择车辆识别码', trigger: 'blur' },
                        ],
                        car_out_colour:[
                            { required: true, message: '请选择车辆颜色', trigger: 'change' },
                        ],
                        car_mileage:[
                            { required: true, message: '请输入行程里程', trigger: 'blur' },
                        ],
                        car_in_colour:[
                            { required: true, message: '请选择内饰颜色', trigger: 'change' },
                        ],
                        car_nature:[
                            { required: true, message: '请选择车辆性质', trigger: 'change' },
                        ],
                        insurance_term:[
                            { required: true, message: '请选择保险有效期', trigger: 'blur' },
                        ],
                        car_province:[
                            { required: true, message: '请选择车辆所在省份', trigger: 'change' },
                        ],
                        car_city:[
                            { required: true, message: '请选择车辆所在市区', trigger: 'change' },
                        ],
                        inspect_term:[
                            { required: true, message: '请选择年检有效期', trigger: 'blur' },
                        ],
                        car_time:[
                            { required: true, message: '请选择车辆出厂年月', trigger: 'blur' },
                        ],
                        car_displacement:[
                            { required: true, message: '请输入排量', trigger: 'blur' },
                        ],
                        car_transmission:[
                            { required: true, message: '请选择变速器', trigger: 'change' },
                        ],
                        car_photo:[
                            { required: true, message: '请选择上传车辆的照片', trigger: 'change' },
                        ]
                    },
                    options01: [{
                            value: '产品A',
                            label: '产品A'
                        }, {
                            value: '产品B',
                            label: '产品B'
                        }],
                    options02: [{
                            value: 'A品牌',
                            label: 'A品牌'
                        }, {
                            value: 'B品牌',
                            label: 'B品牌'
                        }],
                    options03: [{
                            value: 'A厂商',
                            label: 'A厂商'
                        }, {
                            value: 'B厂商',
                            label: 'B厂商'
                        }],
                    options04: [{
                            value: 'A型号',
                            label: 'A型号'
                        }, {
                            value: 'B型号',
                            label: 'B型号'
                        }],

                    options05: [{
                            value: '汽车红色',
                            label: '汽车红色'
                        }, {
                            value: '汽车黄色',
                            label: '汽车黄色'
                        }],
                    options06: [{
                            value: '内饰红色',
                            label: '内饰红色'
                        }, {
                            value: '内饰黄色',
                            label: '内饰黄色'
                        }],
                    options07: [{
                            value: '事故车',
                            label: '事故车'
                        }, {
                            value: '九成新',
                            label: '九成新'
                        }],
                    options08: [{
                            value: 'A变速器',
                            label: 'A变速器'
                        }, {
                            value: 'B变速器',
                            label: 'B变速器'
                        }],
                    options09: [{
                            value: '交强险A',
                            label: '交强险A'
                        }, {
                            value: '交强险B',
                            label: '交强险B'
                        }],
                    options10: [{
                            value: '商业保险A',
                            label: '商业保险A'
                        }, {
                            value: '商业保险B',
                            label: '商业保险B'
                        }],
                    options12: [{
                            value: '10万',
                            label: '10万'
                        }, {
                            value: '20万',
                            label: '20万'
                        }],
                    options13: [{
                            value: '有',
                            label: '有'
                        }, {
                            value: '无',
                            label: '无'
                        }],
                    options14: [{
                            value: '有',
                            label: '有'
                        }, {
                            value: '无',
                            label: '无'
                        }],
                    options15: [{
                            value: '浙A',
                            label: '浙A'
                        }, {
                            value: '浙B',
                            label: '浙B'
                        }],
                    dialogImageUrl: '',
                    dialogVisible: false,
                }
            },
            created(){
                this.getCityData();
            },
            methods: {
                addALL(){
                    const self = this;
                    const params = self.ruleForm
                    self.ruleForm.exterior = self.checked1 + self.checked2 + self.checked3 + self.checked4;
                    console.log(self.checked1,self.checked2,self.checked3,self.checked4)
                    self.ruleForm.interior = self.checked5 + self.checked6 + self.checked7;
                    self.ruleForm.security = self.checked8 + self.checked9 + self.checked10;
                    self.ruleForm.comfort = self.checked11 + self.checked12 + self.checked13 + self.checked14 +self.checked15 + self.checked16 + self.checked17 + self.checked18;
                    this.$ajax.investmentPro(params).then((res)=> {
                        if(res.returnCode == 1){
                            self.$router.push({ path: '/Allobject' });   
                        }else{
                            self.$alert(res.returnMsg,'系统提示')
                        }
                    });
                },
                handleRemove(file, fileList) {
                    console.log(file, fileList);
                },
                handlePictureCardPreview(file) {
                    this.dialogImageUrl = file.url;
                    this.dialogVisible = true;
                    console.log(file.url)
                },
                getCityData:function(){  
                    var that = this;  
                    this.$axios.get(this.mapJson).then(function(response){  
                        if (response.status==200) {  
                            var data = response.data  
                            that.province = []  
                            that.city = []  
                            that.block = []  
                            // 省市区数据分类  
                            for (var item in data) {  
                                if (item.match(/0000$/)) {//省  
                                    that.province.push({id: item, value: data[item], children: []})  
                                } else if (item.match(/00$/)) {//市  
                                    that.city.push({id: item, value: data[item], children: []})  
                                } else {//区  
                                    that.block.push({id: item, value: data[item]})  
                                }  
                            }  
                            // 分类市级  
                            for (var index in that.province) {  
                                for (var index1 in that.city) {  
                                    if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {  
                                        that.province[index].children.push(that.city[index1])  
                                    }  
                                }  
                            }  
                            // 分类区级  
                            for(var item1 in that.city) {  
                                for(var item2 in that.block) {  
                                    if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {  
                                        that.city[item1].children.push(that.block[item2])  
                                    }  
                                }  
                            }  
                        }  
                        else{  
                            console.log(response.status)  
                        }  
                    }).catch(function(error){console.log(typeof+ error)})  
                }, 
                // 选省  
                choseProvince:function(e) {  
                    for (var index2 in this.province) {  
                        if (e === this.province[index2].id) {  
                            this.shi1 = this.province[index2].children  
                            this.shi = this.province[index2].children[0].value  
                            this.qu1 =this.province[index2].children[0].children  
                            this.qu = this.province[index2].children[0].children[0].value  
                            this.E = this.qu1[0].id  
                        }  
                    }  
                },  
                // 选市  
                choseCity:function(e) {  
                    for (var index3 in this.city) {  
                        if (e === this.city[index3].id) {  
                            this.qu1 = this.city[index3].children  
                            this.qu = this.city[index3].children[0].value  
                            this.E = this.qu1[0].id  
                            // console.log(this.E)  
                        }  
                    }  
                },
                sure(formName) {
                    const self = this;
                    self.$refs[formName].validate((valid) => {
                        console.log(self.$refs[formName])
                        if (valid) {
                            self.addALL()
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                },
                beforeupload(file){
                    const isJPG = file.name;
                    const isLt2M = file.size / 1024  < 2048;
                    if(!/\.(gif|jpg|jpeg|png)$/.test(isJPG)){
                         this.$message.error('上传车辆图片只能是jpg/png/gif格式!');
                         return false;
                     }
                     else if (!isLt2M) {
                        this.$message.error('传车辆图片大小不能超过 2M!');
                         return false;
                     } 
                },
            }
        }
</script>

<style scoped>
    h5{
        font-weight: bold;
    }
    .el-row {
        margin-top: 10px;
        &:last-child {
            margin-bottom: 0;
    }
    }
    .addo_content{
        width: 1000px;
    }
    .el-form-item__content{
        display: inline-block;
        vertical-align: top;
        line-height: 40px;
        position: relative;
        font-size: 14px;
        width: 202px;
    }
    .mart10{
        margin-top: 10px;
    }
    .marl41{
        margin-left: 41px;
    }
    .marl27{
        margin-left: 27px;
    }
    .marl42{
        margin-left: 42px;
    }
    .marl20{
        margin-left: 20px;
    }
    .marl54{
        margin-left: 54px;
    }
    .padl20{
        padding-left: 20px;
    }
    .marl28{
        margin-left: 28px;
    }
    .marl13{
        margin-left: 13px;
    }
    .el-date-editor--date{
        width: 202px;
    }
    .el-form-item{
        margin-bottom: 0!important
    }
    .marl58{
        margin-left: 58px;
    }
    .mart11{
        margin-top: 11px;
    }
    .marl128{
        margin-left: 128px;
    }
    .marl256{
        margin-left: 256px;
    }
    .chusubmit{
        display: block;
        margin: 0 auto;
        margin-top: 10px;
    }
    .mart13{
        margin-top: 13px; 
    }
    .marl56{
        margin-left: 56px;
    }
    .marl17{
        margin-left: 17px;
    }
    .marl14{
        margin-left: 14px;
    }
    .marl26{
        margin-left: 26px;
    }
    .marl35{
        margin-left: 35px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .el-col{
        padding-bottom: 10px;
    }
</style>