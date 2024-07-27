<footer class="content-info">

  @php
      $footer_id = 174;
      $footer_post = get_post($footer_id);
  @endphp

  @if ($footer_post)
      <div class="footer-pattern">
          {!! apply_filters('the_content', $footer_post->post_content) !!}
      </div>
  @endif
</footer>
