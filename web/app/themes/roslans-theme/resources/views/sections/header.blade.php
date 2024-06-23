<header class="banner">
  <h2>HELLOooo</h2>
  <h2>HELLOooo</h2>
  <h2>HELLOooo</h2>

  @if (has_nav_menu('primary_navigation'))
    <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
      <h2>HELLO THRE!</h2>
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      
    </nav>
  @endif
</header>
