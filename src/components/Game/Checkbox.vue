<template>
    <div class="mb-8 flex items-center gap-7 text-xs text-dark-blue sm:text-base">
        <p>Play with random number</p>
        <input id="checkbox" class="peer hidden" type="checkbox" v-model="$store.state.isRandomPlay" />
        <label htmlFor="checkbox"
            class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-light-greenish-blue hover:bg-gray-50 hover:text-gray-600 peer-checked:border-dark-blue peer-checked:stroke-dark-blue">
            <div class="block">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class=" stroke-inherit">
                    <path d="M1 7L6 12L16.5 1.5" strokeWidth="2" />
                </svg>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'Checkbox'
}
</script>