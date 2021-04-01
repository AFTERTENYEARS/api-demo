<template>
  <div class="home-page">
    <h1>首页</h1>
    <br>
    <div class="contact-agile" style="">
      <div style="display: inline;float: left;width: 50%">
      <form action="#" method="post">

        <label>URL:</label>
        <input type="text" name="url" aria-required="true"><br>
        <label>method:</label>
        <input type="text" name="mothed" aria-required="true"><br>
        <label>params:</label>
        <textarea name="params" rows="3" cols="10" style=""></textarea><br>
        <input type="submit" value="提交"><br>
      </form>
      </div>
      <div style="display: block;float: right;width: 50%;padding-left: 50px">
      <label >res:</label>
      <textarea name="resources" cols="50" rows="10" readonly> </textarea><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};

</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  background-color: #f4f4f4;

  .contact-agile {
    text-align: left;
    float: left;
    width: 100%;
    background: #fff;
    padding: 1em 14em 2em 3em;
    position: relative;
    margin-bottom: 2em;
  }
  label {
    cursor: default;
    display:block;
  }
  input[type="text"] {
    width:100%;
    font-size:12px;
    height:40px;
    border-radius:4px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 2px;
    color:#986655;
    display:block;
    outline:0;
    text-align:left;
    padding-left: 10px;

    box-shadow: 2px 2px 5px 1px #ccc;
  }
  input[type="submit"] {
    color: #fff;
    background: #9f5418;
    border: none;
    outline: none;
    padding: 10px 65px;
    font-size: 14px;
    cursor: pointer;
    transition: .5s ease-in;
    -webkit-transition: .5s ease-in;
    -moz-transition: .5s ease-in;
    -o-transition: .5s ease-in;
    -ms-transition: .5s ease-in;
  }
  textarea[name="params"]{
    width: 100%;
    height: 100px;
    display: block;
    outline:none;
    font-size: 14px;
    transition: .5s ease-in;
    border-radius:4px;
    box-shadow: 2px 2px 5px 1px #ccc;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 2px;
  }
  textarea[name="resources"] {
    border:0;
    border-radius:5px;
    background-color:rgba(241,241,241,.98);
    width: 100%;
    height: 400px;
    padding: 10px;
    resize: none;
    outline:none;
    cursor: pointer;
  }


}
</style>