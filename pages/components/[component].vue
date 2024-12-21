<script setup lang="ts">
const route = useRoute()
const component = String(route.params.component)
const componentCap = component[0].toUpperCase() + component.slice(1)
const textareaContent = ref('')
const textareaContent2 = ref('')

useHead({
  title: componentCap + ' component',
  meta: [
    { 
      name: 'description',
      content: 'Learn everything about ' + componentCap + ' component.'
    }
  ]
})

definePageMeta({
  layout: 'components'
})

console.log(component)

const accordionData = ref([{
        id: 1,
        title: 'Lorem Ipsum',
        content: 'Accordion is a component that allows you to show and hide content.',
        active: false
    },
    {
        id: 2,
        title: 'Tempora, cupiditate reiciendis voluptatum optio at distinctio in ipsam a quidem adipisci',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate reiciendis voluptatum optio at distinctio in ipsam a quidem adipisci fuga, dolore maiores quisquam accusantium quos quo praesentium aspernatur aliquid!',
        active: false
    },
    {
        id: 3,
        title: 'Quod quaerat',
        content: 'Quod quaerat, aperiam labore voluptatum eos soluta omnis totam doloremque? Ipsam, quasi ipsum. Asperiores cum iure, assumenda sint deleniti vitae magni tempore.',
        active: false
    }
])
</script>

<template>

    <ComponentDetails v-if="component === 'accordion'"
      :title="componentCap"
    >
        <Accordion :data="accordionData" />
    </ComponentDetails>

    <ComponentDetails v-if="component === 'badge'"
      :title="componentCap"
    >
      <Badge
        name="Steve Jobs"
        jobtitle="CEO, Apple"
        imgurl="https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs.jpg"
      />
    </ComponentDetails>

    <ComponentDetails v-if="component === 'button'"
      :title="componentCap"
    >
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

      <ButtonGroup>
        <Button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat, aperiam labore voluptatum eos soluta omnis totam doloremque? Ipsam, quasi ipsum. Asperiores cum iure, assumenda sint deleniti vitae magni tempore.</Button>
      </ButtonGroup>
    </ComponentDetails>

    <ComponentDetails v-if="component === 'collection'"
    
    >
      <Collection>
        <CollectionItems>
          <CollectionRow class="bg-cloud">
            <CollectionCell>All</CollectionCell>
          </CollectionRow>
          <CollectionRow class="bg-cloud is-disabled">
            <CollectionCell>Hybrid</CollectionCell>
            <CollectionCell class="collection__cell--action"><i class="fa-solid fa-magnifying-glass"></i></CollectionCell>
          </CollectionRow>
          <CollectionRow class="bg-cloud">
            <CollectionCell>On-site</CollectionCell>
          </CollectionRow>
          <CollectionRow class="bg-cloud">
            <CollectionCell>Remote</CollectionCell>
          </CollectionRow>
        </CollectionItems>
      </Collection>
      <Collection class="bg-cloud">
        <CollectionItems>
          <CollectionRow>
            <CollectionCell class="collection__cell--action"><i class="fa-solid fa-plus"></i></CollectionCell>
            <CollectionCell>Create Smartlist</CollectionCell>
          </CollectionRow>
          <CollectionRow>
            <CollectionCell class="collection__cell--action"><i class="fa-solid fa-plus"></i></CollectionCell>
            <CollectionCell>Create as Smartlist</CollectionCell>
          </CollectionRow>
        </CollectionItems>
      </Collection>
      <Divider class="is-dotted is-dimmed" />
      <Collection class="bg-cloud">
        <CollectionItems>
          <CollectionRow>
            <CollectionCell class="collection__cell--action"><i class="fa-solid fa-check"></i></CollectionCell>
            <CollectionCell>Save changes</CollectionCell>
          </CollectionRow>
        </CollectionItems>
      </Collection>
      <Divider class="is-dotted is-dimmed" />
      <Collection class="bg-cloud">
        <CollectionItems>
          <CollectionRow>
            <CollectionCell class="collection__cell--action"><i class="fa-solid fa-display"></i></CollectionCell>
            <CollectionCell>Full screen</CollectionCell>
          </CollectionRow>
        </CollectionItems>
      </Collection>
    </ComponentDetails>

    <ComponentDetails v-if="component === 'divider'" class="gap-6">
      <Divider></Divider>
      <Divider class="is-dimmed is-dashed"></Divider>
      <Divider class="divider--center">Label</Divider>
      <Divider></Divider>
    </ComponentDetails>

    <ComponentDetails v-if="component === 'input'">
      <Input />
      <Input label="Enter your name" placeholder="Name" value="Nick" />
      <Input type="email" label="Enter your email" placeholder="Email" />
      <Input type="password" label="Enter your password" placeholder="Password" />
      
      <Textarea
        v-model="textareaContent"
        placeholder="Enter your text here"
        :required="true"

        label="Description"
      />

      <Textarea v-model="textareaContent2" />
    </ComponentDetails>

    <ComponentDetails v-if="component === 'select'">
      <Select></Select>
    </ComponentDetails>  

</template>

<style scoped lang="scss">
</style>