export const themeSwitch = () => {
  $('.theme-switch').on('click', function () {
    $('body').toggleClass('bg-dark')
    $('.switch .fa').toggleClass('fa-moon-o fa-sun-o')
    if ($('body').hasClass('bg-dark')) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.removeItem('theme')
    }
  });
  
  const theme = localStorage.getItem('theme')
  if (theme !== 'dark') {
    $('body').toggleClass('bg-dark');
  }
  
  $('.navbar-toggler').on('click', function () {
    $('.menu-ico').toggleClass('fa-bars fa-close');
  });

  // PREVENTING THE THEME ICON TO RESET AFTER 
  $(window).on('load', function(){
    if (theme !== 'dark') 
    $('.switch .fa').toggleClass('fa-moon-o fa-sun-o')
  })

}

// LAST UPDATE ON 19-10-2023
export const urls = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const page = urlParams.get('page') || 'home'
  if (page) {
    var targetNavLink = $(`.nav-link[href="?page=${page}"]`)
    if (targetNavLink.length === 0) {
      targetNavLink = $('.nav-link[href="/"]')
    }
    targetNavLink.addClass('active')
    
    const filePath = 'pages/' + page + '.html'
    $('title').text('Saikia | ' + page.charAt(0).toUpperCase() + page.slice(1))
    $.ajax({
      url: filePath,
      dataType: 'html',
      success: function (content) {
        $('main.main').html(content)
      },
      error: function (status, error) {
        console.error('Error loading content:', error, status)
      }
    })
  } else {
    console.error("Missing url in url")
  }
}