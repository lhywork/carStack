<template>
    <div class="wrapper">
        <template>
            <vHeader></vHeader>
            <vSidebar :layout="layout" :collapse="collapse"></vSidebar>
        </template>
        <div class="content" :class="layout">
            <vBread></vBread>
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
                console.log(this.$store.state.user.Collapse)
                return this.$store.state.user.Collapse
            }
        },
        components:{
            vHeader, 
            vSidebar,
            vBread,
        }
    }
</script>
