<template>
  <div class="main-content">
    <!-- <sub-nav mold="quickNav"></sub-nav> -->
    <h2 class="main-title"><i class="fa fa-tags"></i>下拉刷新-模仿豆瓣</h2>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
// import SubNav from '../components/SubNav'
import List from '../common/List'
import Loading from '../common/Loading'
export default {
  name: 'home-view',
  components: { List, InfiniteLoading, Loading },
  data() {
    return {
      
    }
  },
  computed:{
     ...mapState({
      events: state => state.refresh.events
    })
  },
  methods:{
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    // Dispatching Actions
    ...mapActions([
      'loadMore'
    ])
  },
  created: function() {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-form-item {
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
  margin-bottom: 0!important
}
.el-form-item__label {
  display: inline-block;
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  color: #5a5e66;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.el-form-item__content {
  display: inline-block;
  vertical-align: top;
  line-height: 40px;
  position: relative;
  font-size: 14px;
  width: 202px;
}
.el-input__inner {
  width: 202px!important;
}
.beingno{
  font-size: 12px;
}
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
