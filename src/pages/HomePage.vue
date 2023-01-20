<script>
export default {
    name: "HomePage",
}
</script>

<template>
    <main class="container">
        <div class="row justify-content-center">
            <div class="col-6 ">
                <h2 class="text-center border-bottom border-danger py-5">Welcome in Boolfolio!</h2>

                <p class="py-4 fw-light lh-base border-bottom border-danger">
                    Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    <!-- Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? -->
                </p>

                <div class="text-end">
                    <router-link class="btn btn-dark me-2" :to="{ name: 'about' }">
                        about us
                    </router-link>
                    <a class="btn btn-dark" href="">our project</a>
                </div>

            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>