<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <img src="./img/resume.png">
        <input type="text" v-model="msg">
    </div>
</template>

<script>
import getData from './util';

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js'
        }
    },
    created() {
        this.fetchData();
        console.log('11111');
    },
    methods: {
        async fetchData() {
            const data = await getData();
            this.msg = data;
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: serif;
    h1 {
        color: green;
    }
}
</style>
