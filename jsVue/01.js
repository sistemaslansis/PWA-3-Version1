const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola Mundo con Vue",
    clase: "bg-warning",
    myHtmlCode: "",
    total2: 0,
    SegundoDiv: "d-none",
    visible: false,
    frutas: [
      { nombre: "Pera", cantidad: 1 },
      { nombre: "Bananas", cantidad: 0 },
      { nombre: "Durazno", cantidad: 11 },
    ],
    nuevafruta: "",
    total: 0,
  },
  methods: {
    obtenerCookies() {
      var user = {
        id: 1,
        name: "Journal",
        session: "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX",
      };
      this.$cookies.set("user", user);

      console.log(this.$cookies.get("user").id);
      console.log(this.$cookies.get("user").name);
      console.log(this.$cookies.get("user").session);
    },
    agregarFruta() {
      console.log("sdsd");
      this.frutas.push({
        nombre: this.nuevafruta,
        cantidad: 0,
      });
      this.nuevafruta = "";
    },
    cambiarFondo() {
      this.clase = "bg-success my-5 d-none";
      this.SegundoDiv = "d-block";
      console.log(usuario);
    },
  },
  computed: {
    sumarFrutas() {
      console.log("entro");
      this.total = 0;
      for (fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }
      this.total2 = this.total;
      console.log(this.total2);
      this.titulo = "La puta madre";
      return this.total;
    },
  },
});

app.obtenerCookies();
