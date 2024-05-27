<script>
    import LeftCard from './LeftCard.svelte'

    export let name;
    export let author;
    export let position;
    export let thumbnail;
</script>

<div
    style="background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({thumbnail}) center/cover no-repeat;"
    class="h-[50svh] w-svw relative md:h-svh md:w-[50svw]"
>
    <div
        class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
        <LeftCard {name} {author} {position} />
    </div>
</div>

<!--<div
    style="background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({thumbnail}) center/cover no-repeat;"
    class="h-[50svh] w-svw relative md:h-svh md:w-[50svw]"
>
    <div
        class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
        <LeftCard {name} {author} {position} />
    </div>
</div>-->

