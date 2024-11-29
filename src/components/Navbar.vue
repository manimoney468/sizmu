 <template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
    <div class="navbar-nav d-flex justify-content-around ">
      <div>
        <router-link class="nav-link" to="/contact">contact</router-link>
      </div>
      <div>
        <router-link class="nav-link" to="/">Home</router-link>
      </div>
      <div>
        <a class="nav-link" :href="contactLink">Pricing</a>
      </div>
      <!-- <router-view /> -->
    
      
    </div>
  </div>
</nav>
    </div>
</template>

<script>

</script>