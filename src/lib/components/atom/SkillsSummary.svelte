<script lang="ts">
	import FaIcon from './FaIcon.svelte';
	import type { strMultiLang } from '$lib/types/strMultiLang';
	import { isEnglish } from '$lib/stores/language';

	let { catName, isOpened } = $props<{
		catName: strMultiLang;
		isOpened: boolean;
	}>();
	let isExtended: boolean = $state(isOpened);
</script>

<summary
	class="flex cursor-pointer text-font-light transition-colors select-none hover:text-font"
	onclick={() => (isExtended = !isExtended)}
>
	<FaIcon
		name="caret-right"
		className={'size-5 transition-transform ' + (isExtended ? 'rotate-90' : '')}
	/>
	<h3>{$isEnglish ? catName.en : catName.es}</h3>
</summary>
