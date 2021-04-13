import { mount } from '@cypress/vue'
import ClickToLazyLoad from '@/components/ClickToLazyLoad.vue'
import { createLocalVue } from '@vue/test-utils'
import VueCompositionAPI from '@vue/composition-api'

// See documentation here https://vue-test-utils.vuejs.org/api/options.html#localvue
const localVue = createLocalVue()
localVue.use(VueCompositionAPI)

describe('ClickToLazyLoad', () => {
  it('loads a component lazily when clicking a button', () => {
    mount(ClickToLazyLoad, { localVue })
    cy.get('button').click()
    cy.get('p').should(
      'have.text',
      `This is a test component to be loaded lazily with import('...')`
    )
  })
})
