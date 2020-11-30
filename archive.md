---
layout: archive
title: Archive
headerTitle: Browse the archive
---

{% assign categories = site.categories | sort %}

<div class="Container">
  <div class="Page">
    {% for category in categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div class="Archive-section" id="section-{{ category_name | slugify }}">
      <h2 class="Archive-title">
        <a href="#/{{ category_name | slugify }}">
          <div>{{ category_name }}</div>
          <div class="Archive-titleCount">{{ site.categories[category_name] | size }}</div>
        </a>
      </h2>
      <div class="Archive-posts" id="posts-{{ category_name | slugify }}">
        <div class="Archive-postsContent">
          {% for post in site.categories[category_name] %}
          <a href="{{ post.url }}" class="Archive-post">
            <div class="Archive-postDate">
              <!-- <div class="Archive-postDateIcon">
                {% include svg/clock.svg %}
              </div> -->
              {{ post.date | date_to_string }}
            </div>
            <h3 class="Archive-postTitle">{{ post.title | escape }}</h3>
          </a>
          {% endfor %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
