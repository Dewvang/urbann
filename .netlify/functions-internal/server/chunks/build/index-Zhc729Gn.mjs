import { _ as __nuxt_component_0 } from './nuxt-link-DWKfNSve.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolios = ref([
      {
        id: 0,
        title: "\u0E23\u0E35\u0E42\u0E19\u0E40\u0E27\u0E17\u0E1A\u0E49\u0E32\u0E19\u0E2A\u0E2D\u0E07\u0E0A\u0E31\u0E49\u0E19",
        description: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01",
        cover: "/assets/portfolio/1.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/renovate2.jpg",
          "/assets/portfolio/renovate3.jpg"
        ]
      },
      {
        id: 1,
        title: "\u0E41\u0E15\u0E48\u0E07\u0E04\u0E2D\u0E19\u0E42\u0E14\u0E25\u0E2D\u0E1F\u0E17\u0E4C",
        description: "\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E25\u0E2D\u0E1F\u0E17\u0E4C\u0E1B\u0E39\u0E19\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E22\u0E2A\u0E38\u0E14\u0E40\u0E17\u0E48",
        cover: "/assets/portfolio/2.png",
        images: [
          "/assets/portfolio/2.png",
          "/assets/projects/loft2.jpg"
        ]
      },
      {
        id: 2,
        title: "\u0E23\u0E35\u0E42\u0E19\u0E40\u0E27\u0E17\u0E1A\u0E49\u0E32\u0E19\u0E2A\u0E2D\u0E07\u0E0A\u0E31\u0E49\u0E19",
        description: "\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E25\u0E2D\u0E1F\u0E17\u0E4C\u0E1B\u0E39\u0E19\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E22\u0E2A\u0E38\u0E14\u0E40\u0E17\u0E48",
        cover: "/assets/portfolio/3.png",
        images: [
          "/assets/projects/loft2.jpg",
          "/assets/projects/loft2.jpg"
        ]
      },
      {
        id: 3,
        title: "\u0E41\u0E15\u0E48\u0E07\u0E04\u0E2D\u0E19\u0E42\u0E14\u0E25\u0E2D\u0E1F\u0E17\u0E4C",
        description: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01",
        cover: "/assets/portfolio/1.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/portfolio/renovate2.jpg",
          "/assets/portfolio/renovate3.jpg"
        ]
      },
      {
        id: 4,
        title: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E23\u0E49\u0E32\u0E19\u0E01\u0E32\u0E41\u0E1F",
        description: "\u0E15\u0E01\u0E41\u0E15\u0E48\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E43\u0E19\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E42\u0E21\u0E40\u0E14\u0E34\u0E23\u0E4C\u0E19\u0E25\u0E2D\u0E1F\u0E17\u0E4C",
        cover: "/assets/portfolio/2.png",
        images: [
          "/assets/portfolio/2.png",
          "/assets/projects/loft2.jpg"
        ]
      },
      {
        id: 5,
        title: "\u0E15\u0E48\u0E2D\u0E40\u0E15\u0E34\u0E21\u0E1A\u0E49\u0E32\u0E19\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E04\u0E23\u0E31\u0E27\u0E41\u0E25\u0E30\u0E0B\u0E31\u0E01\u0E25\u0E49\u0E32\u0E07",
        cover: "/assets/portfolio/3.png",
        images: [
          "/assets/portfolio/3.png",
          "/assets/portfolio/renovate2.jpg"
        ]
      },
      {
        id: 6,
        title: "\u0E41\u0E15\u0E48\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E07\u0E32\u0E19",
        description: "\u0E1B\u0E23\u0E31\u0E1A\u0E42\u0E17\u0E19\u0E43\u0E2B\u0E49\u0E14\u0E39\u0E42\u0E1B\u0E23\u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19",
        cover: "/assets/portfolio/1.png",
        images: [
          "/assets/portfolio/1.png",
          "/assets/projects/loft2.jpg"
        ]
      },
      {
        id: 7,
        title: "\u0E23\u0E35\u0E42\u0E19\u0E40\u0E27\u0E17\u0E20\u0E32\u0E22\u0E43\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E25\u0E31\u0E07",
        description: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28\u0E1A\u0E49\u0E32\u0E19\u0E40\u0E01\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E2B\u0E21\u0E48",
        cover: "/assets/portfolio/2.png",
        images: [
          "/assets/portfolio/2.png",
          "/assets/portfolio/renovate3.jpg"
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio" }, _attrs))} data-v-e006be2a><div class="container" data-v-e006be2a><div class="gallery" data-v-e006be2a><!--[-->`);
      ssrRenderList(unref(portfolios), (portfolio) => {
        _push(`<div class="gallery-item slide-right-on-scroll" data-v-e006be2a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/portfolio/${portfolio.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="img-container" data-v-e006be2a${_scopeId}><img${ssrRenderAttr("src", portfolio.cover)} alt="" data-v-e006be2a${_scopeId}></div><p data-v-e006be2a${_scopeId}>${ssrInterpolate(portfolio.title)}</p>`);
            } else {
              return [
                createVNode("div", { class: "img-container" }, [
                  createVNode("img", {
                    src: portfolio.cover,
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                createVNode("p", null, toDisplayString(portfolio.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e006be2a"]]);

export { index as default };
//# sourceMappingURL=index-Zhc729Gn.mjs.map
