var moment = require('moment');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {  
  global.db.findData((e, docs) => {
      if(e) { 
        return console.log(e); 
      }else{
        
        let json = docs[0].dados;
        let publicacoes = docs[0].publicacoes;
        let totalPosts = docs[0].dados[0].qtdPublicacoes;
        let objetivo20mil = 20000;
        let objetivo50mil = 50000;
        let objetivo100mil = 100000;
        let objetivo1m = 1000000;
        let counter = -1;

        //20.000 SEGUIDORES
        // let segObjetivos = (json.followed_by.count * 100) / objetivo20mil;
        // if(segObjetivos >= 100){
        //   segObjetivos = 100;
        // }else{
        //   segObjetivos = parseFloat(Math.round(json.followed_by.count * 100) / objetivo20mil).toFixed(2);
        // }

        // let seguidoresFaltantesObjetivo = objetivo20mil - json.followed_by.count;
        // if(seguidoresFaltantesObjetivo < 0){
        //   seguidoresFaltantesObjetivo = "Objetivo Concluído";
        // }else{
        //   seguidoresFaltantesObjetivo = objetivo20mil - json.followed_by.count;
        // }

        //50.000 SEGUIDORES
        // let segObjetivos50Mil = (json.followed_by.count * 100) / objetivo50mil;
        // if(segObjetivos50Mil > 100){
        //   segObjetivos50Mil = 100;
        // }else{
        //   segObjetivos50Mil =parseFloat(Math.round(json.followed_by.count * 100) / objetivo50mil).toFixed(2);
        // }

        // let seguidoresFaltantesObjetivo50Mil = objetivo50mil - json.followed_by.count;
        // if(seguidoresFaltantesObjetivo50Mil < 0){
        //   seguidoresFaltantesObjetivo50Mil = "Objetivo Concluído";
        // }else{
        //   seguidoresFaltantesObjetivo50Mil = objetivo50mil - json.followed_by.count;
        // }
        
        //100.000 SEGUIDORES
        // let segObjetivos100Mil = (json.followed_by.count * 100) / objetivo100mil;
        // if(segObjetivos100Mil > 100){
        //   segObjetivos100Mil = 100;
        // }else{
        //   segObjetivos100Mil =parseFloat(Math.round(json.followed_by.count * 100) / objetivo100mil).toFixed(2);
        // }

        // let seguidoresFaltantesObjetivo100Mil = objetivo100mil - json.followed_by.count;
        // if(seguidoresFaltantesObjetivo100Mil < 0){
        //   seguidoresFaltantesObjetivo100Mil = "Objetivo Concluído";
        // }else{
        //   seguidoresFaltantesObjetivo100Mil = objetivo100mil - json.followed_by.count;
        // }
        
        //1 MILHAO DE SEGUIDORES
        // let segObjetivos1m = (json.followed_by.count * 100) / objetivo1m;
        // if(segObjetivos1m > 100){
        //   segObjetivos1m = 100;
        // }else{
        //   segObjetivos1m =parseFloat(Math.round(json.followed_by.count * 100) / objetivo1m).toFixed(2);
        // }

        // let seguidoresFaltantesObjetivo1m = objetivo1m - json.followed_by.count;
        // if(seguidoresFaltantesObjetivo1m < 0){
        //   seguidoresFaltantesObjetivo1m = "Objetivo Concluído";
        // }else{
        //   seguidoresFaltantesObjetivo1m = objetivo1m - json.followed_by.count;
        // }

        //Perfil sem biografia cadastrada.
        // let semBiografia = "";
        // if(json.biography == null){
        //   semBiografia = "Sem biografia cadastrada no perfil";
        // }else{
        //   semBiografia = json.biography;
        // }

        //Pefil sem site cadastrado.
        // let semSite = "";
        // if(json.external_url == null){
        //   semSite = "Sem site cadastrado no perfil";
        // }else{
        //   semSite = json.external_url;
        // }

        //Foto com mais curtidas
        // let postMaisCurtido = null;
        //   for(let i=0; i < publicacoes.length;i++){
        //     if (publicacoes[i].node.edge_media_preview_like.count > counter) {
        //       counter = publicacoes[i].node.edge_media_preview_like.count;
        //       postMaisCurtido = publicacoes[i].node;
        //     }
        // }
        
        //Foto com mais comentários
        // let postMaisComentado = null;
        //   for(let i=0; i < publicacoes.length;i++){
        //     if (publicacoes[i].node.edge_media_to_comment.count > counter) {
        //       counter = publicacoes[i].node.edge_media_to_comment.count;
        //       console.log(publicacoes);
        //       postMaisComentado = publicacoes[i].node;
        //     }
        // }

        //Total de curtidas
        // let totalDeCurtidas = 0;
        // for (let i = 0; i < publicacoes.length; i ++) {
        //   totalDeCurtidas+=publicacoes[i].node.edge_media_preview_like.count;
        // }

        //Total de comentários
        // let totalDeComentarios = 0;
        // for (let i = 0; i < publicacoes.length; i ++) {
        //   totalDeComentarios+=publicacoes[i].node.edge_media_to_comment.count;
        // }

        //Média de curtidas por foto
        // let mediaCurtidasPorFoto =  Number(totalDeCurtidas / totalPosts).toFixed(2);
       
        //Média de comentários por foto
        // let mediaComentarioPorFoto = Number(totalDeComentarios / totalPosts).toFixed(2);

        //Data publicacao
        // let dataComentarios= null;
        // for (let i = 0; i < publicacoes.length; i ++) {
        //   dataComentarios = moment(new Date(docs[0].publicacoes[i].node.date * 1000)).format('DD/MM/YYYY HH:mm:ss');
        // };

        // console.log("postMaisComentado: ",postMaisComentado);
        // console.log(postMaisComentado);

        res.render('profile', 
        { 
          docs: docs
          // semBiografia,semSite, 
          // segObjetivos, objetivo20mil, seguidoresFaltantesObjetivo, 
          // segObjetivos50Mil, objetivo50mil, seguidoresFaltantesObjetivo50Mil,
          // segObjetivos100Mil, objetivo100mil, seguidoresFaltantesObjetivo100Mil,
          // segObjetivos1m, objetivo1m, seguidoresFaltantesObjetivo1m,
          // postMaisComentado, postMaisCurtido, totalDeCurtidas, totalDeComentarios,
          // mediaCurtidasPorFoto, mediaComentarioPorFoto
        });      
      }

  })
})

