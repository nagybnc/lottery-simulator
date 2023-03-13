<template>
    <div
        class="mb-8 grid grid-cols-[110px,1fr] items-center gap-2 text-xs text-dark-blue sm:grid-cols-[150px,1fr] sm:gap-7 sm:text-base">
        <p>Winning Numbers:</p>
        <ul class="flex gap-4">
            <li v-for="number in $store.state.winningNumbers"
                class="flex h-[38px] w-[34px] items-center justify-center rounded-[10px] border border-light-greenish-blue">
                {{ number }}
            </li>
        </ul>

        <p>Your Numbers:</p>
        <div class="flex gap-4 text-dark-blue">
            <!-- TODO - Handle input validation -->
            <input type="number" min={1} max={90} v-for="(number, index) in $store.state.yourNumbers"
                class="h-[38px] w-[34px] rounded-[10px] border border-light-greenish-blue text-center" :value="number"
                @input="event => $store.commit('setYourNumbers', { index, number: event?.target?.value })" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'NumbersContainer'
}
</script>