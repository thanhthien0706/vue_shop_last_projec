<template>
  <!-- HEADER -->
  <header
    id="masthead"
    class="clearfix"
    itemscope="itemscope"
    itemtype="https://schema.org/WPHeader"
  >
    <div class="site-subheader site-header">
      <div class="container theme-container">
        <!-- Language & Currency Switcher -->
        <ul class="pull-left list-unstyled list-inline">
          <li class="nav-dropdown language-switcher">
            <div>EN</div>
            <ul class="nav-dropdown-inner list-unstyled list-lang">
              <li><span class="current">EN</span></li>
              <li><a title="Russian" href="#">RU</a></li>
              <li><a title="France" href="#">FR</a></li>
              <li><a title="Brazil" href="#">IT</a></li>
            </ul>
          </li>
          <li class="nav-dropdown language-switcher">
            <div><span class="fa fa-dollar"></span>USD</div>
            <ul class="nav-dropdown-inner list-unstyled list-currency">
              <li>
                <span class="current"
                  ><span class="fa fa-dollar"></span>USD</span
                >
              </li>
              <li>
                <a title="Euro" href="#"><span class="fa fa-eur"></span>Euro</a>
              </li>
              <li>
                <a title="GBP" href="#"><span class="fa fa-gbp"></span>GBP</a>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Mini Cart -->
        <ul class="pull-right list-unstyled list-inline">
          <li class="nav-dropdown">
            <a href="#">My Account</a>
            <ul class="nav-dropdown-inner list-unstyled accnt-list">
              <li><a href="my-account.html">My Account</a></li>
              <li><a href="account-info.html"> Account Information </a></li>
              <li><a href="cng-pw.html">Change Password</a></li>
              <li><a href="address-book.html">Address Books</a></li>
              <li><a href="order-history.html">Order History</a></li>
              <li><a href="review-rating.html">Reviews and Ratings</a></li>
              <li><a href="return.html">Returns Requests</a></li>
              <li><a href="newsletter.html">Newsletter</a></li>
              <li><a href="myaccount-leftsidebar.html">Left Sidebar</a></li>
            </ul>
          </li>
          <li id="cartContent" class="cartContent">
            <a id="miniCartDropdown" href="cart.html">
              My Cart
              <span class="cart-item-num">3</span>
            </a>

            <div id="miniCartView" class="cartView">
              <ul id="minicartHeader" class="product_list_widget list-unstyled">
                <li>
                  <div class="media clearfix">
                    <div class="media-lefta">
                      <a href="single-product.html">
                        <img
                          src="assets/img/products/cart-popup-1.jpg"
                          alt="hoodie_5_front"
                        />
                      </a>
                    </div>
                    <div class="media-body">
                      <a href="single-product.html">Flusas Feminin</a>
                      <span class="price"
                        ><span class="amount"
                          ><span class="fa fa-dollar"></span>20.00</span
                        >
                      </span>
                      <span class="quantity">Qty: 1Pcs</span>
                    </div>
                  </div>

                  <div class="product-remove">
                    <a href="#" class="btn-remove" title="Remove this item"
                      ><i class="fa fa-close"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="media clearfix">
                    <div class="media-lefta">
                      <a href="single-product.html">
                        <img
                          src="assets/img/products/cart-popup-2.jpg"
                          alt="T_2_front"
                        />
                      </a>
                    </div>
                    <div class="media-body">
                      <a href="single-product.html">Autum Winter</a>
                      <span class="price"
                        ><span class="amount"
                          ><span class="fa fa-dollar"></span>20.00</span
                        >
                      </span>
                      <span class="quantity">Qty: 1Pcs</span>
                    </div>
                  </div>

                  <div class="product-remove">
                    <a href="#" class="btn-remove" title="Remove this item"
                      ><i class="fa fa-close"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="media clearfix">
                    <div class="media-lefta">
                      <a href="single-product.html">
                        <img
                          src="assets/img/products/cart-popup-3.jpg"
                          alt="cd_6_angle"
                        />
                      </a>
                    </div>
                    <div class="media-body">
                      <a href="single-product.html">Women's Summer</a>
                      <span class="price"
                        ><span class="amount"
                          ><span class="fa fa-dollar"></span>20.00</span
                        >
                      </span>
                      <span class="quantity">Qty: 1Pcs</span>
                    </div>
                  </div>

                  <div class="product-remove">
                    <a href="#" class="btn-remove" title="Remove this item"
                      ><i class="fa fa-close"></i
                    ></a>
                  </div>
                </li>
              </ul>

              <div class="cartActions">
                <span class="pull-left">Subtotal</span>
                <span class="pull-right"
                  ><span class="amount"
                    ><span class="fa fa-dollar"></span>75.00</span
                  >
                </span>
                <div class="clearfix"></div>

                <div class="minicart-buttons">
                  <div class="col-lg-6">
                    <a href="cart.html">Your Cart</a>
                  </div>
                  <div class="col-lg-6">
                    <a href="checkout.html" class="minicart-checkout"
                      >Checkout</a
                    >
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </li>
          <li class="menu-item">
            <a href="#">Checkout</a>
          </li>
          <li class="menu-item">
            <a href="#" @click.prevent="toggleOpenRegister">Register</a>
          </li>
          <li class="menu-item">
            <a href="#login-popup" data-toggle="modal" @click.prevent="toggleOpenLogin">Login</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="header-wrap" id="typo-sticky-header">
      <div class="container theme-container reltv-div">
        <div class="pull-right header-search visible-xs">
          <a
            id="open-popup-menu"
            class="nav-trigger header-link-search"
            href="javascript:void(0)"
            title="Menu"
          >
            <i class="fa fa-bars"></i>
          </a>
        </div>

        <div class="row">
          <div class="col-md-3 col-sm-3">
            <div class="top-header pull-left">
              <div class="logo-area">
                <a href="index.html" class="thm-logo fsz-35">
                  <!--<img src="files/main-logo.png" alt="Goshop HTML Theme">-->
                  <b class="bold-font-3 wht-clr"> GoShop </b>
                  <span class="thm-clr funky-font"> bikes </span>
                </a>
              </div>
            </div>
          </div>
          <!-- Navigation -->

          <div class="col-md-9 col-sm-9 static-div">
            <div class="navigation pull-left">
              <nav>
                <div class="" id="primary-navigation">
                  <ul class="nav navbar-nav primary-navbar">
                    <li class="dropdown active">
                      <router-link :to="{name:'HomeScreen'}"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        >Home</router-link>
                      <ul class="dropdown-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index-2.html">Home 2</a></li>
                        <li><a href="index-3.html">Home 3</a></li>
                        <li class="dropdown">
                          <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            >Sub Menu</a
                          >
                          <ul class="dropdown-menu">
                            <li><a href="#">Sub Menu 1</a></li>
                            <li><a href="#">Sub Menu 2</a></li>
                            <li class="dropdown">
                              <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                >Sub Menu 3</a
                              >
                              <ul class="dropdown-menu">
                                <li><a href="#">Sub Menu 4</a></li>
                                <li><a href="#">Sub Menu 5</a></li>
                                <li><a href="#">Sub Menu 6</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">Bikes</a></li>
                    <li class="dropdown mega-dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        >Clothing</a
                      >
                      <div
                        class="dropdown-menu mega-dropdown-menu mega-styl2"
                        style="
                          background: white no-repeat
                            url(assets/img/extra/megamenu-2.jpg) right 25px
                            center;
                        "
                      >
                        <div class="col-sm-6 menu-block">
                          <div class="sub-list">
                            <h2 class="blk-clr title">
                              <b class="extbold-font-4 fsz-16"> WOMEN </b>
                              <span class="thm-clr funky-font fsz-25">
                                fashion
                              </span>
                            </h2>
                            <ul>
                              <li><a href="#"> Electronic </a></li>
                              <li><a href="#"> Perfume & Cologne </a></li>
                              <li><a href="#"> Health & Beauty </a></li>
                              <li><a href="#"> Kid’s Fashion </a></li>
                              <li><a href="#"> Trend Watches </a></li>
                              <li><a href="#"> Women’s Apparel </a></li>
                              <li><a href="#"> Men’s Apparel </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="dropdown mega-dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        >Components</a
                      >

                      <div
                        class="dropdown-menu mega-dropdown-menu pr"
                        style="
                          background: white no-repeat
                            url(assets/img/extra/megamenu-1.jpg) right top;
                        "
                      >
                        <div class="col-md-3 col-sm-3 menu-block">
                          <div class="sub-list">
                            <h2 class="blk-clr title">
                              <b class="extbold-font-4 fsz-16"> WOMEN </b>
                              <span class="thm-clr funky-font fsz-25">
                                fashion
                              </span>
                            </h2>
                            <ul>
                              <li><a href="#"> Electronic </a></li>
                              <li><a href="#"> Perfume & Cologne </a></li>
                              <li><a href="#"> Health & Beauty </a></li>
                              <li><a href="#"> Kid’s Fashion </a></li>
                              <li><a href="#"> Trend Watches </a></li>
                              <li><a href="#"> Women’s Apparel </a></li>
                              <li><a href="#"> Men’s Apparel </a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-3 menu-block">
                          <div class="sub-list">
                            <h2 class="blk-clr title">
                              <b class="extbold-font-4 fsz-16"> MEN </b>
                              <span class="thm-clr funky-font fsz-25">
                                fashion
                              </span>
                            </h2>
                            <ul>
                              <li><a href="#"> Electronic </a></li>
                              <li><a href="#"> Perfume & Cologne </a></li>
                              <li><a href="#"> Health & Beauty </a></li>
                              <li><a href="#"> Kid’s Fashion </a></li>
                              <li><a href="#"> Trend Watches </a></li>
                              <li><a href="#"> Women’s Apparel </a></li>
                              <li><a href="#"> Men’s Apparel </a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-3 menu-block">
                          <div class="sub-list">
                            <h2 class="blk-clr title">
                              <b class="extbold-font-4 fsz-16"> KID’S </b>
                              <span class="thm-clr funky-font fsz-25">
                                fashion
                              </span>
                            </h2>
                            <ul>
                              <li><a href="#"> Electronic </a></li>
                              <li><a href="#"> Perfume & Cologne </a></li>
                              <li><a href="#"> Health & Beauty </a></li>
                              <li><a href="#"> Kid’s Fashion </a></li>
                              <li><a href="#"> Trend Watches </a></li>
                              <li><a href="#"> Women’s Apparel </a></li>
                              <li><a href="#"> Men’s Apparel </a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-3 menu-block">
                          <div class="sub-list">
                            <h2 class="blk-clr title">
                              <b class="extbold-font-4 fsz-16"> ELECTRONIC </b>
                              <span class="thm-clr funky-font fsz-25">
                                fashion
                              </span>
                            </h2>
                            <ul>
                              <li><a href="#"> Electronic </a></li>
                              <li><a href="#"> Perfume & Cologne </a></li>
                              <li><a href="#"> Health & Beauty </a></li>
                              <li><a href="#"> Kid’s Fashion </a></li>
                              <li><a href="#"> Trend Watches </a></li>
                              <li><a href="#"> Women’s Apparel </a></li>
                              <li><a href="#"> Men’s Apparel </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        >Blog</a
                      >
                      <ul class="dropdown-menu">
                        <li><a href="blog.html"> Blog </a></li>
                        <li>
                          <a href="blog-leftside.html"> Blog Lef Sidebar</a>
                        </li>
                        <li><a href="blog-single.html"> Blog Single </a></li>
                      </ul>
                    </li>
                    <li><a href="contact-us.html">Contact</a></li>
                    <li class="dropdown mega-dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        >Page</a
                      >
                      <div
                        class="dropdown-menu mega-dropdown-menu mega-styl2"
                        style="
                          background: white no-repeat
                            url(assets/img/extra/megamenu-3.jpg) right top;
                        "
                      >
                        <div class="col-sm-6 menu-block">
                          <div class="sub-list">
                            <h2 class="blk-clr title">
                              <b class="extbold-font-4 fsz-16"> Product </b>
                              <span class="thm-clr funky-font fsz-25">
                                categories
                              </span>
                            </h2>
                            <ul>
                              <li><a href="category.html"> category </a></li>
                              <li>
                                <a href="category-left-sidebar.html">
                                  category left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="category-fullwidth.html">
                                  category fullwidth
                                </a>
                              </li>
                              <li>
                                <a href="category2.html"> category Style 2</a>
                              </li>
                              <li>
                                <a href="category2-left-sidebar.html">
                                  category style 2 left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  single product
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-sm-6 menu-block">
                          <div class="sub-list">
                            <h2 class="blk-clr title">
                              <b class="extbold-font-4 fsz-16"> Theme </b>
                              <span class="thm-clr funky-font fsz-25">
                                pages
                              </span>
                            </h2>
                            <ul>
                              <li><a href="cart.html"> Shopping Cart </a></li>
                              <li><a href="checkout.html"> checkout </a></li>
                              <li><a href="about-us.html"> About Us </a></li>
                              <li><a href="404-error.html"> Error </a></li>
                              <li>
                                <a href="coming-soon.html"> Coming Soon </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="pull-right srch-box">
              <a
                id="open-popup-search"
                class="header-link-search"
                href="javascript:void(0)"
                title="Search"
              >
                <i class="fa fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- / HEADER -->
</template>

<script>
export default {
  name: "TheHeader",
  methods:{
    toggleOpenLogin(event){
      let idFormLogin = event.target.getAttribute('href');
      this.$emit('IdFormLogin', idFormLogin.split('#')[1]);
    },
    toggleOpenRegister(){
      this.$emit('openRegister');
    }
  }
};
</script>
// src="../../assets/styles/components/common/header.css"
<style scoped >
</style>