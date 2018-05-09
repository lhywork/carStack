<template>
    <div class="wrapper">
        <template v-if="layout =='left'">
            <v-header></v-header>
            <v-sidebar :layout="layout" :collapse="collapse"></v-sidebar>
        </template>
        <template v-if="layout == 'top'">
            <v-header>
                <template slot="topnav">
                    <v-sidebar :layout="layout"></v-sidebar>
                </template>
            </v-header>
        </template>
        <div class="content" :class="[layout,collapse]">
            <v-bread></v-bread>
            <transition name="fade" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHeader from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vBread from './bread.vue';
    export default {
        data(){
            return {
            }
        },
        computed: {
            layout(){
                return this.$store.state.user.navbarPosition
            },
            collapse(){
                // console.log(this.$store.state.user.Collapse)
                return this.$store.state.user.Collapse
            }
        },
        components:{
            vHeader, 
            vSidebar,
            vBread
        }
    }
</script>
