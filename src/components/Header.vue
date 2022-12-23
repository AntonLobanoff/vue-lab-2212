<template>
  <header>
    <div class="header-wrap container">
      <div>
        <router-link to="/" class="logo">
          <span class="first">L</span>
          <span class="last">ogo</span>
        </router-link>
      </div>
      <div class="nav">
        <router-link to="/about">
          <span>about</span>
        </router-link>
        <router-link to="/example">
          <span>example</span>
        </router-link>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
 header {
   border-bottom: 1px solid #545454;
   .header-wrap {
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 15px 0;
   }
   .logo {
     display: flex;
     align-items: center;
     .first {
       font-size: 24px;
       font-weight: 600;
     }
     .last {
       font-size: 20px;
       font-weight: 600;
     }
   }
   .nav {
     display: flex;
     align-items: center;
     a {
       margin-left: 10px;
       &:hover {
         color: #545454;
       }
     }
   }
 }
</style>