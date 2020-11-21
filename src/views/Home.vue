<template>
  <div class="home container">
    <div class="row">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
      <div class="col">4</div>
      <div class="col">5</div>
      <div class="col">6</div>
      <div class="col">7</div>
      <div class="col">8</div>
      <div class="col">9</div>
      <div class="col">10</div>
      <div class="col">11</div>
      <div class="col">12</div>
    </div>
    <div class="row text-justify">
      <div class="col col-md-6 col-lg-8">
        <div class="row">
          <div class="col-6">
            <h4 class="text-center">Felis silvestrus catus</h4>
            <p>
              Considerado una mascota popular y un animal común en el ámbito
              urbano, el gato doméstico entraña un cúmulo de datos sorprendentes
              e interesantes.
            </p>
            <p>
              En el presente casi todas las personas conocen a los gatos y han
              tenido uno en su vida. La larga historia de la presencia gatuna en
              las civilizaciones humanas tiene una antigüedad de al menos 9,500
              años, pudiendo descender de gatos salvajes africanos. Fueron
              animales venerados en la civilización egipcia, pero denostados
              durante la Edad Media. Muchas personas prefieren su compañía pero
              otras todavía mantienen antiguas creencias mitológicas acerca de
              ellos.
            </p>
          </div>
          <div class="col-6">
            <p>
              Todos los gatos domésticos pertenecen a la subespecie Felis
              silvestrus catus, aunque las razas son inmensamente diversas. La
              mayoría de los gatos son mestizos y una pequeña parte es de raza
              pura.
            </p>
            <img
              src="https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_1902800913.jpg"
              class="img-fluid"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
      <div class="col col-md-6 col-lg-4">
        <img
          src="https://holaxd.com/wp-content/uploads/2014/11/gatito-bonito.jpg"
          class="img-fluid"
          alt="Responsive image"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text the
          the 1500s,
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-4">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg"
                    class="card-img"
                    alt="Responsive image"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gatos pequeños</h5>
                    <p class="card-text">
                      miau miua pss pss pss miau miau miau miau miau miua pss
                      miau miua pss pss pss miau miau miau miau
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting typesetting industry.Lorem Ipsum has been the
                  standard dummy text the the 1500s,
                </p>
              </div>
              <div class="col-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting typesetting industry.Lorem Ipsum has been the
                  standard dummy text the the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div class="col-4 align-middle">
            <div
              class="card text-white bg-warning mb-3"
              style="max-width: 18rem;"
            >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Warning card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: "Home",
  components: {
  }
};
</script>
<style lang="scss">
.home {
  .col-1,
  .col {
    background: whitesmoke;
  }
  .col-8 {
    background: green;
  }
}
</style>
