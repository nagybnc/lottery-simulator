<template>
    <section
        className="mx-auto mt-6 max-w-3xl rounded-3xl py-4 px-4 shadow-container-shadow sm:mt-12 sm:py-12 sm:px-[78px]">
        <h1 className="mb-8 text-[40px] font-bold leading-[55px] text-dark-blue">
            Result
        </h1>
        <InfoContainer />
        <MatchesContainer />
        <Checkbox />
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
import InfoContainer from './Infocontainer.vue'
import MatchesContainer from './MatchesContainer.vue'
import Checkbox from './Checkbox.vue';
import Slider from './Slider.vue';

export default {
    name: "Game",
    components: { InfoContainer, MatchesContainer, Checkbox, Slider }
}
</script>