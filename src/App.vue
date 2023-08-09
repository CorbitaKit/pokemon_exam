<template>
  <div id="app">
    <b-nav>
      <b-nav-item active><router-link to="/">Pokédex</router-link></b-nav-item>
      <b-nav-item><router-link to="/favorites/">My Favorite Pokemons</router-link></b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

