<template>
    <div class="mb-8 font-bold sm:flex">
        <div class="grid grid-cols-2 rounded-[10px] bg-light-greenish-blue py-[18px] px-6 text-white sm:gap-x-6">
            <p>Number of tickets:</p>
            <p class="font-extrabold">
                {{ $store.getters.getNumberOfTickets }}
            </p>
            <p>Years spent:</p>
            <p :class="{ 'font-extrabold text-red-500': $store.getters.hasFiveMatches }">
                {{ $store.getters.getNumberOfYears }}
            </p>
            <p>Cost of tickets:</p>
            <p>
                {{ $store.getters.getCostOfTickets }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoContainer'
}
</script>