// Fonctionnalité 1 //
// Counting clicks //

footer_clicks = function(){
    let footer = document.getElementsByTagName('footer')[0]
    let count = 1
    footer.addEventListener("click", function(){
      console.log(`clique ${count}`);
      count += 1
    });
  }
  
  footer_clicks()
  
  // Fonctionnalité 2 //
  // Hamburger Menu //
  
  showing_menu = function(){
    let menu = document.getElementsByClassName('navbar-toggler-icon')[0]
    let navbar = document.getElementById('navbarHeader')
    
    menu.addEventListener("click", function(){
      navbar.classList.toggle('collapse')
    })
  }
  
  showing_menu()
  
  
  // Fonctionnalité 3 //
  // Text Color Card 1 //
  
  changing_text_color_card_1 = function(){
    let card1 = document.getElementsByClassName('card')[0].querySelectorAll('.btn')[1]
    let text1 = document.getElementsByClassName('card')[0].querySelectorAll('.card-text')[0]
    
    card1.addEventListener("click", function(){
      text1.style.color = 'red'
    })
  }
  
  changing_text_color_card_1()
  
  
  // Fonctionnalité 4 //
  // Text Color Card 2 //
  
  changing_text_color_card_2 = function(){
    let card2 = document.getElementsByClassName('card')[1].querySelectorAll('.btn')[1]
    let text2 = document.getElementsByClassName('card')[1].querySelectorAll('.card-text')[0]
    
    function toggle_text_color(el){
      if(el.style.color == 'green'){
        el.style.color = 'black'
      } else if(el.style.color == 'black'){
        el.style.color = 'green'
      } else {
        el.style.color = 'green'
      }
    }
    
    card2.addEventListener("click", function(){
      toggle_text_color(text2)
    })
  }
  
  changing_text_color_card_2()
  
  
  // Fonctionnalité 5 //
  // Nuclear Mode (Double-clic sur JS & Events pour le réactiver) //
  
  disabling_bootstrap = function(){
    let bootstrap_link = document.getElementsByTagName("link")[0]['href']
    let bootstrap_obj = document.getElementsByTagName("link")[0]
    let bootstraped = true
    
    
    navbar = document.getElementsByClassName('navbar')[0]
    navbar.addEventListener("dblclick", function() {
      if(bootstraped == true){
        bootstrap_obj.href = ''
        bootstraped = false
        alert('bootstrap has been disabled')
      } else {
        bootstrap_obj.href = bootstrap_link
        bootstraped = true
        alert('bootstrap has been enabled')
      } 
    })
  }
  
  disabling_bootstrap()
  
  
  // Fonctionnalité 6 //
  // Resizing Cards //
  
  resizing_cards = function(){
    let cards = document.querySelectorAll('.card')
    let image = document.querySelectorAll('img')
    let small_size_arr = []
    
    for(i = 0; i < cards.length; i++){
      small_size_arr.push(false)
    }
    
    for(let i = 0; i < cards.length; i++){
      let edit_btn = cards[i].querySelectorAll('.btn')[0]
      edit_btn.addEventListener('mouseover', function(){
    
        let text = cards[i].querySelectorAll('.card-text')[0]
    
        if(small_size_arr[i] == false){
            text.style.display = 'none'
            image[i].style.width = "20%"
            small_size_arr[i] = true
          } else {
            text.style.display = 'block'
            image[i].style.width = "100%"
            small_size_arr[i] = false
          }
        })
    }
  }
  
  resizing_cards()
  
  
  
  // Fonctionnalité 7 //
  // Moving Cards //
  
  moving_cards_right = function(){
    let arrow_right_btn = document.getElementsByTagName('a')[5]
    let cards = document.querySelectorAll('.card')
    arrow_right_btn.addEventListener("click", function(){
      
      let parent_node = document.getElementsByClassName('row')[1]
      let child_node = parent_node.children
    
      l = cards.length - 1
      parent_node.insertBefore(child_node[l], child_node[0])
    })
  }
  
  moving_cards_right()
  
  
  
  // Fonctionnalité 8 //
  // Moving Cards //
  
  moving_cards_left = function(){
    let arrow_left_btn = document.getElementsByTagName('a')[4]
  
    arrow_left_btn.addEventListener("click", function (e) {
      // Désactiver lien ht
      e.preventDefault()
  
      // Faire bouger les cards
      let parent_node = document.getElementsByClassName('row')[1]
      let new_div = document.createElement('div')
  
      // 1ère card -> dernière card
      current_class = parent_node.children[0].classList.value
      new_div.classList.add(`${current_class}`)
      parent_node.appendChild(new_div)
      let child_node = parent_node.children[0].getElementsByClassName('card')[0]
      new_div.appendChild(child_node)
  
      // Supprimer la 1ère card vide
      parent_node.removeChild(parent_node.children[0])
  
    })
  }
  
  moving_cards_left()
  
  
  
  // Fonctionnalité 9 //
  // Layout in 4 columns //
  
  updating_layout = function(){
    logo_txt = document.querySelector("header").getElementsByTagName("div")[5].getElementsByTagName("a")[0].getElementsByTagName("strong")[0]
    
  
    document.addEventListener("keydown", function(e){
      selection = window.getSelection().toString()
      key = e.key
      main = document.getElementsByClassName('container')[3]
      if(selection == "JS & Events" && e.key){
        if(key == 'a'){
          // 4 colonnes Bootstrap à gauche de l'écran
          main.style.marginLeft = "0"
          column_change(3)
        } else if(key == 'y'){
          // 4 colonnes Bootstrap au milieu de l'écran.
          main.style.marginLeft = "auto"
          main.style.marginRight = "auto"
          column_change(3)
        } else if(key == 'p'){
          // 4 colonnes Bootstrap à droite de l'écran.
          main.style.marginRight = "0"
          main.style.marginLeft = "auto"
          column_change(3)
        } else if (key == 'b'){
        // Tout redevient normal.
          main.style.marginLeft = "auto"
          main.style.marginRight = "auto"
          column_change(4)
        } 
      } else {
        console.log("The text selected is not correct")
      }
    })
  
    column_change = function(new_col){
      let = i
      for(i = 0; i < 6; i++){
        let main = document.getElementsByClassName('row')[1].children[i]
        main.className = `col-md-${new_col}`
      }
    }
  }
  
  
  updating_layout()