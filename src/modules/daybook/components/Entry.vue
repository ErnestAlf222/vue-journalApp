<template>
    <div class="entry-container mb-3 pointer p-2"
         @click="$router.push({name:'entry', params:{id:10}})">

        <!-- Título de la entrada -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">28,</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2">2023,viernes</span>
        </div>
    </div>
    <div class="entry-description">
        Ullamco esse eu amet officia fugiat magna aliquip laborum ad. Elit cupidatat aliquip anim dolore eiusmod pariatur est. Eu labore mollit quis irure labore anim proident aliqua velit et ea tempor non. Anim dolor nisi sunt laborum ad cupidatat aute aliqua. Sint occaecat aliquip voluptate qui consequat nisi. Occaecat labore dolor et qui consectetur Lorem amet ipsum. Do aute magna minim aliqua incididunt consequat eiusmod.

    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    
    }
    .entry-description{
        font-size: 12px;
            
    }
}

</style>