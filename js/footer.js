$(()=>{
    ajax({
      type:'get',
      url:'footer.html',
      dataType:'html'
    })
    .then(html=>{
        $("#footer").html(html);
    });})