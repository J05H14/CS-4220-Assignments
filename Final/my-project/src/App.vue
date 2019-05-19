<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">
        <h4 class="display-4">
          {{msg}}
        </h4>
        <p class="lead">Enter your latitude and longitude to display your location on a Google Map</p>
        <hr>
        <form @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="col">
              <input type="text" name="lat" id="lat" placeholder="Latitude" class="form-control" v-model="location.lat">
            </div>
            <div class="col">
              <input type="text" name="lon" id="lon" placeholder="Longitude" class="form-control" v-model="location.lon">
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <input type="submit" value="Show My Location" class="btn btn-primary mt-4">
            </div>
            
          </div>
          <div>
            <img class="img-fluid" v-bind:src="img"/>
          </div>
          
        </form>
      </div>

      <!-- <my-map lat="34.066445" lon="-118.166670"></my-map> -->

    </div>
  </div>
</template>

<script>
  const API_KEY = 'AIzaSyCjrvI_zqBiCjGOn8M7SFqdVeS9E_iCN8Q';
  export default {
    name: 'app',
    data() {
      return {
        msg: 'My Location',
        location: {
          lat: '',
          lon: ''
        },
        img:''
        
      }
    },
    methods: {

      handleSubmit(){
        console.log(this.location.lat)
        console.log(this.location.lon)
        this.img = `https://maps.googleapis.com/maps/api/staticmap?center=${this.location.lat},${this.location.lon}&zoom=13&size=400x400&markers=${this.location.lat},${this.location.lon}&key=${API_KEY}`
        console.log(this.img)
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
