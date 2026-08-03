<template>
  <header
    id="header"
    class="fixed-top d-flex justify-content-center align-items-center header-transparent"
  >
    <nav id="navbar" :class="['navbar', { 'navbar-mobile': mobileOpen }]">
      <a class="mobile-brand scrollto" href="#hero">
        <span>CS</span>
        <strong>Codesyariah</strong>
      </a>

      <ul>
        <li>
          <a class="nav-link scrollto active" href="/#hero" @click="closeMenu"
            >Home</a
          >
        </li>
        <li>
          <a class="nav-link scrollto" href="/#services" @click="closeMenu"
            >Layanan</a
          >
        </li>
        <li>
          <a class="nav-link scrollto" href="/#tools" @click="closeMenu"
            >Tools</a
          >
        </li>
        <li><a class="nav-link" href="/paket" @click="closeMenu">Paket</a></li>
        <li>
          <a class="nav-link scrollto" href="/#gallery" @click="closeMenu"
            >Portfolio</a
          >
        </li>
        <li>
          <a class="nav-link" href="/produk-digital" @click="closeMenu"
            >Produk</a
          >
        </li>
        <li>
          <a class="nav-link" href="/website-builder" @click="closeMenu"
            >Builder</a
          >
        </li>
        <li>
          <a class="nav-link" href="/website-cost-estimator" @click="closeMenu"
            >Estimator</a
          >
        </li>
        <li><a class="nav-link" href="/blog" @click="closeMenu">Insight</a></li>
        <li>
          <a class="nav-link scrollto" href="/#about" @click="closeMenu"
            >Kapabilitas</a
          >
        </li>
        <li>
          <a class="nav-link scrollto" href="/#contact" @click="closeMenu"
            >Konsultasi</a
          >
        </li>
      </ul>

      <i
        class="mobile-nav-toggle"
        :class="mobileOpen ? 'bi bi-x' : 'bi bi-list'"
        @click="toggleMenu"
      ></i>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.mobileOpen = !this.mobileOpen;

      document.body.classList.toggle("mobile-nav-open", this.mobileOpen);
    },

    closeMenu() {
      this.mobileOpen = false;
      document.body.classList.remove("mobile-nav-open");
    },
  },
};
</script>
