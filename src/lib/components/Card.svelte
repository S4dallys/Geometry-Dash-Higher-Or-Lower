<script>
    import DemonName from "./DemonName.svelte";

    export let name
    export let author
</script>

<div class="flex flex-col relative justify-center items-center mt-60">
    <DemonName {name} {author} />
    <slot></slot>
</div>

<style lang="postcss"></style>