router.get('/ola', function(req, res) {  
  global.db.findData((e, docs) => {
      if(e) { 
        return console.log(e); 
      }else{
        
        let json = docs[0].dados;
        let publicacoes = docs[0].publicacoes;
        let totalPosts = docs[0].dados.media.count;
        let objetivo20mil = 20000;
        let objetivo50mil = 50000;
        let objetivo100mil = 100000;
        let objetivo1m = 1000000;
        let counter = -1;

        //20.000 SEGUIDORES
        let segObjetivos = (json.followed_by.count * 100) / objetivo20mil;
        if(segObjetivos >= 100){
          segObjetivos = 100;
        }else{
          segObjetivos = parseFloat(Math.round(json.followed_by.count * 100) / objetivo20mil).toFixed(2);
        }

        let seguidoresFaltantesObjetivo = objetivo20mil - json.followed_by.count;
        if(seguidoresFaltantesObjetivo < 0){
          seguidoresFaltantesObjetivo = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo = objetivo20mil - json.followed_by.count;
        }

        //50.000 SEGUIDORES
        let segObjetivos50Mil = (json.followed_by.count * 100) / objetivo50mil;
        if(segObjetivos50Mil > 100){
          segObjetivos50Mil = 100;
        }else{
          segObjetivos50Mil =parseFloat(Math.round(json.followed_by.count * 100) / objetivo50mil).toFixed(2);
        }

        let seguidoresFaltantesObjetivo50Mil = objetivo50mil - json.followed_by.count;
        if(seguidoresFaltantesObjetivo50Mil < 0){
          seguidoresFaltantesObjetivo50Mil = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo50Mil = objetivo50mil - json.followed_by.count;
        }
        
        //100.000 SEGUIDORES
        let segObjetivos100Mil = (json.followed_by.count * 100) / objetivo100mil;
        if(segObjetivos100Mil > 100){
          segObjetivos100Mil = 100;
        }else{
          segObjetivos100Mil =parseFloat(Math.round(json.followed_by.count * 100) / objetivo100mil).toFixed(2);
        }

        let seguidoresFaltantesObjetivo100Mil = objetivo100mil - json.followed_by.count;
        if(seguidoresFaltantesObjetivo100Mil < 0){
          seguidoresFaltantesObjetivo100Mil = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo100Mil = objetivo100mil - json.followed_by.count;
        }
        
        //1 MILHAO DE SEGUIDORES
        let segObjetivos1m = (json.followed_by.count * 100) / objetivo1m;
        if(segObjetivos1m > 100){
          segObjetivos1m = 100;
        }else{
          segObjetivos1m =parseFloat(Math.round(json.followed_by.count * 100) / objetivo1m).toFixed(2);
        }

        let seguidoresFaltantesObjetivo1m = objetivo1m - json.followed_by.count;
        if(seguidoresFaltantesObjetivo1m < 0){
          seguidoresFaltantesObjetivo1m = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo1m = objetivo1m - json.followed_by.count;
        }

        //Perfil sem biografia cadastrada.
        let semBiografia = "";
        if(json.biography == null){
          semBiografia = "Sem biografia cadastrada no perfil";
        }else{
          semBiografia = json.biography;
        }

        //Pefil sem site cadastrado.
        let semSite = "";
        if(json.external_url == null){
          semSite = "Sem site cadastrado no perfil";
        }else{
          semSite = json.external_url;
        }

        //Foto com mais curtidas
        let postMaisCurtido = null;
          for(let i=0; i < publicacoes.length;i++){
            if (publicacoes[i].node.edge_media_preview_like.count > counter) {
              counter = publicacoes[i].node.edge_media_preview_like.count;
              postMaisCurtido = publicacoes[i].node;
            }
        }
        
        //Foto com mais comentários
        let postMaisComentado = null;
          for(let i=0; i < publicacoes.length;i++){
            if (publicacoes[i].node.edge_media_to_comment.count > counter) {
              counter = publicacoes[i].node.edge_media_to_comment.count;
              console.log("######################################################################");
              postMaisComentado = publicacoes[i].node;
              console.log(publicacoes[i]);
              console.log("######################################################################");
            }
        }

        //Total de curtidas
        let totalDeCurtidas = 0;
        for (let i = 0; i < publicacoes.length; i ++) {
          totalDeCurtidas+=publicacoes[i].node.edge_media_preview_like.count;
        }

        //Total de comentários
        let totalDeComentarios = 0;
        for (let i = 0; i < publicacoes.length; i ++) {
          totalDeComentarios+=publicacoes[i].node.edge_media_to_comment.count;
        }

        //Média de curtidas por foto
        let mediaCurtidasPorFoto =  Number(totalDeCurtidas / totalPosts).toFixed(2);
       
        //Média de comentários por foto
        let mediaComentarioPorFoto = Number(totalDeComentarios / totalPosts).toFixed(2);

        //Data publicacao
        let dataComentarios= null;
        for (let i = 0; i < publicacoes.length; i ++) {
          dataComentarios = moment(new Date(docs[0].publicacoes[i].node.date * 1000)).format('DD/MM/YYYY HH:mm:ss');
        };

        res.render('index2', 
        { 
          docs: docs,
          semBiografia,semSite, 
          segObjetivos, objetivo20mil, seguidoresFaltantesObjetivo, 
          segObjetivos50Mil, objetivo50mil, seguidoresFaltantesObjetivo50Mil,
          segObjetivos100Mil, objetivo100mil, seguidoresFaltantesObjetivo100Mil,
          segObjetivos1m, objetivo1m, seguidoresFaltantesObjetivo1m,
          postMaisComentado, postMaisCurtido, totalDeCurtidas, totalDeComentarios,
          mediaCurtidasPorFoto, mediaComentarioPorFoto
        });      
      }

  })
})

