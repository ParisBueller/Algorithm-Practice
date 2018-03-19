//Convert HTML Entities
function convertHTML(str) {
    //Replace the HTML entities with their character reference
    var ampersand = str.replace(/&/g, '&amp;');
    var lt = str.replace(/</g, '&lt;');
    var gt = str.replace(/>/g, '&gt;');
    var quote = str.replace(/"/g, '&quot;');
    var apostrophe = str.replace(/'/g,'&apos;');
    
      for(var i =0; i < str.length; i++) {
        
     
    }
        
      
    
      
    return str;
  }