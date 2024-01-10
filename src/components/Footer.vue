<template>
    <div class="container-fluid bg-dark ">
        <div class="row">
            <p class="lead text-white "> Simamkele`s Portfolio &copy;
                <span> {{ currYear }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "footerComp",
    data() {
        return {
            currYear: new Date().getFullYear()
        }
    }

}
</script>

<style scoped></style>