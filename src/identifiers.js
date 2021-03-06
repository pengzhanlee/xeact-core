/**
 * 方法暴露注解
 * 组件内部方法 -> dom 方法
 * @type {*|Symbol}
 */
export const exposedSymbol = Symbol('ReactWebComponentsExposedMethod');

// for Getter & Setter
export const exposedGetterSetterSymbol = Symbol('ReactWebComponentsExposedGetterSetter');

/**
 * 属性观察注解
 * 标识可被观察的属性 (prop in React)
 * @type {*|Symbol}
 */
export const observedSymbol = Symbol('ReactWebComponentsObservedAttribute');

/**
 * CustomElement 命名空间
 * @type {string}
 */
export const componentNamespace = 'x';

/**
 * WebComponent 包装组件 displayName  (调试用)
 * @type {string}
 */
export const reactWebComponentDisplayName = 'CE';

/**
 * CE 的属性标识
 * @type {string}
 */
export const attrFlag = 'xeact';

/**
 * 容器类组件子组件位置属性标记符
 * @type {string}
 */
export const childrenAttrTag = 'x-ref';

/**
 * 容器类组件子组件位置属性标记值
 * @type {string}
 */
export const childrenAttrValue = 'body';
