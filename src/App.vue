<template>
  <div id="app">
      <!--<router-link to="/">Home</router-link> |-->
    <!--Detail组件 不被 缓存-->
    <keep-alive exclude="Detail">
        <router-view/>
    </keep-alive>
  </div>
</template>
<style lang="stylus">
</style>
