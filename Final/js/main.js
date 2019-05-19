// src/utils/gmaps.js

// Your personal API key.
// Get it here: https://console.cloud.google.com/google/maps-apis
const API_KEY = 'AIzaSyCjrvI_zqBiCjGOn8M7SFqdVeS9E_iCN8Q';
// const CALLBACK_NAME = 'gmapsCallback';
let urlParams = new URLSearchParams(window.location.search);
let latParam = urlParams.get('lat');
let longParam = urlParams.get('long');

const map = new Vue({
  el: '#map',
  data: {
    appName: 'My Map',
    lat: '',
    long: '',
    fetchingLocation: false,
    mapImg: '',
    prevImg: []
  },

  methods: {
    findLocation: function(){
      
      console.log('worked')

      this.fetchingLocation = true

      this.lat = latParam
      this.long = longParam
      let viewModel = this

      // viewModel.fetchingLocation = false
      // viewModel.mapImg = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=8&size=400x400&markers=color:blue%7Clabel:S%7C${lat},${long}&key=${API_KEY}`

      axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=8&size=400x400&markers=color:blue%7Clabel:S%7C${lat},${long}&key=${API_KEY}`)
      .then(function(response){
        console.log(typeof(reponse))
        viewModel.fetchingLocation = false
        console.log(response)

        if(viewModel.mapImg){
          viewModel.prevImg.push(viewModel.mapImg)
        }
        viewModel.mapImg = response.data.img
      })
      .catch(function(err){
        alert(err)
      })
    }
  }
})