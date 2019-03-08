---
layout: archive
title: Archive
headerTitle: Browse the archive
---

{% assign categories = site.categories | sort %}

<div class="Container">
  <div class="Page">
    {% for category in categories %}
    {% capture categoryName %}{{ category | first }}{% endcapture %}
    <div class="Archive-section" id="section-{{ categoryName | slugify }}">
      <h2 class="Archive-title">
        <a href="#/{{ categoryName | slugify }}">
          <div>{{ categoryName }}</div>
          <div class="Archive-titleCount">{{ site.categories[categoryName] | size }}</div>
        </a>
      </h2>
      <div class="Archive-posts" id="posts-{{ categoryName | slugify }}">
        <div class="Archive-postsContent">
          {% for post in site.categories[categoryName] %}
          <a href="{{ post.url }}" class="Archive-post">
            <div class="Archive-postDate">
              <div class="Archive-postDateIcon">
                {% include svg/clock.svg %}
              </div>
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
