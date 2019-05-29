<template>
    <div class="error-layout">
        <div class="error-content">
            <h1 class="error-title">Ошибка 404</h1>
            <nuxt-link class="error-link" to="/">Вернуться на главную</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.error-layout{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80vh;
}
.error-title{
    margin-bottom: 1rem;
    color: tomato;
}
.error-link{
    text-decoration: none;
    font-weight: 600;
    color: #999;
}
</style>