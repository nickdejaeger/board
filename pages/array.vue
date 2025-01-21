<script setup lang="ts">
const push = ['😀', '🫡'];
const pushAfter = ['😀', '🫡'];
pushAfter.push('😡');

const pop = ['😀', '🫡', '😡'];
const popAfter = ['😀', '🫡', '😡'];
popAfter.pop('😡');

const shift = ['😀', '🫡', '😡'];
const shiftAfter = ['😀', '🫡', '😡'];
shiftAfter.shift();

const unshift = ['😀', '🫡'];
const unshiftAfter = ['😀', '🫡'];
unshiftAfter.unshift('😡');

const slice = ['😀', '🫡', '🫥', '😡'];
const sliceAfter = slice.slice(1,3);

const splice = ['😀', '🫡', '🫥'];
const spliceAfter = ['😀', '🫡', '🫥'];
spliceAfter.splice(1,1,'😡');

const map = ['😀', '🫡', '😡'];
const mapAfter = map.map(map => map + '🫥');
</script>

<template>
    <Example title="push" label=".push('😡')">
        <p class=" pb-4"><b>Adds</b> elements to the <b>end</b> of an array.</p>
        <div class="flex"><div class="w-32">Original:</div><div>{{ push }}</div></div>
        <div class="flex"><div class="w-32">After:</div><div>{{ pushAfter }}</div></div>
    </Example>

    <Example title="pop" label=".pop('😡')">
        <p class=" pb-4">Removes the <b>last</b> element and returns it.</p>
        <div class="flex"><div class="w-32">Original:</div><div>{{ pop }}</div></div>
        <div class="flex"><div class="w-32">After:</div><div>{{ popAfter }}</div></div>
    </Example>

    <Example title="shift" label=".shift()">
        <p class=" pb-4">Removes the <b>first</b> element and returns it.</p>
        <div class="flex"><div class="w-32">Original:</div><div>{{ shift }}</div></div>
        <div class="flex"><div class="w-32">After:</div><div>{{ shiftAfter }}</div></div>
    </Example>

    <Example title="unshift" label=".unshift('😡')">
        <p class=" pb-4"><b>Adds</b> elements to the <b>beginning</b> of an array.</p>
        <div class="flex"><div class="w-32">Original:</div><div>{{ unshift }}</div></div>
        <div class="flex"><div class="w-32">After:</div><div>{{ unshiftAfter }}</div></div>
    </Example>

    <Example title="slice" label=".slice(1, 3)">
        <p class=" pb-4">Returns a shallow copy of a portion of an array without modifying the original.</p>
        <div class="flex"><div class="w-32">Original:</div><div>{{ slice }}</div></div>
        <div class="flex"><div class="w-32">After:</div><div>{{ sliceAfter }}</div></div>
    </Example>

    <Example title="splice" label=".splice(1, 1, '😡')">
        <p class=" pb-4"><b>Adds</b>, <b>returns</b>, or <b>replaces</b> elements in an array.</p>
        <div class="flex"><div class="w-32">Original:</div><div>{{ splice }}</div></div>
        <div class="flex"><div class="w-32">After:</div><div>{{ spliceAfter }}</div></div>
    </Example>

    <Example title="map" label=".map(map => map + '🫥')">
        <div class="flex"><div class="w-32">Original:</div><div>{{ map }}</div></div>
        <div class="flex"><div class="w-32">After:</div><div>{{ mapAfter }}</div></div>
    </Example>
</template>