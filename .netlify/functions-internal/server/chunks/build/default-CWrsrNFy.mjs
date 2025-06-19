import { _ as __nuxt_component_0$1 } from './nuxt-link-DWKfNSve.mjs';
import { watch, nextTick, unref, ref, computed, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_1, u as useRoute$1 } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useRoute } from 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$2 = {
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const isOpen = ref(false);
    const isScrolled = ref(false);
    const showBackToTop = ref(false);
    const routeClass = computed(() => {
      if (route.name === "index") return "index";
      if (route.name === "blog" || route.path.startsWith("/blog")) return "blog";
      if (route.name === "portfolio" || route.path.startsWith("/portfolio")) return "portfolio";
      if (route.name === "contact") return "contact";
      return "";
    });
    const heroText = computed(() => {
      const name = route.name;
      const path = route.path;
      if (path === "/") {
        return {
          title: "Urbann De Concept",
          subtitle: "\u0E40\u0E23\u0E32\u0E04\u0E37\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E21\u0E34\u0E15\u0E23\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E44\u0E27\u0E49\u0E43\u0E08\u0E44\u0E14\u0E49",
          description: "\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E04\u0E38\u0E13 \u0E14\u0E49\u0E27\u0E22\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2A\u0E39\u0E07 \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E43\u0E2A\u0E48\u0E43\u0E08\u0E43\u0E19\u0E17\u0E38\u0E01\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"
        };
      } else if (path.startsWith("/blog")) {
        return {
          title: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21/\u0E40\u0E01\u0E25\u0E47\u0E14\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49",
          subtitle: "",
          description: ""
        };
      } else if (path.startsWith("/portfolio")) {
        return {
          title: "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32",
          subtitle: "",
          description: ""
        };
      } else if (name === "contact") {
        return {
          title: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32",
          subtitle: "\u0E40\u0E23\u0E32\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E15\u0E2D\u0E1A\u0E17\u0E38\u0E01\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E43\u0E2A\u0E48\u0E43\u0E08",
          description: ""
        };
      } else {
        return {
          title: "",
          subtitle: "",
          description: ""
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="${ssrRenderClass(["page-bg", unref(routeClass)])}" data-v-8fd31509><nav class="${ssrRenderClass([{ scrolled: unref(isScrolled) }, "navbar"])}" data-v-8fd31509><div class="container" data-v-8fd31509><div class="nav-wrap" data-v-8fd31509><a href="/" class="logo" data-v-8fd31509>UD<span data-v-8fd31509>cp</span></a><ul class="${ssrRenderClass([{ open: unref(isOpen) }, "nav-links"])}" data-v-8fd31509><li data-v-8fd31509>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01`);
          } else {
            return [
              createTextVNode("\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8fd31509>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: "/portfolio"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32`);
          } else {
            return [
              createTextVNode("\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8fd31509>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: "/blog"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0E40\u0E01\u0E25\u0E47\u0E14\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49`);
          } else {
            return [
              createTextVNode("\u0E40\u0E01\u0E25\u0E47\u0E14\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8fd31509>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32`);
          } else {
            return [
              createTextVNode("\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><button class="${ssrRenderClass([{ open: unref(isOpen) }, "burger"])}" data-v-8fd31509><span data-v-8fd31509></span><span data-v-8fd31509></span><span data-v-8fd31509></span></button></div></div></nav><div class="hero" data-v-8fd31509><div class="container" data-v-8fd31509><div class="hero-text" data-v-8fd31509><h1 class="slide-up-on-scroll" data-v-8fd31509>${ssrInterpolate(unref(heroText).title)}</h1><h2 class="slide-down-on-scroll" data-v-8fd31509>${ssrInterpolate(unref(heroText).subtitle)}</h2><p class="slide-down-on-scroll" data-v-8fd31509>${ssrInterpolate(unref(heroText).description)}</p></div></div></div></div><button style="${ssrRenderStyle(unref(showBackToTop) ? null : { display: "none" })}" class="back-to-top" data-v-8fd31509> \u25B2 </button><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8fd31509"]]);
const _imports_0 = publicAssetsURL("/assets/icon/phone.svg");
const _imports_1 = publicAssetsURL("/assets/icon/line.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-a5f3920e><div class="footer-wrap" data-v-a5f3920e><div class="logo" data-v-a5f3920e><a href="/" class="logo" data-v-a5f3920e>UD<span data-v-a5f3920e>cp</span></a></div><div class="copy-rights" data-v-a5f3920e><p data-v-a5f3920e>Copyright \xA9 2025 Urbann De concept</p><p data-v-a5f3920e>All rights reserved.</p></div></div><div class="contact" data-v-a5f3920e><div class="contact-item" data-v-a5f3920e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-a5f3920e><p data-v-a5f3920e>085-464-4992</p></div><div class="contact-item" data-v-a5f3920e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-a5f3920e><p data-v-a5f3920e>089-484-8405</p></div><div class="contact-item" data-v-a5f3920e><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-a5f3920e><p data-v-a5f3920e>@Udcp</p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a5f3920e"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let observer = null;
    const route = useRoute();
    function setupObserver() {
      if (observer) observer.disconnect();
      (void 0).querySelectorAll(".animate-slide").forEach((el) => {
        el.classList.remove("animate-slide");
      });
      const options = { threshold: 0.2 };
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide");
          }
        });
      }, options);
      const targets = (void 0).querySelectorAll(".slide-up-on-scroll, .slide-down-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll");
      targets.forEach((el) => observer.observe(el));
    }
    watch(() => route.fullPath, async () => {
      await nextTick();
      setupObserver();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, {
        key: unref(route).fullPath
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CWrsrNFy.mjs.map
