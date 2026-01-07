import { _ as _sfc_main$1 } from './Input-B6rMyrRi.mjs';
import { d as _export_sfc, u as useI18n, e as useSeoMeta, g as _sfc_main$8, _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'reka-ui';
import '@vueuse/core';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'pinia';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.mentors.title"),
      description: () => t("seo.mentors.description")
    });
    const searchQuery = ref("");
    const activeExpertise = ref("all");
    const mentors = ref([
      {
        id: 1,
        name: "John Doe",
        title: "Senior Web Developer",
        avatar: "/images/instructors/john-doe.jpg",
        rating: 4.9,
        students: 1250,
        courses: 8,
        expertise: "programming",
        skills: ["JavaScript", "React", "Node.js", "TypeScript"],
        bio: "John has over 10 years of experience in web development and has worked with companies like Google and Microsoft. He specializes in building scalable web applications and is passionate about teaching others."
      },
      {
        id: 2,
        name: "Jane Smith",
        title: "UX/UI Design Lead",
        avatar: "/images/instructors/jane-smith.jpg",
        rating: 4.8,
        students: 980,
        courses: 6,
        expertise: "design",
        skills: ["UI Design", "UX Research", "Figma", "Prototyping"],
        bio: "Jane is an award-winning designer with a background in human-centered design. She has helped numerous startups create intuitive and beautiful user experiences."
      },
      {
        id: 3,
        name: "Michael Brown",
        title: "Digital Marketing Expert",
        avatar: "/images/instructors/michael-brown.jpg",
        rating: 4.7,
        students: 840,
        courses: 5,
        expertise: "business",
        skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
        bio: "Michael has generated over $10M in revenue for clients through strategic digital marketing campaigns. He specializes in helping businesses grow their online presence."
      },
      {
        id: 4,
        name: "Sarah Johnson",
        title: "Data Scientist",
        avatar: "/images/instructors/sarah-johnson.jpg",
        rating: 4.9,
        students: 1120,
        courses: 7,
        expertise: "programming",
        skills: ["Python", "Machine Learning", "Data Visualization", "SQL"],
        bio: "Sarah holds a PhD in Computer Science and has worked as a data scientist at Amazon. She specializes in turning complex data into actionable insights."
      },
      {
        id: 5,
        name: "David Wilson",
        title: "Graphic Designer",
        avatar: "/images/instructors/david-wilson.jpg",
        rating: 4.8,
        students: 750,
        courses: 4,
        expertise: "design",
        skills: ["Photoshop", "Illustrator", "Branding", "Typography"],
        bio: "David is a professional graphic designer with clients ranging from startups to Fortune 500 companies. He specializes in creating memorable brand identities."
      },
      {
        id: 6,
        name: "Emily Davis",
        title: "Business Strategist",
        avatar: "/images/instructors/emily-davis.jpg",
        rating: 4.6,
        students: 680,
        courses: 3,
        expertise: "business",
        skills: ["Strategic Planning", "Project Management", "Leadership", "Negotiation"],
        bio: "Emily has helped over 50 businesses achieve sustainable growth through strategic planning and operational improvements. She is passionate about empowering entrepreneurs."
      }
    ]);
    const filteredMentors = computed(() => {
      return mentors.value.filter((mentor) => {
        const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || mentor.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || mentor.skills.some((skill) => skill.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesExpertise = activeExpertise.value === "all" || mentor.expertise === activeExpertise.value;
        return matchesSearch && matchesExpertise;
      });
    });
    const resetFilters = () => {
      searchQuery.value = "";
      activeExpertise.value = "all";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$1;
      const _component_UButton = _sfc_main$8;
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "uno-min-h-screen uno-bg-white" }, _attrs))} data-v-db70fb16><section class="uno-py-16 uno-px-6 md:uno-px-12 lg:uno-px-24 uno-bg-gray-50" data-v-db70fb16><div class="uno-max-w-7xl uno-mx-auto" data-v-db70fb16><h1 class="uno-text-3xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-4" data-v-db70fb16>Our Expert Mentors</h1><p class="uno-text-lg uno-text-gray-600 uno-max-w-3xl" data-v-db70fb16> Meet our team of experienced professionals who are passionate about guiding you on your learning journey. </p></div></section><section class="uno-py-12 uno-px-6 md:uno-px-12 lg:uno-px-24" data-v-db70fb16><div class="uno-max-w-7xl uno-mx-auto" data-v-db70fb16><div class="uno-flex uno-flex-col md:uno-flex-row uno-justify-between uno-items-start md:uno-items-center uno-mb-12 uno-gap-4" data-v-db70fb16>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        placeholder: "Search mentors...",
        class: "uno-w-full md:uno-w-64",
        prefix: "search"
      }, null, _parent));
      _push(`<div class="uno-flex uno-flex-wrap uno-gap-2" data-v-db70fb16>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        class: "uno-rounded-full",
        pressed: activeExpertise.value === "all",
        onClick: ($event) => activeExpertise.value = "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` All Expertise `);
          } else {
            return [
              createTextVNode(" All Expertise ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        class: "uno-rounded-full",
        pressed: activeExpertise.value === "programming",
        onClick: ($event) => activeExpertise.value = "programming"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Programming `);
          } else {
            return [
              createTextVNode(" Programming ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        class: "uno-rounded-full",
        pressed: activeExpertise.value === "design",
        onClick: ($event) => activeExpertise.value = "design"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Design `);
          } else {
            return [
              createTextVNode(" Design ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        class: "uno-rounded-full",
        pressed: activeExpertise.value === "business",
        onClick: ($event) => activeExpertise.value = "business"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Business `);
          } else {
            return [
              createTextVNode(" Business ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="uno-grid uno-grid-cols-1 sm:uno-grid-cols-2 lg:uno-grid-cols-3 uno-gap-8" data-v-db70fb16><!--[-->`);
      ssrRenderList(filteredMentors.value, (mentor) => {
        _push(`<div class="uno-bg-white uno-rounded-lg uno-shadow-md uno-overflow-hidden hover:uno-shadow-lg uno-transition-all uno-duration-300 hover:uno--translate-y-1" data-v-db70fb16><div class="uno-p-6" data-v-db70fb16><div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-mb-6" data-v-db70fb16><div class="uno-w-32 uno-h-32 uno-rounded-full uno-overflow-hidden uno-border-4 uno-border-white uno-shadow-md uno-mb-4" data-v-db70fb16>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: mentor.avatar,
          alt: mentor.name,
          class: "uno-w-full uno-h-full uno-object-cover"
        }, null, _parent));
        _push(`</div><h3 class="uno-text-xl uno-font-bold uno-text-gray-900 uno-mb-1" data-v-db70fb16>${ssrInterpolate(mentor.name)}</h3><p class="uno-text-primary uno-font-medium uno-mb-2" data-v-db70fb16>${ssrInterpolate(mentor.title)}</p><div class="uno-flex uno-items-center uno-justify-center uno-mb-4" data-v-db70fb16><span class="uno-text-amber-500 uno-mr-1" data-v-db70fb16>★</span><span class="uno-text-sm uno-font-medium" data-v-db70fb16>${ssrInterpolate(mentor.rating)} (${ssrInterpolate(mentor.students)} students)</span></div><div class="uno-flex uno-flex-wrap uno-gap-2 uno-justify-center uno-mb-4" data-v-db70fb16><!--[-->`);
        ssrRenderList(mentor.skills, (skill) => {
          _push(`<span class="uno-text-xs uno-bg-gray-100 uno-text-gray-800 uno-px-3 uno-py-1 uno-rounded-full" data-v-db70fb16>${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div><p class="uno-text-gray-600 uno-text-sm uno-mb-6 uno-line-clamp-3" data-v-db70fb16>${ssrInterpolate(mentor.bio)}</p><div class="uno-flex uno-justify-between uno-items-center" data-v-db70fb16><span class="uno-text-sm uno-text-gray-500" data-v-db70fb16>${ssrInterpolate(mentor.courses)} courses</span>`);
        _push(ssrRenderComponent(_component_UButton, { class: "uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Profile `);
            } else {
              return [
                createTextVNode(" View Profile ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (filteredMentors.value.length === 0) {
        _push(`<div class="uno-text-center uno-py-16" data-v-db70fb16><p class="uno-text-gray-600 uno-text-lg" data-v-db70fb16>No mentors found matching your criteria.</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          class: "uno-mt-4 uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-full",
          onClick: resetFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Clear Filters `);
            } else {
              return [
                createTextVNode(" Clear Filters ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="uno-py-16 uno-px-6 md:uno-px-12 lg:uno-px-24 uno-bg-gray-50" data-v-db70fb16><div class="uno-max-w-7xl uno-mx-auto" data-v-db70fb16><h2 class="uno-text-2xl md:uno-text-3xl uno-font-bold uno-text-center uno-text-gray-900 uno-mb-12" data-v-db70fb16>Student Success Stories</h2><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-8" data-v-db70fb16><div class="uno-bg-white uno-p-6 uno-rounded-lg uno-shadow-md" data-v-db70fb16><div class="uno-flex uno-items-center uno-mb-4" data-v-db70fb16><div class="uno-text-amber-500 uno-flex" data-v-db70fb16><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span></div></div><p class="uno-text-gray-700 uno-mb-4 uno-italic" data-v-db70fb16> &quot;My mentor provided invaluable guidance throughout my learning journey. Their industry experience and personalized feedback helped me land my dream job.&quot; </p><div class="uno-flex uno-items-center" data-v-db70fb16><div class="uno-w-10 uno-h-10 uno-rounded-full uno-overflow-hidden uno-mr-3" data-v-db70fb16>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/students/alice.jpg",
        alt: "Alice",
        class: "uno-w-full uno-h-full uno-object-cover"
      }, null, _parent));
      _push(`</div><div data-v-db70fb16><p class="uno-font-medium uno-text-gray-900" data-v-db70fb16>Alice Thompson</p><p class="uno-text-sm uno-text-gray-600" data-v-db70fb16>Software Developer at TechCorp</p></div></div></div><div class="uno-bg-white uno-p-6 uno-rounded-lg uno-shadow-md" data-v-db70fb16><div class="uno-flex uno-items-center uno-mb-4" data-v-db70fb16><div class="uno-text-amber-500 uno-flex" data-v-db70fb16><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span><span data-v-db70fb16>★</span></div></div><p class="uno-text-gray-700 uno-mb-4 uno-italic" data-v-db70fb16> &quot;The mentorship program exceeded my expectations. My mentor was knowledgeable, supportive, and pushed me to achieve more than I thought possible.&quot; </p><div class="uno-flex uno-items-center" data-v-db70fb16><div class="uno-w-10 uno-h-10 uno-rounded-full uno-overflow-hidden uno-mr-3" data-v-db70fb16>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/students/bob.jpg",
        alt: "Bob",
        class: "uno-w-full uno-h-full uno-object-cover"
      }, null, _parent));
      _push(`</div><div data-v-db70fb16><p class="uno-font-medium uno-text-gray-900" data-v-db70fb16>Bob Johnson</p><p class="uno-text-sm uno-text-gray-600" data-v-db70fb16>UX Designer at CreativeStudio</p></div></div></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/-mentors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db70fb16"]]);

export { index as default };
//# sourceMappingURL=index-Dzw-H7lj.mjs.map
