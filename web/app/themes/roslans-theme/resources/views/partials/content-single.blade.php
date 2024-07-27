<article>
  <div class="e-content">
    <div class="wrapper__full news-single__wrapper">
      <div class="wrapper__wide">
      @php 
      echo the_content()
      @endphp
      </div>
    </div>
  </div>
  @php
      $carousel_id = 329;
      $carousel = get_post($carousel_id);
  @endphp
  @if ($carousel)
      <div class="posts-feed">
          {!! apply_filters('the_content', $carousel->post_content) !!}
      </div>
  @endif

</article>
