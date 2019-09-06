import { doPost } from './helper';
// 下面就可以写自己的一些获取数据的方法
const getProductList = doPost('/djh/product/list') //获取产品列表


export {
  getProductList
}