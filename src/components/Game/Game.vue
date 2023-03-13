<template>
    <section
        className="mx-auto mt-6 max-w-3xl rounded-3xl py-4 px-4 shadow-container-shadow sm:mt-12 sm:py-12 sm:px-[78px]">
        <h1 className="mb-8 text-[40px] font-bold leading-[55px] text-dark-blue">
            Result
        </h1>
        <Slider />
        <div className="text-center">
            <button @click="$store.commit('toggleGame')"
                className="rounded-md border bg-gray-50 p-2 text-2xl hover:bg-gray-200 uppercase">
                {{ $store.getters.getStartStopText }}
            </button>
        </div>
    </section>
</template>

<script>
import Slider from './Slider.vue';

export default {
    name: "Game",
    components: { Slider }
}
</script>