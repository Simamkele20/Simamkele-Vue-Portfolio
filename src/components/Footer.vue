<template>
    <div class="container-fluid bg-transparent border-5 border-danger">
        <div class="row">
            <h2 class="mt-3 hea lead text-white "> Simamkele`s Portfolio &copy;
                <span> {{ currYear }}</span>
            </h2>
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