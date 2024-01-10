<template>
    <div class="spinner">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'SpinnerComp',
}
    
</script>

<style scoped>
.spinner{
    position: absolute;
    left: 27% ;
    bottom: 40%;
}

</style>