var form = $("<form/>", 
                 { action:'/myaction' }
            );
form.append( 
    $("<input>", 
         { type:'text', 
           placeholder:'Keywords', 
           name:'keyword', 
           style:'width:65%' }
     )
);

form.append( 
     $("<input>", 
          { type:'submit', 
            value:'Search', 
            style:'width:30%' }
       )
);

$("#someDivId").append(form);