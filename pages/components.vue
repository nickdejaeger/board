<template>
  <PageHeader>
    <h1>Components</h1>

    <NuxtLink :to="{ path: '/components/', hash: '#test'}">test</NuxtLink>


  </PageHeader>

  <PageContent>

    <ButtonGroup>
      <Button>Default</Button>
      <Button class="button--primary">
        <template #icon>
          <i class="fa-solid fa-magnifying-glass"></i>
        </template>
        Search
      </Button>
      <Button class="button--secondary">Secondary</Button>
      <Button class="button--transparent">Transparent</Button>
    </ButtonGroup>
    
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum iste quam eligendi cum nulla quibusdam magnam neque fugit saepe ducimus, quis debitis quo. Vero recusandae ducimus exercitationem reiciendis quis.</p>

    <div id="test">test</div>

  </PageContent>
</template>