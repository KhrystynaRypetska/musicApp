
import { expect, test, describe } from "vitest";
import About from "@/views/About.vue";
import {  shallowMount, mount } from "@vue/test-utils";


describe('About.vue', () => {
    test('renders inner text', () => {
        const wrapper = shallowMount(About);

        expect(wrapper.text()).toContain("about");
    })

    test('renders inner text', () => {
        const wrapper = mount(About, {
            shallow: true,
        });

        expect(wrapper.text()).toContain("This");
    })
})