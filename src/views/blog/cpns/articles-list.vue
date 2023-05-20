<template>
  <div class="list">
    <ul class="article-list">
      <li
        class="article-list-item"
        v-for="(item, index) in listData"
        :key="index"
        @click="articleDetails(item)"
      >
        <div class="article-list-item-content">
          <ul class="article-info">
            <li class="article-info-row info-meta">
              <ul class="info-meta-list">
                <li class="item item-type">{{ item.type }}</li>
                <li class="item item-user">{{ item.author }}</li>
                <li class="item item-date">{{ item.time }}</li>
                <li class="item item-tag">{{ item.tag }}</li>
              </ul>
            </li>
            <li class="article-info-row info-title">
              <h4>{{ item.title }}</h4>
            </li>
            <li class="article-info-row info-action">
              <span>{{ item.eye }} </span>
              <span class="action-active" @click.stop="thumbsUp">
                {{ item.love }}
              </span>
              <span class="action-active" @click.stop="starArticle">
                {{ item.collect }}
              </span>
            </li>
          </ul>
          <div class="article-img">
            <img
              src="https://th.bing.com/th/id/R.b41443453899498bb90e7b19699e8594?rik=H6wjAiKWnSJ0Wg&pid=ImgRaw&r=0"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const listData = [
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  },
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  },
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  },
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  },
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  },
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  },
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  },
  {
    title: "知道尤雨溪为什么要放弃 $ 语法糖提案么？",
    author: "Veex",
    type: "类型",
    time: "5.18",
    tag: "标签",
    love: 999,
    collect: 888,
    eye: 777
  }
]
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  background-color: #f8f7f7;
  .article-list {
    width: 50%;
    margin: auto;
    background-color: #fff;
    &-item {
      border-bottom: 1px solid rgba(178, 186, 194, 0.15);
      &:last-child {
        border-bottom: 1px solid transparent;
      }

      &-content {
        display: flex;
        align-items: center;
        padding: 15px 20px;

        .article-info {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;

          .info-meta {
            height: 20px;
            font-size: 13px;
            color: #b2bac2;

            &-list {
              display: flex;
              align-items: baseline;
              white-space: nowrap;

              .item {
                &:after {
                  content: "·";
                  margin: 0 5px;
                  color: #b2bac2;
                  font-weight: 900;
                }

                &:last-child:after {
                  content: "";
                }

                &-type {
                  color: #e7475d;
                  font-weight: 500;
                }

                &-user {
                  text-decoration: none;
                  cursor: pointer;
                  color: #909090;

                  &:hover {
                    color: #e7475d;
                  }
                }

                &-date {
                  color: #909090;
                }

                &-tag {
                  text-decoration: none;
                  cursor: pointer;
                  color: #909090;

                  &:hover {
                    color: #e7475d;
                  }
                }
              }
            }
          }

          .info-title {
            padding: 10px 0;
            cursor: pointer;

            h4 {
              font-size: 18px;
              font-weight: 600;
              line-height: 1.2;
              color: #2e3135;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }

          .info-action {
            display: flex;
            align-items: center;

            span {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              height: 24px;
              border-radius: 1px;
              padding: 0 10px;
              color: #b3bac1;
              font-size: 14px;
              font-weight: 500;
              white-space: nowrap;

              &.action-active {
                color: #e7475d;
              }
            }
          }
        }

        .article-img {
          flex: 0 0 auto;
          width: 100px;
          height: 60px;
          margin-left: 50px;
          background-color: #fff;
          border-radius: 2px;
          background-size: cover;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    .article-list {
      padding-bottom: 100px;
      &-item {
        &-content {
          .article-img {
            display: none;
          }
        }
      }
    }
  }
}
</style>
