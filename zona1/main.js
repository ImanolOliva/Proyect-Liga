var categoria = [
    {categoria:'Sampdoria'
    ,J:'0'
    ,G:'0'
    ,E:'0'
    ,P:'0'
    ,GF:'0'
    ,GC:'0'
    ,DF:'0'
    ,PTS:'0'
}
    /*{categoria:'2010', J:'0',G:'0',E:'0',P:'0',GF:'0',GC:'0',DF:'0',PTS:'0'},
    {categoria:'2011', J:'0',G:'0',E:'0',P:'0',GF:'0',GC:'0',DF:'0',PTS:'0'},
    {categoria:'2012', J:'0',G:'0',E:'0',P:'0',GF:'0',GC:'0',DF:'0',PTS:'0'},
    {categoria:'2013', J:'0',G:'0',E:'0',P:'0',GF:'0',GC:'0',DF:'0',PTS:'0'},
    {categoria:'2014', J:'0',G:'0',E:'0',P:'0',GF:'0',GC:'0',DF:'0',PTS:'0'},
    {categoria:'2015', J:'0',G:'0',E:'0',P:'0',GF:'0',GC:'0',DF:'0',PTS:'0'},
    {categoria:'2016', J:'0',G:'0',E:'0',P:'0',GF:'0',GC:'0',DF:'0',PTS:'0'},*/
]

var CrearTabla = function(lista){
    var stringTabla = " <tr><th>CATEGORIA 2009</th><th>J</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DF</th><th>PTS</th></tr>";
    for(let categoria of lista){
        var fila = "<tr>";
     fila += "<td>"
     fila += categoria.categoria;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.J;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.G;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.E;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.P;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.GF;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.GC;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.DF;
     fila += "</td>"

     fila += "<td>"
     fila += categoria.PTS;
     fila += "</td>"

     fila+= "</tr>"


     stringTabla += fila;
    }
    return stringTabla;     
}

document.getElementById('tabla').innerHTML = CrearTabla(categoria)


  

 