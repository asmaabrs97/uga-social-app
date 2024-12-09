<template>
  <div class="p-4">
    <div class="max-w-3xl mx-auto">
      <div class="bg-white rounded-lg shadow">
        <!-- En-tête du profil -->
        <div class="p-6">
          <div class="flex items-center">
            <img 
              src="/github-logo.png" 
              class="w-20 h-20 rounded-full"
              alt="Photo de profil"
            />
            <div class="ml-4">
              <h1 class="text-2xl font-bold">Mon Profil</h1>
              <p class="text-gray-600">@username</p>
            </div>
          </div>
        </div>

        <!-- Informations du profil -->
        <div class="border-t border-gray-200 px-6 py-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h2 class="font-semibold">Email</h2>
              <p class="text-gray-600">user@example.com</p>
            </div>
            <div>
              <h2 class="font-semibold">Membre depuis</h2>
              <p class="text-gray-600">{{ new Date().toLocaleDateString() }}</p>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="border-t border-gray-200 px-6 py-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Modifier le profil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vous pouvez ajouter la logique ici plus tard
const user = ref(null)

// Cette fonction sera implémentée plus tard avec Supabase
const getProfile = async () => {
  // Logique pour récupérer le profil
}
</script>