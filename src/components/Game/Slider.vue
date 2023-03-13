<template>
    <div className="mb-8 text-xs text-dark-blue sm:text-base">
        <p>Speed</p>
        <input class="w-full cursor-pointer accent-light-greenish-blue" type="range" min="1" max="1000"
            v-model="$store.state.speed" />
        <div className="-mt-2 flex w-full justify-between">
            <span className="text-gray-600">1</span>
            <span className="text-gray-600">1000</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slider'
}
</script>