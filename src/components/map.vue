<div id="container"></div>
<script type="text/javascript">
  window._AMapSecurityConfig = {
    securityJsCode:"「0088897fa2ef2bb005aa5812b39a7766」",
  }
</script>
<script src="https://webapi.amap.com/loader.js"></script>
<script type="text/javascript" >
  AMapLoader.load({
    key: "「93de4fb51f31c32f4bc40db40b480178」",       // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0",                 // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  }).then((AMap)=>{
    const map = new AMap.Map('container');
  }).catch((e)=>{
    console.error(e);  //加载错误提示
  });   
</script>