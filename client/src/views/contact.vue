<template>
  <div>
    <v-container>
      <h1 class="mt-5"><span class="blue"></span>Contact Info<span class="blue"></span> </h1>
      <table class="container" >
        <thead>
          <tr>
            <th><h1>Name</h1></th>
            <th><h1>Address</h1></th>
            <th><h1>Phone</h1></th>
            <th><h1>Email</h1></th>
          </tr>
        </thead>
        <tbody v-for="contact in contacts" :key="contact._id">
          <tr :to="{name:'contact',params:{id:contact._id}}">
            <td>{{contact.name}}</td>
            <td>{{contact.address}}</td>
            <td>{{contact.phone}}</td>
            <td>{{contact.email}}</td>
          </tr>
        </tbody>
      </table>
    </v-container>
  </div>
</template>

<script>
  import APC from "../contactView";
  export default {
    name: 'contact',
    data(){
      return {
        contacts: [],

        // user:null,
      };
    },
    async created(){
      this.contacts = await APC.getAllContact();

      // this.user = response.data;
    
    },
  };
</script>


<style>
  /*  
    Table Responsive
    ===================
    Author: https://github.com/pablorgarcia
  */

  @charset "UTF-8";
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1.42em;
    color:#A7A1AE;
    background-color:#1F2739;
  }

  h1 {
    font-size:3em; 
    font-weight: 400;
    line-height:1em;
    text-align: center;
    color: #000000;
  }

  h2 {
    font-size:1em; 
    font-weight: 300;
    text-align: center;
    display: block;
    line-height:1em;
    padding-bottom: 2em;
    color: #FB667A;
  }

  h2 a {
    font-weight: 700;
    text-transform: uppercase;
    color: #FB667A;
    text-decoration: none;
  }

  .blue { color: #185875; }
  .yellow { color: #FFF842; }

  .container th h1 {
      font-weight: bold;
      font-size: 1em;
    text-align: left;
    color: #ffffff;
  }

  .container td {
      font-weight: normal;
      font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
      -moz-box-shadow: 0 2px 2px -2px #0E1119;
            box-shadow: 0 2px 2px -2px #0E1119;
  }

  .container {
      text-align: left;
      overflow: hidden;
      width: 80%;
      margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
  }

  .container td, .container th {
      padding-bottom: 2%;
      padding-top: 2%;
    padding-left:2%;  
  }

  /* Background-color of the odd rows */
  .container tr:nth-child(odd) {
      background-color: #959d01;
  }

  /* Background-color of the even rows */
  .container tr:nth-child(even) {
      background-color: #6a6627;
  }

  .container th {
      background-color: #655303;
  }

  .container td:first-child { color: #f8f8f8; }

  .container tr:hover {
    background-color: #464A52;
  -webkit-box-shadow: 0 6px 6px -6px #0E1119;
      -moz-box-shadow: 0 6px 6px -6px #0E1119;
            box-shadow: 0 6px 6px -6px #0E1119;
  }

  .container td:hover {
    background-color: #FFF842;
    color: #403E10;
    font-weight: bold;
    
    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;
    transform: translate3d(6px, -6px, 0);
    
    transition-delay: 0s;
      transition-duration: 0.4s;
      transition-property: all;
    transition-timing-function: line;
  }

  @media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) { display: none; }
  }
</style>