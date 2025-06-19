import { _ as __nuxt_component_0 } from './nuxt-link-DWKfNSve.mjs';
import { ref, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const activeImage = ref(null);
    const route = useRoute();
    const id = Number(route.params.id);
    const portfolios = ref([
      {
        id: 0,
        title: "\u0E23\u0E35\u0E42\u0E19\u0E40\u0E27\u0E17\u0E1A\u0E49\u0E32\u0E19\u0E2A\u0E2D\u0E07\u0E0A\u0E31\u0E49\u0E19",
        description: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01",
        cover: "/assets/portfolio/1.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      },
      {
        id: 1,
        title: "\u0E41\u0E15\u0E48\u0E07\u0E04\u0E2D\u0E19\u0E42\u0E14\u0E25\u0E2D\u0E1F\u0E17\u0E4C",
        description: "\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E25\u0E2D\u0E1F\u0E17\u0E4C\u0E1B\u0E39\u0E19\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E22\u0E2A\u0E38\u0E14\u0E40\u0E17\u0E48",
        cover: "/assets/portfolio/2.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      },
      {
        id: 2,
        title: "\u0E23\u0E35\u0E42\u0E19\u0E40\u0E27\u0E17\u0E1A\u0E49\u0E32\u0E19\u0E2A\u0E2D\u0E07\u0E0A\u0E31\u0E49\u0E19",
        description: "\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E25\u0E2D\u0E1F\u0E17\u0E4C\u0E1B\u0E39\u0E19\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E22\u0E2A\u0E38\u0E14\u0E40\u0E17\u0E48",
        cover: "/assets/portfolio/3.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      },
      {
        id: 3,
        title: "\u0E41\u0E15\u0E48\u0E07\u0E04\u0E2D\u0E19\u0E42\u0E14\u0E25\u0E2D\u0E1F\u0E17\u0E4C",
        description: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01",
        cover: "/assets/portfolio/1.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      },
      {
        id: 4,
        title: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E23\u0E49\u0E32\u0E19\u0E01\u0E32\u0E41\u0E1F",
        description: "\u0E15\u0E01\u0E41\u0E15\u0E48\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E43\u0E19\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E42\u0E21\u0E40\u0E14\u0E34\u0E23\u0E4C\u0E19\u0E25\u0E2D\u0E1F\u0E17\u0E4C",
        cover: "/assets/portfolio/2.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      },
      {
        id: 5,
        title: "\u0E15\u0E48\u0E2D\u0E40\u0E15\u0E34\u0E21\u0E1A\u0E49\u0E32\u0E19\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E04\u0E23\u0E31\u0E27\u0E41\u0E25\u0E30\u0E0B\u0E31\u0E01\u0E25\u0E49\u0E32\u0E07",
        cover: "/assets/portfolio/3.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      },
      {
        id: 6,
        title: "\u0E41\u0E15\u0E48\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E07\u0E32\u0E19",
        description: "\u0E1B\u0E23\u0E31\u0E1A\u0E42\u0E17\u0E19\u0E43\u0E2B\u0E49\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19",
        cover: "/assets/portfolio/1.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      },
      {
        id: 7,
        title: "\u0E23\u0E35\u0E42\u0E19\u0E40\u0E27\u0E17\u0E20\u0E32\u0E22\u0E43\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E25\u0E31\u0E07",
        description: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28\u0E1A\u0E49\u0E32\u0E19\u0E40\u0E01\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E2B\u0E21\u0E48",
        cover: "/assets/portfolio/2.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png",
          "/assets/portfolio/1.png",
          "/assets/portfolio/2.png",
          "/assets/portfolio/3.png"
        ]
      }
    ]);
    const randomPortfolios = computed(() => {
      const shuffled = [...portfolios.value].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    });
    const portfolio = computed(
      () => portfolios.value.find((item) => item.id === id)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(portfolio)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-detail" }, _attrs))} data-v-486a9088><div class="container" data-v-486a9088><div class="portfolio-head slide-up-on-scroll" data-v-486a9088><div class="port-head-item" data-v-486a9088><h3 data-v-486a9088>${ssrInterpolate(unref(portfolio).title)}</h3></div><div class="port-head-item" data-v-486a9088><h4 data-v-486a9088>${ssrInterpolate(unref(portfolio).description)}</h4></div></div><div class="portfolio-gallery" data-v-486a9088><div class="image-grid slide-left-on-scroll" data-v-486a9088><!--[-->`);
        ssrRenderList(unref(portfolio).images, (img, index) => {
          _push(`<div class="img-container" data-v-486a9088><img${ssrRenderAttr("src", img)} alt="portfolio image" data-v-486a9088></div>`);
        });
        _push(`<!--]--></div></div><div class="related" data-v-486a9088><div class="related-head slide-up-on-scroll" data-v-486a9088><h3 data-v-486a9088>\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07</h3></div><div class="portfolio-gallery" data-v-486a9088><div class="image-grid" data-v-486a9088><!--[-->`);
        ssrRenderList(unref(randomPortfolios), (portfolio2) => {
          _push(`<div class="related-item slide-right-on-scroll" data-v-486a9088>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/portfolio/${portfolio2.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="img-container" data-v-486a9088${_scopeId}><img${ssrRenderAttr("src", portfolio2.cover)}${ssrRenderAttr("alt", portfolio2.title)} data-v-486a9088${_scopeId}></div><p data-v-486a9088${_scopeId}>${ssrInterpolate(portfolio2.title)}</p>`);
              } else {
                return [
                  createVNode("div", { class: "img-container" }, [
                    createVNode("img", {
                      src: portfolio2.cover,
                      alt: portfolio2.title
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("p", null, toDisplayString(portfolio2.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
        if (unref(activeImage)) {
          _push(`<div class="lightbox" data-v-486a9088><span class="close-btn" data-v-486a9088>\xD7</span><img${ssrRenderAttr("src", unref(activeImage))} alt="full image" data-v-486a9088></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-486a9088"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-H2-lNezk.mjs.map
