<template>
  <li class="list">
    <span class="icon">
      <slot name="icon"></slot>
    </span>
    <span class="content">
      <h2 class="title"><slot name="title"></slot></h2>
      <p class="text">
        <slot name="desc"></slot>
      </p>
    </span>
  </li>
</template>
