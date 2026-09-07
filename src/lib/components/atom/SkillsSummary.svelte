<script lang="ts">
	import FaIcon from './FaIcon.svelte';
	import type { strMultiLang } from '$lib/types/strMultiLang';
	import { isEnglish } from '$lib/stores/language';

	let { catName, isOpened, onToggle } = $props<{
		catName: strMultiLang;
		isOpened: boolean;
		onToggle: () => void;
	}>();
</script>

<summary
	aria-expanded={isOpened}
	class="flex cursor-pointer text-font-light transition-colors select-none hover:text-font"
	onclick={(e) => {
		e.preventDefault();
		onToggle();
	}}
>
	<FaIcon
		name="caret-right"
		className={'size-5 transition-transform ' + (isOpened ? 'rotate-90' : '')}
	/>
	<h3>{$isEnglish ? catName.en : catName.es}</h3>
</summary>
