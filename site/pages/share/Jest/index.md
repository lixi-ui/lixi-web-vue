### 介绍

### jest 单元测试

1. 基于vue3.0的单元测试

### 需要的安装的 npm包. vue-jest jest @vue/test-utils babel-jest

1. @vue/test-utils 官方文档 https://vue-test-utils.vuejs.org/zh/

2. jest 官方文档 https://jestjs.io/

```sh
  # 安装
  npm install vue-jest jest @vue/test-utils babel-jest
```

### 配置 jest.config.js

```js
module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/row/__tests__/**/*.[jt]s?(x)", // 匹配单个文件
    // "**/__tests__/**/*.[jt]s?(x)", // 匹配多个文件
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  "moduleFileExtensions": [
    "ts",
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ],
  "transform": {
    // 用 `vue-jest` 处理 `*.vue` 文件
    ".*\\.(vue)$": "vue-jest",
    '\\.(js|jsx|ts|tsx)$': [
      'babel-jest', {
        presets: [
          [
            '@babel/preset-env', //  处理 es6 语法
            {
              targets: {
                node: true,
              },
            },
          ],
          '@babel/preset-typescript', // 处理ts
        ],
        plugins: [
          '@vue/babel-plugin-jsx', // 处理 jsx
          // '@babel/plugin-proposal-class-properties',
        ]
      }
    ]
  }
};
```

### 为什么要使用单元测试?

1. 提升代码质量

2. 保证代码的整洁清晰

3. 减少原子功能模块的副作用

4. 兼容各种边界条件，降低出错率

5. 自动化单元测试，提高开发和测试效率、


### Input 例子介绍

### 组件对外提供的属性，事件，方法，做单元测试

1. 属性: disabled 是否可点击

2. 事件： event:focus & blur 

3. 方法： select

#### 编写测试案例 test 

#### 达到的预期结果  更多expect用法 请查询Jest官方文档，链接[官方文档](https://jestjs.io/docs/expect)

```js
import { nextTick, ref } from 'vue' 
import { mount } from '@vue/test-utils' // 使用的是 @vue/test-utils 中的 mount
import { sleep, defineGetter } from '@lixi/test-utils'
import Input from '../src/index.vue' // 引入要测试的代码

const _mount = options => mount({
  components: {
    'lx-input': Input,
  },
  ...options,
})

describe('Input.vue', () => { // 测试的描述
  test('disabled', () => { // 测试 disabled
    const wrapper = _mount({
      template: `<lx-input disabled />`,
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.element.disabled).not.toBeNull() // 预期结果是否满足
  })

  describe('Input Methods', () => {
    test('method:select', async () => { // 测试 disabled
      const testContent = 'test'
      const wrapper = _mount({
        template: `<lx-input v-model="text" />`,
        data() {
          return {
            text: testContent,
          }
        },
      })

      const input = wrapper.find('input').element
      let selected = false
      defineGetter(input, 'selectionStart', function() {
        return selected ? 0 : this.value.length
      })
      defineGetter(input, 'selectionEnd', function() {
        return this.value.length
      })

      expect(input.selectionStart).toEqual(testContent.length) // 预期结果是否满足
      expect(input.selectionEnd).toEqual(testContent.length) // 预期结果是否满足

      input.select()
      selected = true
      await sleep()
      expect(input.selectionStart).toEqual(0) // 预期结果是否满足
      expect(input.selectionEnd).toEqual(testContent.length) // 预期结果是否满足
    })
  })

  describe('Input Events', () => {
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    test('event:focus & blur', async () => { // 测试 disabled
      const wrapper = _mount({
        template: `<lx-input
          placeholder="请输入内容"
          :model-value="input"
          @focus="handleFocus"
          @blur="handleBlur"
        />`,
        setup() {
          const input = ref('')

          return {
            input,
            handleFocus,
            handleBlur,
          }
        },
      })

      const input = wrapper.find('input')

      await input.trigger('focus')
      expect(handleFocus).toBeCalled() // 预期结果是否满足

      await input.trigger('blur')
      expect(handleBlur).toBeCalled() // 预期结果是否满足
    })
  })
})
```