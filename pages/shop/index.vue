<template>
  <section>
    <div class="max-w-2xl mx-auto py-8">
      <div
        class="flex flex-col md:flex-row gap-y-4 justify-between items-center mb-8 sticky top-0 bg-white z-50 px-4 py-2"
      >
        <article class="text-center md:text-left">
          <h1 class="text-2xl font-semibold tracking-tight text-neutral-700">
            Catalogue
          </h1>

          <p class="text-neutral-700 text-sm">Our Best Selling Products</p>
        </article>

        <div class="flex gap-2">
          <NuxtLink to="/shop/add">
            <Button label="Add Product" icon="pi pi-plus" size="small" />
          </NuxtLink>

          <NuxtLink to="/shop/cart">
            <Button
              label="Cart"
              icon="pi pi-shopping-cart"
              size="small"
              severity="secondary"
            />
          </NuxtLink>
        </div>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 px-4">
        <li class="overflow-hidden bg-white">
          <img
            src="https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            class="w-full h-44 rounded-tr rounded-tl object-cover transition hover:scale-105"
          />

          <article class="p-4 border rounded-br rounded-bl">
            <p class="font-semibold tracking-tight truncate">
              Lorem ipsum dolor sit amet.
            </p>
            <p class="text-sm font-light truncate mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              culpa?
            </p>
            <p class="text-lg font-semibold tracking-tight mb-2">NGN 1,000</p>

            <Button
              label="Add to cart"
              size="small"
              outlined
              severity="secondary"
              class="w-full"
            />
          </article>
        </li>

        <li class="overflow-hidden bg-white">
          <img
            src="https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            class="w-full h-44 rounded-tr rounded-tl object-cover transition hover:scale-105"
          />

          <article class="p-4 border rounded-br rounded-bl">
            <p class="font-semibold tracking-tight truncate">
              Lorem ipsum dolor sit amet.
            </p>
            <p class="text-sm font-light truncate mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              culpa?
            </p>
            <p class="text-lg font-semibold tracking-tight mb-2">NGN 1,000</p>

            <Button
              label="Add to cart"
              size="small"
              outlined
              severity="secondary"
              class="w-full"
            />
          </article>
        </li>

        <li class="overflow-hidden bg-white">
          <img
            src="https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            class="w-full h-44 rounded-tr rounded-tl object-cover transition hover:scale-105"
          />

          <article class="p-4 border rounded-br rounded-bl">
            <p class="font-semibold tracking-tight truncate">
              Lorem ipsum dolor sit amet.
            </p>
            <p class="text-sm font-light truncate mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              culpa?
            </p>
            <p class="text-lg font-semibold tracking-tight mb-2">NGN 1,000</p>

            <Button
              label="Add to cart"
              size="small"
              outlined
              severity="secondary"
              class="w-full"
            />
          </article>
        </li>

        <li class="overflow-hidden bg-white">
          <img
            src="https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            class="w-full h-44 rounded-tr rounded-tl object-cover transition hover:scale-105"
          />

          <article class="p-4 border rounded-br rounded-bl">
            <p class="font-semibold tracking-tight truncate">
              Lorem ipsum dolor sit amet.
            </p>
            <p class="text-sm font-light truncate mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              culpa?
            </p>
            <p class="text-lg font-semibold tracking-tight mb-2">NGN 1,000</p>

            <Button
              label="Add to cart"
              size="small"
              outlined
              severity="secondary"
              class="w-full"
            />
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
