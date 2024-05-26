<script>
    export let name;
    export let author;
    export let position;
</script>

<div class="text-center text-white md:h-80">
    <p class="font-bold text-2xl md:text-5xl mb-2">"{name}"</p>
    <p class="italic text-xl md:text-2xl md:mb-5">{author}</p>
    <p class="text-lg mb-5 md:mb-10">is</p>
    <p class="font-bold text-yellow-200 text-3xl mt-10 md:text-6xl">#{position}</p>
</div>

<style lang="postcss"></style>
