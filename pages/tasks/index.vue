<template>
  <section class="pt-8 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-lg font-semibold mb-4">Tasks</h1>

      <form @submit.prevent="handleSubmit">
        <InputText v-model="body" placeholder="What are you doing today?" />
        <Button type="submit" label="Add task" :loading="pending" />
      </form>

      <ul class="mt-8">
        <li
          class="border p-4 flex justify-between items-start"
          v-for="task in data.tasks"
          :key="task._id"
        >
          <div>
            <p class="mb-1">{{ task.body }}</p>

            <p class="text-xs text-neutral-500">
              Created: {{ Date(task.created_at) }}
            </p>
          </div>

          <Button
            @click="handleDelete(task._id)"
            icon="pi pi-trash"
            size="small"
            severity="danger"
            outlined
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const data = await $fetch("/api/tasks");

const body = ref("");

const handleSubmit = async () => {
  if (!body.value) return alert("Please enter a task.");

  await $fetch("/api/tasks/create", {
    method: "POST",
    body: { body: body.value },
  });
};

const handleDelete = async (task_id) => {
  await $fetch("/api/tasks/" + task_id, { method: "DELETE" });
};
</script>
