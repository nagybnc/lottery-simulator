<template>
    <ul class="mb-8 grid grid-cols-2 pt-3 text-dark-blue shadow-sm sm:inline-flex" role="group">
        <li v-for="(value, key) in $store.state.matches"
            class="flex flex-col justify-center gap-[9px] rounded-md border border-yellowish-beige px-[34px] py-3 sm:h-[72px] sm:w-36">
            <p class="text-center text-xs">{{ key }} matches</p>
            <p class="text-center font-extrabold">{{ value }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'MatchesContainer'
}
</script>