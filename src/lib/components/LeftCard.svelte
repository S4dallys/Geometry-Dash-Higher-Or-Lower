<script>
    export let name;
    export let author;
    export let position;
</script>

<div class="text-center break-words text-white h-36 md:h-80 w-svw md:w-[50svw]">
    <p class="font-bold text-2xl md:text-5xl md:mb-2">"{name}"</p>
    <p class="italic text-xl md:text-2xl md:mb-5">{author}</p>
    <p class="text-lg my-2 md:mb-10">is</p>
    <p class="font-bold text-yellow-200 text-3xl md:mt-5 md:text-6xl">
        #{position}
    </p>
</div>

<style lang="postcss"></style>
