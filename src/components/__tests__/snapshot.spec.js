import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { expect, test, describe } from "vitest";

describe('Snapshots SongItem.vue', () => {
    test("renders correctly", () => {
        const song = {
            docID: "abc",
            modified_name: "test",
            display_name: "test",
            comment_const: 5,
        }

        const wrapper = shallowMount(SongItem, {
            propsData: { song },
            global: {
                components: {
                    "router-link": RouterLinkStub,
                }
            }
        })

        expect(wrapper.element).toMatchSnapshot();
    });
})