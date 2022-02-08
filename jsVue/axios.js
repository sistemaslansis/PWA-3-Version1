const app = new Vue({
  el: "#app",
  data: {
    Usuarios: [],
    posteos: [],
    texto: "d",
  },
  methods: {
    async obtenerCookies() {
      try {
        // // // // Inicio Seteo cookies
        var user = {
          id: 1,
          name: "Gonzalo E Buasso",
          session: "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX",
        };
        this.$cookies.set("user", user);
        // // // Fin Seteo cookies

        // // // Inicio Obtener Cookies
        console.log(this.$cookies.get("user").id);
        console.log(this.$cookies.get("user").name);
        console.log(this.$cookies.get("user").session);
        // Fin Obtener Cookies

        // Inicio Axios
        const idPost = 10;
        const resPost = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              userId: idPost,
              // id: 91
            },
          }
        );
        // console.log(resPost.lenght);
        console.log(resPost.data[0].body);
        // console.log(resPost.data.userId);

        const resUsers = await axios.get(
          "https://jsonplaceholder.typicode.com/users/",
          {
            params: {
              userId: resPost.data[0].userId,
              id: 91,
            },
          }
        );

        // console.log(resUsers);
        // console.log(resUsers.data.name);
        // // // Final Axios

        this.Usuarios = resUsers.data;
        this.posteos = resPost.data;

        // console.log(this.Usuarios);
      } catch (error) {
        console.log(error);
      }
    },
    CambiarDato(id) {
      console.log(id);
      this.posteos.push({
        userId: 12,
        id: 11,
        title: "title",
        body: "body",
      });

      var nuevoId = 6120;
      this.posteos[id].userId = nuevoId;
    },
  },
});

app.obtenerCookies();

// const GetNombreAxios = async (idPost) => {
//   try {
//     const resPost = await axios(
//       `https://jsonplaceholder.typicode.com/posts/${idPost}`
//     );
//     console.log(resPost.data.userId);

//     const resUsers = await axios(
//       `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
//     );
//     console.log(resUsers);
//     console.log(resUsers.data.name);
//   } catch (error) {
//     console.log(error);
//   }
// };

// GetNombreAxios(80);
