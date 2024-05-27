<script>
    export let isTop150;
</script>

{#if isTop150}
    <button 
        class="bg-black border-4 border-orange-500 rounded-full w-10 aspect-square font-bold 
        text-xs md:text-lg min-[440px]:text-sm min-[440px]:w-12 md:w-16 text-center flex justify-center items-center"
    >
        <p class="text-orange-200">150</p>
    </button>
{:else}
    <button
        class="bg-black border-4 border-green-400 rounded-full w-10 aspect-square font-bold 
        text-xs md:text-lg min-[440px]:text-sm min-[440px]:w-12 md:w-16 text-center flex justify-center items-center"
    >
        <p class="text-green-200">All</p>
    </button>
{/if}
