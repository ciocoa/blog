<template>
  <Common>
    <template #page>
      <div class="about-profile">
        <div class="about-avatar">
          <img :src="$withBase(pageData.frontmatter.avatar)" />
        </div>
        <div class="about-info">
          <h1 class="name">{{ pageData.frontmatter.name }}</h1>
          <p class="subname">{{ pageData.frontmatter.subname }}</p>
          <div class="sns">
            <div v-for="(link, platform) in LINKS" :key="`sns-${link}`" class="sns-item">
              <a target="_blank" :href="link">
                <v-icon :name="snsIcon(platform)" scale="1.82" />
              </a>
            </div>
            <div v-if="pageData.frontmatter.cv" class="sns-item">
              <a :href="pageData.frontmatter.cv">
                <v-icon name="ai-cv" scale="2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="about-content theme-gungnir-content">
        <Content />
      </div>
    </template>
  </Common>
</template>

<script setup lang="ts">
import { pageData } from '@vuepress/client'
import Common from 'vuepress-theme-gungnir/lib/client/components/Common.vue'

const LINKS = {
  github: 'https://github.com/ciocola',
  bilibili: 'https://www.bilibili.com',
  youtube: '',
  instagram: '',
  twitter: '',
  telegram: ''
}
const ICONS = {
  github: 'ri-github-fill',
  bilibili: 'ri-bilibili-fill',
  youtube: 'ri-youtube-fill',
  instagram: 'ri-instagram-fill',
  twitter: 'ri-twitter-fill',
  telegram: 'ri-telegram-fill'
}
const snsIcon = (platform: string) => ICONS[platform]
</script>

<style lang="scss">
@import 'vuepress-theme-gungnir/lib/client/styles/_variables.scss';
@import 'vuepress-theme-gungnir/lib/client/styles/_wrapper.scss';

$AboutWidth: 900px;

p.desc {
  color: var(--c-text-sub);
  font-size: 14px;
  margin-top: -20px !important;
}

.about-profile,
.about-content.theme-gungnir-content {
  max-width: $AboutWidth;
  font-family: Verdana, 'Open Sans', sans-serif;
}

.about-profile {
  @extend %wrapper;

  border-bottom: 1px solid var(--c-border);
  margin: 7rem auto 0;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  .about-avatar,
  .about-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about-avatar img {
    box-shadow: inset 0 0 10px rgba(179, 179, 179, 0.6);
    width: 150px;
    height: 150px;
    margin: 0 auto;
    padding: 5px;
    border-radius: 100%;
    cursor: auto;
    transition: transform 1s;

    &:hover {
      transform: rotate(360deg);
    }
  }

  .about-info {
    grid-column: span 2 / span 2;

    h1.name {
      font-size: 30px;
      line-height: 36px;
      margin: 0 auto;
    }

    p.subname {
      color: var(--c-text-sub);
      margin: 8px auto 0;
      font-weight: 700;
    }

    .sns {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 8px;
    }

    .sns-item {
      min-width: 45px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: var(--c-text-accent);
      }

      .ov-icon {
        transition: transform 0.1s;

        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }
}

.about-content.theme-gungnir-content {
  margin-bottom: 3rem;

  h2 {
    font-size: 26px;
    text-align: center;
    margin-top: -20px;
  }

  p {
    line-height: 1.6;
    margin: 15px 0;
  }

  .header-anchor {
    display: none;
  }

  ul,
  ol {
    padding-left: 20px;
  }

  li p {
    margin: 1px 0;
  }

  li {
    line-height: 1.9;
  }

  ul + p {
    margin-top: 25px;
  }

  table {
    width: 100%;
    max-width: 100%;

    thead {
      display: none;
    }

    tbody {
      width: 100%;
      display: block;

      tr {
        display: flex;
        flex-direction: row;
        background-color: transparent;

        td {
          border: none;
          padding: 0.6rem;

          p {
            margin: 0;
            line-height: 1.5;
          }
        }

        td:first-child {
          flex: 1;
        }

        td:last-child {
          text-align: right;
          width: 120px;
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .about-profile {
    display: block;

    .about-info {
      margin-top: 20px;

      h1.name {
        font-size: 28px;
      }
    }
  }

  .about-content.theme-gungnir-content h2 {
    font-size: 24px;
  }
}
</style>
