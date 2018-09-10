<template>
    <h1>
        <!-- Container Components -->
       <div>
            <slot name="title"></slot>
            <slot name="sum"></slot>

           </div>
    </h1>
</template>

<script>
export default {
  name: 'Header'
};
</script>

