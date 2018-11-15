<template>
    <section>
        <div class="inline select-sm">
            <div class="inline">
                <select class="form-control w-ss" name="province" v-model="selectedProvince" @change="chooseProvince">
                    <option value="">省</option>
                    <option :value="item.code" :key="item.code" v-for="item in preinstall">{{ item.name }}</option>
                </select>
            </div>
            <div class="inline">
                <select class="form-control w-ss" name="city" v-model="selectedCity" @change="chooseCity">
                    <option value="">市</option>
                    <option :value="item.code" :key="item.code" v-for="item in city">{{ item.name }}</option>
                </select>
            </div>
            <div class="inline">
                <select class="form-control w-ss" name="district" v-model="selectedDistrict" @change="chooseDistrict">
                    <option value="">区/县</option>
                    <option :value="item.code" :key="item.code" v-for="item in district">{{ item.name }}</option>
                </select>
            </div>
            <div class="inline">
                <select class="form-control input-ss w-sm" name="street" v-model="selectedStreet" @change="chooseStreet">
                    <option value="">街道/乡镇</option>
                    <option :value="item.code" :key="item.code" v-for="item in street">{{ item.name }}</option>
                </select>
            </div>
        </div>
    </section>
</template>
<script>
    import {country as preinstall} from '../assets/data/from.preinstall';
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
                province: '',
                city: '',
                district: '',
                street: ''
            }
        },
        methods: {
           
        },
        created() {
            
        }
    }
</script>
<style lang="less">
    
</style>