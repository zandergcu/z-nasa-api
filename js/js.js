
$( document ).ready(function() {
    console.log("JQuery Working");

    var config ={
      events: "blur"
    }

    Vue.use(VeeValidate, config);

    var app = new Vue({
        el: "#theForm",
        data: {
          isVueWorking: "VueJS is working!",
          submitted: false,
          apodtitle: '',
          apodurl: '',
          apodexplanation: '',
          apoddate: ''
        },
        methods: {
          process: function() {
            this.submitted = true;
          }
        }
    })

    const url = "https://api.nasa.gov/planetary/apod?api_key=btcxP6qUvWv8xRzhAeeIIRJyYNaITnvdTXUwvJcz";

    axios.get(url)
      .then(function (res) {
        console.log(res);
        app.apodtitle = res.data.title;
        app.apodurl = res.data.url;
        app.apodexplanation = res.data.explanation;
        app.apoddate = res.data.date;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {

      });
});
