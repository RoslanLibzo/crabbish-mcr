<header class="banner">
  @php
      // Retrieve the post with ID 107
      $post_id = 107;
      $post = get_post($post_id);
  @endphp
  
  @if ($post)
      <div class="header-pattern">
          {!! apply_filters('the_content', $post->post_content) !!}
      </div>
  @endif

</header>
