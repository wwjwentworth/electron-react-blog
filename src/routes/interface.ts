/*
 * @Author: 吴文洁
 * @Date: 2020-04-28 18:10:07
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-11 17:21:22
 * @Description: 
 */
/** 路由配置，最终解析后转给<Route>组件 */
export interface RouteConfig 
{
  /** 是否显示在主菜单 */
  showAside?: boolean,
  /** 标题，用于route组件和kio的description */
  title: string;
  /** 子菜单key */
  key?: string;
  /** 子菜单路径 */
  path?: string;
  iconType?: React.ReactElement;
  // 代替默认的component参数，基于路由code-splitting
  loader?: () => Promise<any>;
  component?: React.ComponentType<any>;
  exact?: boolean;
}

/** 左侧的菜单配置 */
export interface MenuConfig {
  key: string;
  iconType: React.ReactElement;
  title: string;
  /**
   * 若不包含子菜单, 则使用该属性。
   * route中的title、key不生效，直接使用menuConfig中的对应属性。
   */
  route?: RouteConfig;
}


export interface DomainConfig {
  key: string;
  name: string;
  menuConfig?: MenuConfig;
  routes: RouteConfig[];
}