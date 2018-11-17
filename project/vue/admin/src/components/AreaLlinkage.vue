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
                mapJson: '/static/json/pcas.json',
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
                axios.get(this.mapJson).then(res => {
                    if(res.status === 200) {
                        this.cuttingData(res.data);
                    }
                })
            },

            cuttingData(data) {
                this.province = data;
                this.city = [];
                this.district = [];
                this.street = [];
                for (let idx_province in this.province) {
                    for(let idx_city in this.city) {
                        let provinceCode = this.province[idx_province].code.slice(0, 2);
                        let cityCode = this.city[idx_city].code.slice(0, 2);
                        if(provinceCode === cityCode) {
                            this.city.push(this.province[idx_province].children)
                        }
                    }
                }
            },

            chooseProvince(val) { console.log(val) },
            chooseCity(val) { console.log(val) },
            chooseDistrict(val) { console.log(val) },
            chooseStreet(val) { console.log(val) }
        },
        created() {
            this.getData();
        }
    }
</script>
<style lang="less">
    
</style>