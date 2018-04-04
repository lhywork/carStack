<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <bread></bread>
            <transition name="fade" mode="out-in">><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import Bread from './bread.vue';
    export default {
        components:{
            vHead, vSidebar,Bread
        }
    }
</script>
