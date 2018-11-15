<template>
    <section>
        <el-select name="province" v-model="selectedProvince" @change="chooseProvince">
            <el-option v-for="item in province" :key="item.code" :value="item.name"></el-option>
        </el-select>
        <el-select name="city" v-model="selectedCity" @change="chooseCity">
            <el-option v-for="item in city" :key="item.code" :value="item.name"></el-option>
        </el-select>
        <el-select name="district" v-model="selectedDistrict" @change="chooseDistrict">
            <el-option v-for="item in district" :key="item.code" :value="item.name"></el-option>
        </el-select>
        <el-select name="street" v-model="selectedStreet" @change="chooseStreet">
            <el-option v-for="item in street" :key="item.code" :value="item.name"></el-option>
        </el-select>
    </section>
</template>
<script>
    import axios from 'axios';
    import { country as preinstall } from '../assets/data/from.preinstall';
    export default {
        name: 'area-linkage',
        // props: {
        //     province: {
        //         type: Array,
        //         default: () => []
        //     },
        //     city: {
        //         type: Array,
        //         default: () => []
        //     },
        //     district: {
        //         type: Array,
        //         default: () => []
        //     },
        //     street: {
        //         type: Array,
        //         default: () => []
        //     }
        // },
        data() {
            return {
                preinstall,
                province: [],
                city: [],
                district: [],
                street: [],
                selectedProvince: '',
                selectedCity: '',
                selectedDistrict: '',
                selectedStreet: ''
            }
        },
        methods: {
            getData() {
                axios.get(this.preinstall).then(res => {
                    if(res.status === 200) {
                        this.cuttingData(res.data);
                    }
                })
            },

            cuttingData(data) {
                this.province = [];
                this.city = [];
                this.district = [];
                this.street = [];
                for(let item in data) {
                    if(item.match(/0000$/)) { 
                        this.province.push({id: item,value: data[item], children: []})
                    } else if(item.match(/00$/)) {
                        this.city.push({id: item, value: data[item], children: []})
                    } else {
                        this.district.push({id: item, value: data[item], children: []})
                    }
                }
            },

            chooseProvince(val) { console.log(val) },
            chooseCity(val) { console.log(val) },
            chooseDistrict(val) { console.log(val) },
            chooseStreet(val) { console.log(val) }
        },
        created() {
            
        }
    }
</script>
<style lang="less">
    
</style>