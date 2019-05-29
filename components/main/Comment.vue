<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <small>
        <i class="el-icon-time"></i>
        {{new Date().toLocaleString()}}
      </small>
    </div>
    <div class="comment-text">Lorem ipsum dolor sit amet consectetur.</div>
  </el-card>
</template>
<script>
export default {
    props:['comment']
};
</script>
<style lang='scss' scoped>
.comment {
  margin-bottom: 1rem;
  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    span{
      
    }
    small{
        color: #999999;
    }
  }
  &-text{
      white-space: pre-line
  }
}
</style>