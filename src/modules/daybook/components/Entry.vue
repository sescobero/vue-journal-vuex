<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: {id: 10 }})"
    >
        <div class = "entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2022, Jueves</span>
        </div>

        <div class="entry-description">
            Tu la has vuelto contra mi, eso es algo que has hecho tu mismo. No vas a arrebatarmela, tu ira y tus ansias de poder ya lo han conseguido. Has permitido que ese lord oscuro corrompa tu mente y ahora
            ahora te has convertido precisamente en lo que juraste destruir. Ahorrate el sermon ObiWan, conozco todas las mentiras de los jedi; no tengo miedo al lado oscuro, como tu. He traido la paz, la libertad
            la justicia, y la seguridad a mi nuevo imperio, tu nuevo imperio? Anakin yo le debo lealtad a la republica, a la democracia... si no estas conmigo, eres mi enemigo. Solo un sith es tan extremista, cumplire
            con mi deber, lo intentaras.
        </div>
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

    
    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }
}
.entry-description{
    font-size: 12px;
}
</style>