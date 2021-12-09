<template>
  <header
    id="masthead"
    class="clearfix"
    itemscope="itemscope"
    itemtype="https://schema.org/WPHeader"
  >
  <i class="fab fa-facebook"></i>
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
            <!-- <ul class="nav-dropdown-inner list-unstyled accnt-list">
              <li><a href="my-account.html">My Account</a></li>
              <li><a href="account-info.html"> Account Information </a></li>
              <li><a href="cng-pw.html">Change Password</a></li>
              <li><a href="address-book.html">Address Books</a></li>
              <li><a href="order-history.html">Order History</a></li>
              <li><a href="review-rating.html">Reviews and Ratings</a></li>
              <li><a href="return.html">Returns Requests</a></li>
              <li><a href="newsletter.html">Newsletter</a></li>
              <li><a href="myaccount-leftsidebar.html">Left Sidebar</a></li>
            </ul> -->
          </li>
          <li id="cartContent" class="cartContent">
            <a id="miniCartDropdown" href="cart.html">
              My Cart
              <span class="cart-item-num">3</span>
            </a>

            <!-- <div id="miniCartView" class="cartView">
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
                        ></span
                      >
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
                        ></span
                      >
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
                        ></span
                      >
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
                  ></span
                >
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
            </div> -->
          </li>
          <li class="menu-item">
            <a href="checkout.html">Checkout</a>
          </li>
          <li class="menu-item">
            <a href="#login-popup" data-toggle="modal">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped src="../../assets/styles/components/common/header.css"></style>