router.get('/teste', function(req, res) {  
  global.db.findData((e, docs) => {
    console.log(docs);
      if(e) { 
        return console.log(e); 
      }else{

        

        
        
        res.render('index', { title: 'Lista de Clientes', docs: docs});      
      }

  })
})

router.get('/ultimo', function(req, res) {
  global.db.findData((e, docs) => {
      if(e) { 
        return console.log(e); 
      }else{

        let json = JSON.parse(docs[0].dados);
        let posts = json.media.nodes;

       // console.log(JSON.stringify(qtd));
        let lastFivePosts = [];
        let comentarios = [];
        let dataComentarios = [];
        let imagem150x150 = [];
        let imagem240x240 = [];
        let imagem320x320 = [];
        let imagem480x480 = [];
        let imagem640x640=[];
        let qtdComentarios = [];
        let qtdCurtidas = [];
        let qtdCurtidasMenos = [];
        let codePublicacao = [];
        let qtdComentarioUltimas5Fotos = 0;
        let qtdCurtidasUltimas5Fotos = 0;
        let objetivo20mil = 20000;
        let objetivo50mil = 50000;
        let objetivo100mil = 100000;
        let objetivo1m = 1000000;

        for (let i = 0; i <= 4; i ++) {
          lastFivePosts.push(posts[i].thumbnail_src);
          comentarios.push(posts[i].caption);
          dataComentarios.push(moment(new Date(posts[i].date * 1000)).format('DD/MM/YYYY HH:mm:ss'));
          imagem150x150.push(posts[i].thumbnail_resources[0].src);
          imagem240x240.push(posts[i].thumbnail_resources[1].src);
          imagem320x320.push(posts[i].thumbnail_resources[2].src);
          imagem480x480.push(posts[i].thumbnail_resources[3].src);
          imagem640x640.push(posts[i].thumbnail_resources[4].src);
          qtdComentarios.push(posts[i].comments.count);
          qtdCurtidas.push(posts[i].likes.count);
          codePublicacao.push(posts[i].code);
          qtdComentarioUltimas5Fotos+=qtdComentarios[i];
          qtdCurtidasUltimas5Fotos+=qtdCurtidas[i];
        }
       
        //DESCOBRIR QUAL A FOTO MAIS CURTIDA.
        let fotoMaisCurtida = 0;
        let firstFoto =0;
        let firstLink = "";
        let linkFotoMaisCurtida = "";
        for(let i=0; i <= 11;i++){
          firstFoto = posts[i].likes.count;
          // console.log("first foto: "+firstFoto);
          linkFotoMaisCurtida = posts[i].code;
          // console.log("linkzao eita:" + linkFotoMaisCurtida);          
          if(firstFoto >= fotoMaisCurtida){
            fotoMaisCurtida = firstFoto;
          }else{
             firstFoto = fotoMaisCurtida;
          }
         };
        
        //DESCOBRIR A FOTO COM MENOS CURTIDAS
        // let primeiraFoto=0;
        // let fotoMenosCurtida =0;
        // let linkFotoMenosCurtida = "";
        // for(let i=0; i <= 4;i++){
        //   primeiraFoto = posts[i].likes.count;
        //   linkFotoMenosCurtida = posts[i].code;
        //   if(qtdCurtidasMenos.push(posts[i].likes.count) <= primeiraFoto){
        //       fotoMenosCurtida = primeiraFoto;
        //       linkFotoMenosCurtida = codePublicacao.push(posts[i].code);
        //     }else{
        //       fotoMenosCurtida = qtdCurtidas.push(posts[i].likes.count);;
        //     }
        //     console.log("foto" + "[" + i + "]" + " = " + fotoMenosCurtida);
        // };

        let fotoMenosCurtida = 0;
        let firstFotoMenosCurtida =0;
        for(let i=0; i <= 11;i++){
          firstFotoMenosCurtida = posts[i].likes.count; 
          console.log("firstFotoMenosCurtida: "+ i + " "+firstFotoMenosCurtida);
          if(firstFotoMenosCurtida >= fotoMenosCurtida){
            fotoMenosCurtida = firstFotoMenosCurtida ;
          }else{
              firstFotoMenosCurtida= fotoMenosCurtida;
          }
         };
        console.log("foto menos curtida " + fotoMenosCurtida);

        //DESCOBRIR A FOTO COM MAIS COMENTÁRIOS
        let fotoMaisComentada = 0;
        let firstComentario = 0;
        let linkFotoMaisComentada = "";
        for(let i=0; i <= 4;i++){
          firstComentario = posts[i].comments.count;
          if(firstComentario > fotoMaisComentada){
            fotoMaisComentada = firstComentario;
          }else{
            firstComentario = fotoMaisComentada;
          }
        }

        var dados = {
          lastFivePosts : lastFivePosts,
          comentarios : comentarios,
          dataComentarios : dataComentarios,
          imagem150x150:imagem150x150,
          imagem240x240:imagem240x240,
          imagem320x320:imagem320x320,
          imagem480x480:imagem480x480,
          imagem640x640:imagem640x640,
          qtdComentarios:qtdComentarios,
          qtdCurtidas:qtdCurtidas,
          codePublicacao:codePublicacao,
          qtdComentarioUltimas5Fotos:qtdComentarioUltimas5Fotos,
          qtdCurtidasUltimas5Fotos:qtdCurtidasUltimas5Fotos
        }
        
        // Objetivos do Intagram.
        // Porcentagem faltante para conseguir o numero de seguidores.
        
        let segObjetivos = (json.followed_by.count * 100) / objetivo20mil;
        if(segObjetivos >= 100){
          segObjetivos = 100;
        }else{
          segObjetivos = parseFloat(Math.round(json.followed_by.count * 100) / objetivo20mil).toFixed(2);
        }

        let segObjetivos50Mil = (json.followed_by.count * 100) / objetivo50mil;
        if(segObjetivos50Mil > 100){
          segObjetivos50Mil = 100;
        }else{
          segObjetivos50Mil =parseFloat(Math.round(json.followed_by.count * 100) / objetivo50mil).toFixed(2);
        }
        
        let segObjetivos100Mil = (json.followed_by.count * 100) / objetivo100mil;
        if(segObjetivos100Mil > 100){
          segObjetivos100Mil = 100;
        }else{
          segObjetivos100Mil =parseFloat(Math.round(json.followed_by.count * 100) / objetivo100mil).toFixed(2);
        }
        
        let segObjetivos1m = (json.followed_by.count * 100) / objetivo1m;
        if(segObjetivos1m > 100){
          segObjetivos1m = 100;
        }else{
          segObjetivos1m =parseFloat(Math.round(json.followed_by.count * 100) / objetivo1m).toFixed(2);
        }
        //Quantidade de seguidores que falta para alcançar o objetivo.
        let seguidoresFaltantesObjetivo = objetivo20mil - json.followed_by.count;
        if(seguidoresFaltantesObjetivo < 0){
          seguidoresFaltantesObjetivo = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo = objetivo20mil - json.followed_by.count;
        }

        let seguidoresFaltantesObjetivo50Mil = objetivo50mil - json.followed_by.count;
        if(seguidoresFaltantesObjetivo50Mil < 0){
          seguidoresFaltantesObjetivo50Mil = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo50Mil = objetivo50mil - json.followed_by.count;
        }

        let seguidoresFaltantesObjetivo100Mil = objetivo100mil - json.followed_by.count;
        if(seguidoresFaltantesObjetivo100Mil < 0){
          seguidoresFaltantesObjetivo100Mil = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo100Mil = objetivo100mil - json.followed_by.count;
        }

        let seguidoresFaltantesObjetivo1m = objetivo1m - json.followed_by.count;
        if(seguidoresFaltantesObjetivo1m < 0){
          seguidoresFaltantesObjetivo1m = "Objetivo Concluído";
        }else{
          seguidoresFaltantesObjetivo1m = objetivo1m - json.followed_by.count;
        }

        let semSite = "";
        if(json.external_url == null){
          semSite = "Sem site cadastrado no perfil";
        }else{
          semSite = json.external_url;
        }

        let semBiografia = "";
        if(json.biography == null){
          semBiografia = "Sem biografia cadastrada no perfil";
        }else{
          semBiografia = json.biography;
        }
        
        let info = JSON.parse(docs[0].dados);
        res.render('profile', { docs: info, 
                                dados : dados, 
                                segObjetivos, objetivo20mil, seguidoresFaltantesObjetivo, 
                                segObjetivos50Mil, objetivo50mil, seguidoresFaltantesObjetivo50Mil,
                                segObjetivos100Mil, objetivo100mil, seguidoresFaltantesObjetivo100Mil,
                                segObjetivos1m, objetivo1m, seguidoresFaltantesObjetivo1m,
                                semSite,semBiografia,
                                fotoMaisCurtida, fotoMaisComentada
                                //,linkFotoMaisCurtida,fotoMenosCurtida,linkFotoMenosCurtida,
                                // linkFotoMaisComentada
                              });
      }
  })
})

module.exports = router;

