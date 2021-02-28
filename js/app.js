baguetteBox.run('.gallery');
// Searchfilter
function search_thumbnail() { 
    let input = document.getElementById('search').value;
    input = input.toLowerCase(); 
    let x = document.getElementsByTagName('a'); 
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].getAttribute('data-caption').toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="";				 
            } 
        } 
    } 
