<template>
    <div class="container-fluid bg-black border-5 border-danger">
        <div class="row">
            <p class="mt-3 hea lead text-danger "> Simamkele`s Portfolio &copy;
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